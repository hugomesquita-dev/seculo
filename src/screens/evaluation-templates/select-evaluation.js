import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';

import api from '../../config/api';

import Header from '../../components/ui/header';
import HeaderAuthenticated from '../../components/ui/header-authenticated';
import SelectTwoMonth from '../../components/core/select-two-month';
import HeaderSelectUser from '../../components/ui/header-select-user';

class SelectEvaluation extends React.Component {
  state = {
    evaluations: [],
    twoMonths: [
      {
        title: '1º Bimestre',
      },
      {
        title: '2º Bimestre',
      },
      {
        title: '3º Bimestre',
      },
      {
        title: '4º Bimestre',
      },
    ],
    activeTwoMonth: 0,
    evaluationsActivated: [],
    loading: true,
    bimestre: 1
  };

  componentDidMount = async () => {
    await api
      .post('/gabarito/lstGabarito/', {
        p_cd_usuario: this.props.auth.student.RA,
      })
      .then((res) => {

        console.log("  Provas: " + res.data)

        let evaluationsActivated = [];

        for (let prova in res.data) {

          if (res.data[prova].BIMESTRE == this.state.bimestre) {
            evaluationsActivated.push(res.data[prova]);
          }
        };

        this.setState({
          evaluations: res.data,
          evaluationsActivated: evaluationsActivated,
          loading: false,
        });
      })
      .catch((err) => {
        alert("Erro ao carregar os dados.");
        this.setState({
          loading: false,
        });
      });
  };

  componentDidUpdate = async () => {
    api
      .post('/gabarito/lstGabarito/', {
        p_cd_usuario: this.props.auth.student.RA,
      })
      .then((res) => {

        console.log("  Provas: " + res.data)

        let evaluationsActivated = [];

        for (let prova in res.data) {

          if (res.data[prova].BIMESTRE == this.state.bimestre) {
            evaluationsActivated.push(res.data[prova]);
          }
        };

        this.setState({
          evaluations: res.data,
          evaluationsActivated: evaluationsActivated,
          loading: false,
        });
      })
      .catch((err) => {
        alert("Erro ao carregar os dados.");
        this.setState({
          loading: false,
        });
      });
  };

  changeSubMonth = () => {
    if (this.state.bimestre > 1) {

      let evaluationsActivated = [];
      let bim = this.state.bimestre - 1

      console.log("  xxxxxx  sub Bim: " + bim + "   xxxxxxxxx")

      for (let prova in this.state.evaluations) {

        if (this.state.evaluations[prova].BIMESTRE == bim) {
          evaluationsActivated.push(this.state.evaluations[prova]);
        }
      };

      this.setState(
        {
          activeTwoMonth: bim - 1,
          evaluationsActivated: evaluationsActivated,
          bimestre: bim
        });
    }
  };

  changeSumMonth = () => {
    if (this.state.bimestre <= 3) {

      let evaluationsActivated = [];
      let bim = this.state.bimestre + 1

      console.log("  xxxxxx  sum Bim: " + bim + "   xxxxxxxxx")

      for (let prova in this.state.evaluations) {

        if (this.state.evaluations[prova].BIMESTRE == bim) {
          evaluationsActivated.push(this.state.evaluations[prova]);
        }
      };

      this.setState(
        {
          activeTwoMonth: bim - 1,
          evaluationsActivated: evaluationsActivated,
          bimestre: bim
        });

    }
  };

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: '#f1f1f2' }}>
          <Header navigation={this.props.navigation} />
          <HeaderAuthenticated />
          <View
            style={{
              marginVertical: 15,
              alignItems: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#4674b7',
                fontWeight: 'bold',
                fontSize: 16,
                width: '50%',
              }}>
              GABARITO DE PROVAS
            </Text>
          </View>

          <View style={{ paddingHorizontal: 20 }}>
            <HeaderSelectUser />
          </View>

          <View style={{ paddingHorizontal: 40, marginTop: 10 }}>
            <SelectTwoMonth
              activeTwoMonth={this.state.activeTwoMonth}
              twoMonths={this.state.twoMonths}
              changeSubMonth={this.changeSubMonth}
              changeSumMonth={this.changeSumMonth}
            />

            {this.state.loading && <ActivityIndicator size="large" color="#4674B7" />}

            <View style={{ marginTop: 20 }}>

              {this.state.evaluationsActivated.length == 0 && <Text style={{ textAlign: 'center', }}> Não há dados</Text>}

              <FlatList
                data={this.state.evaluationsActivated}
                renderItem={(itemData) =>

                  <View
                    style={{
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      paddingBottom: 15,
                      borderBottomWidth: 1,
                      borderBottomColor: '#c1c1c1',
                      alignItems: 'center',
                      marginBottom: 10,
                    }}>
                    <View style={{ width: '15%' }}>
                      <Image
                        source={require('../../assets/images/task.png')}
                        resizeMode="stretch"
                        style={{ width: 40, height: 40 }}
                      />
                    </View>
                    <View style={{ width: '60%' }}>
                      <Text
                        style={{
                          fontSize: 13,
                          color: '#1A2541',
                          fontWeight: 'bold',
                        }}>
                        {itemData.item.TITULO}
                      </Text>
                      <Text style={{ fontSize: 12, color: '#1A2541' }}>Data: {itemData.item.DT_PROVA}</Text>
                      <Text style={{ fontSize: 12, color: '#1A2541' }}>Número: {itemData.item.NUM_PROVA}</Text>
                    </View>
                    <View style={{ width: '25%' }}>
                      {/* <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate('EvaluationTemplates');
                      }}
                      style={{
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: '#CCC',
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                      }}>
                      <Text style={{ textAlign: 'center' }}>Ver Gabarito</Text>
                    </TouchableOpacity> */}
                    </View>
                  </View>

                }
                keyExtractor={(item) => item.name}
              />

            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(SelectEvaluation);
