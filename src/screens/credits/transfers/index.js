import React, { Component } from 'react';
import { Platform, View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Button from '../../../components/core/button';
import Header from '../../../components/ui/header';
import HeaderAuthenticated from '../../../components/ui/header-authenticated';
import HeaderSelectUser from '../../../components/ui/header-select-user';
import api from '../../../config/api';

class Transfers extends Component {
  state = {
    credits: {},
  };

  componentDidMount = () => {

    api
      .post('/compra/lstConsulta/', {
        p_cd_usuario_resp: this.props.students.student.RA,
        p_cd_usuario_alu: this.props.students.student.RA,
      })
      .then((res) => {

        console.log("CREDITO: " + res)
        this.setState({ credits: res.data[0] });
      })
      .catch((err) => {
        alert("Erro na consulta");
      });
  };

  componentDidUpdate = () => {
    api
      .post('/compra/lstConsulta/', {
        p_cd_usuario_resp: this.props.students.student.RA,
        p_cd_usuario_alu: this.props.students.student.RA,
      })
      .then((res) => {
        console.log("CREDITO UPDATE: " + res)
        this.setState({ credits: res.data[0] });
      })
      .catch((err) => {
        alert("Erro na consulta");
      });
  };

  render() {

    return (
      <View style={{ flex: 1, backgroundColor: '#f1f1f2' }}>
        <Header navigation={this.props.navigation} />
        <HeaderAuthenticated />
        <View
          style={{
            marginTop: 15,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#4674b7',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            SALDO DE CRÉDITO
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20, marginBottom: 15 }}>
          <HeaderSelectUser />
        </View>
        <View
          style={{
            justifyContent: 'center',
            paddingHorizontal: 40,
          }}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#c1c1c1',
            }}>
            <View
              style={{
                paddingVertical: 20,
                borderLeftWidth: 8,
                borderRadius: 10,
                borderColor: '#51924B',
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ fontSize: 20, color: '#383838' }}>
                Saldo Disponível
              </Text>
              <Text
                style={{
                  color: '#51924B',
                  fontWeight: 'bold',
                  fontSize: 32,
                  marginVertical: 3,
                }}>
                R$ {this.state.credits.CREDITO}
              </Text>
              <Text style={{ color: '#727272', fontWeight: '600', fontSize: 15 }}>
                Limite Diário R$ {this.state.credits.LIMITE_DIARIO}
              </Text>
            </View>
          </View>

          <View style={{ marginVertical: 40 }}>
            <Button
              title="EXTRATO E TRANSFERÊNCIA"
              onPress={() => this.props.navigation.navigate('PurchaseCredits')}
            />
            {/* <Button
              title="EXTRATO"
              onPress={() => this.props.navigation.navigate('Extract')}
            /> */}
          </View>

          {/* <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('AdjustsCredits')}>
              <Text style={{ color: '#4674b7', fontWeight: 'bold' }}>
                AJUSTAR LIMITE
              </Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  students: state.students,
});

export default connect(mapStateToProps)(Transfers);
