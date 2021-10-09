import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import Button from '../../components/core/button';
import SelectMonth from '../../components/core/select-month';

import Header from '../../components/ui/header';
import HeaderAuthenticated from '../../components/ui/header-authenticated';
import api from '../../config/api';
import CalendarComponent from './components/calendar';

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

class Calendara extends React.Component {
  state = {
    activeDate: new Date(),
    matrix: [],
    dates: [],
  };

  componentDidMount = () => {
    api
      .post('/calendario/lstCalendario/', {
        p_cd_turma: this.props.students.student.TURMA
      })
      .then((res) => {
        console.log(res.data);
        this.setState({
          dates: res.data,
        });
      })
      .catch((err) => {});

    this.generateMatrix();
  };

  changeMonth = (n) => {
    this.setState(() => {
      this.state.activeDate.setMonth(this.state.activeDate.getMonth() + n);
      return this.state;
    });

    this.generateMatrix();
  };

  generateMatrix = () => {
    let matrix = [];

    matrix[0] = weekDays;

    let year = this.state.activeDate.getFullYear();
    let month = this.state.activeDate.getMonth();

    let firstDay = new Date(year, month, 1).getDay();

    let maxDays = nDays[month];

    if (month === 1) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        maxDays += 1;
      }
    }

    var counter = 1;

    for (var row = 1; row < 7; row++) {
      matrix[row] = [];

      for (var col = 0; col < 7; col++) {
        matrix[row][col] = -1;

        if (row == 1 && col >= firstDay) {
          matrix[row][col] = counter++;
        } else if (row > 1 && counter <= maxDays) {
          matrix[row][col] = counter++;
        }
      }
    }

    this.setState({
      matrix,
    });
  };

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{backgroundColor: '#f1f1f2', flex: 1}}>
          <Header navigation={this.props.navigation} />
          <HeaderAuthenticated />
          <View
            style={{
              marginVertical: 15,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#4674b7',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              CALENDÁRIO
            </Text>
          </View>
          <View style={{paddingHorizontal: 30}}>
            <SelectMonth
              months={months}
              changeMonth={this.changeMonth}
              activated={this.state.activeDate
                .getMonth()
                .toLocaleString('pt-BR')}
            />

            <View>
              <CalendarComponent
                date={this.state.activeDate}
                matrix={this.state.matrix}
                {...this.props}
              />
            </View>

            <View>
              {this.state.dates.map((d) => {
                let date = new Date(this.state.activeDate).toLocaleDateString(
                  'pt-BR',
                );
                let monthDate = date.split('/');
                let monthDateAPI = d.DATA.split('/');
                console.log(monthDate[1]);

                if (monthDate[1] === monthDateAPI[1]) {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 15,
                      }}>
                      <View
                        style={{
                          flex: 0.3,
                        }}>
                        <Text
                          style={{
                            color: '#4674b7',
                            fontWeight: 'bold',
                            fontSize: 18,
                          }}>
                          {d.DATA}
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 0.7,
                        }}>
                        <Text style={{color: '#4674b7', fontWeight: 'bold'}}>
                          {d.DC_CALENDARIO}
                        </Text>
                      </View>
                    </View>
                  );
                }
              })}
            </View>

            {/* <View>
            <Text style={{textAlign: 'center'}}>WIP</Text>
            <TouchableOpacity onPress={() => this.changeMonth(-1)}>
              <Text>Anterior</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.changeMonth(+1)}>
              <Text>Próximo</Text>
            </TouchableOpacity>
          </View> */}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  students: state.students,
});

export default connect(mapStateToProps)(Calendara);
