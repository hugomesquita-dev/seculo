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
import HeaderSelectUser from '../../components/ui/header-select-user';

class AcompanhamentoInfantil extends React.Component {
  state = {
    acompanhamento: {},
    loading: true
  };

  componentDidMount = async () => {
    await api
      .post('/acompanhamento/lstAcompanhamentoInfantil/', {
        p_cd_usuario: this.props.auth.user.USU_LOGIN,
      })
      .then((res) => {

        console.log("  INFANTIL: " + JSON.stringify(res.data))

        var info = {}

        for (let index in res.data) {

            console.log("  INFANTIL: " + JSON.stringify(res.data[index]))

          if (res.data[index].RA == this.props.students.student.RA) {
            info = res.data[index]
          }
        }

        this.setState({
            acompanhamento: info,
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
    await api
      .post('/acompanhamento/lstAcompanhamentoInfantil/', {
        p_cd_usuario: this.props.auth.user.USU_LOGIN,
      })
      .then((res) => {

        console.log("  INFANTIL: " + JSON.stringify(res.data))

        var info = {}

        for (let index in res.data) {

            console.log("  INFANTIL: " + JSON.stringify(res.data[index]))

          if (res.data[index].RA == this.props.students.student.RA) {
            info = res.data[index]
          }
        }

        this.setState({
            acompanhamento: info,
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
                width: '70%',
                marginBottom: 10
              }}>
              ACOMPANHAMENTO INFANTIL
            </Text>
          </View>

          <View style={{ paddingHorizontal: 20 }}>
            <HeaderSelectUser />
          </View>

          <View style={{ paddingHorizontal: 40 }}>

            {this.state.loading && <ActivityIndicator size="large" color="#4674B7" />}

            <View style={{ marginTop: 20 }}>

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

                    <View >
                        <Text
                        style={{
                          fontSize: 16,
                          color: '#1A2541',
                          fontWeight: 'bold',
                        }}>
                        LANCHE DA MANHÃ
                      </Text>

                      <Text
                        style={{
                          fontSize: 13,
                          color: '#1A2541',
                        }}>
                        {this.state.acompanhamento.OBS_COLACAO}
                      </Text>

                    </View>

                    <View >
                      <Text
                        style={{
                          fontSize: 13,
                          color: '#1A2541',
                        }}>
                        {this.state.acompanhamento.COLACAO != null ? this.state.acompanhamento.COLACAO : '-'}
                      </Text>
                    </View>
                </View>


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

                    <View >
                        <Text
                        style={{
                          fontSize: 16,
                          color: '#1A2541',
                          fontWeight: 'bold',
                        }}>
                        ALMOÇO
                      </Text>

                      <Text
                        style={{
                          fontSize: 13,
                          color: '#1A2541',
                        }}>
                        {this.state.acompanhamento.OBS_ALMOCO}
                      </Text>

                    </View>

                    <View >
                      <Text
                        style={{
                          fontSize: 13,
                          color: '#1A2541',
                        }}>
                        {this.state.acompanhamento.ALMOCO != null ? this.state.acompanhamento.ALMOCO : '-'}
                      </Text>
                    </View>
                </View>

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

                    <View >
                        <Text
                        style={{
                          fontSize: 16,
                          color: '#1A2541',
                          fontWeight: 'bold',
                        }}>
                        LANCHE DA TARDE
                      </Text>

                      <Text
                        style={{
                          fontSize: 13,
                          color: '#1A2541',
                        }}>
                        {this.state.acompanhamento.OBS_LANCHE}
                      </Text>

                    </View>

                    <View >
                      <Text
                        style={{
                          fontSize: 13,
                          color: '#1A2541',
                        }}>
                        {this.state.acompanhamento.LANCHE != null ? this.state.acompanhamento.LANCHE : '-'}
                      </Text>
                    </View>
                </View>

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

                    <View >
                        <Text
                        style={{
                          fontSize: 16,
                          color: '#1A2541',
                          fontWeight: 'bold',
                        }}>
                        SONO
                      </Text>

                      <Text
                        style={{
                          fontSize: 13,
                          color: '#1A2541',
                        }}>
                        {this.state.acompanhamento.OBS_SONO}
                      </Text>

                    </View>

                    <View >
                      <Text
                        style={{
                          fontSize: 13,
                          color: '#1A2541',
                        }}>
                        {this.state.acompanhamento.SONO != null ? this.state.acompanhamento.SONO : '-'}
                      </Text>
                    </View>
                </View>


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

                    <View >
                        <Text
                        style={{
                          fontSize: 16,
                          color: '#1A2541',
                          fontWeight: 'bold',
                        }}>
                        EVACUAÇÃO
                      </Text>

                      <Text
                        style={{
                          fontSize: 13,
                          color: '#1A2541',
                        }}>
                        {this.state.acompanhamento.OBS_EVACUACAO}
                      </Text>

                    </View>

                    <View >
                      <Text
                        style={{
                          fontSize: 13,
                          color: '#1A2541',
                        }}>
                        {this.state.acompanhamento.EVACUACAO != null ? this.state.acompanhamento.EVACUACAO : '-'}
                      </Text>
                    </View>
                </View>

            </View>
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

export default connect(mapStateToProps)(AcompanhamentoInfantil);
