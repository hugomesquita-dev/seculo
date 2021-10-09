import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import SelectMonth from '../../../components/core/select-month';

import Header from '../../../components/ui/header';
import HeaderAuthenticated from '../../../components/ui/header-authenticated';

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

class SingleMonth extends React.Component {
  state = {
    activeDate: new Date(),
  };

  changeMonth = (n) => {
    this.setState(() => {
      this.state.activeDate.setMonth(this.state.activeDate.getMonth() + n);

      return this.state;
    });
  };

  render() {
    return (
      <View>
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

        <View style={{paddingHorizontal: 40}}>
          <SelectMonth
            months={months}
            changeMonth={this.changeMonth}
            activated={this.state.activeDate.getMonth().toLocaleString('pt-BR')}
          />
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10,
                marginTop: 30,
              }}>
              <View
                style={{
                  flex: 0.2,
                }}>
                <Text
                  style={{
                    color: '#4674b7',
                    fontWeight: 'bold',
                    fontSize: 18,
                  }}>
                  QUA
                </Text>
                <Text
                  style={{color: '#4674b7', fontWeight: 'bold', fontSize: 30}}>
                  10
                </Text>
              </View>
              <View
                style={{
                  flex: 0.4,
                }}>
                <Text
                  style={{color: '#4674b7', fontWeight: 'bold', fontSize: 15}}>
                  Debate Regrado
                </Text>
                <Text style={{fontSize: 13}}>08:00 - 12:00</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#4674b7',
                  borderRadius: 10,
                  alignItems: 'center',
                  flex: 0.4,
                }}>
                <TouchableOpacity
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 5,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#fff',
                      fontSize: 13,
                    }}>
                    Aceitar | Recusar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <View
                style={{
                  flex: 0.2,
                }}>
                <Text
                  style={{
                    color: '#51924B',
                    fontWeight: 'bold',
                    fontSize: 18,
                  }}>
                  QUA
                </Text>
                <Text
                  style={{color: '#51924B', fontWeight: 'bold', fontSize: 30}}>
                  10
                </Text>
              </View>
              <View
                style={{
                  flex: 0.4,
                }}>
                <Text
                  style={{color: '#51924B', fontWeight: 'bold', fontSize: 15}}>
                  Debate Regrado
                </Text>
                <Text style={{fontSize: 13}}>08:00 - 12:00</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#4674b7',
                  borderRadius: 10,
                  alignItems: 'center',
                  flex: 0.4,
                }}>
                <TouchableOpacity
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 5,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#fff',
                      fontSize: 13,
                    }}>
                    Aceitar | Recusar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <View
                style={{
                  flex: 0.2,
                }}>
                <Text
                  style={{
                    color: '#CB2229',
                    fontWeight: 'bold',
                    fontSize: 18,
                  }}>
                  QUA
                </Text>
                <Text
                  style={{color: '#CB2229', fontWeight: 'bold', fontSize: 30}}>
                  10
                </Text>
              </View>
              <View
                style={{
                  flex: 0.4,
                }}>
                <Text
                  style={{color: '#CB2229', fontWeight: 'bold', fontSize: 15}}>
                  Debate Regrado
                </Text>
                <Text style={{fontSize: 13}}>08:00 - 12:00</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#4674b7',
                  borderRadius: 10,
                  alignItems: 'center',
                  flex: 0.4,
                }}>
                <TouchableOpacity
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 5,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#fff',
                      fontSize: 13,
                    }}>
                    Aceitar | Recusar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default SingleMonth;
