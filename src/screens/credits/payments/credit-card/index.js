import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ToastAndroid,
  KeyboardAvoidingView,
} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';

import api from '../../../../config/api';

import Button from '../../../../components/core/button';
import Header from '../../../../components/ui/header';
import HeaderAuthenticated from '../../../../components/ui/header-authenticated';

class PaymentCreditCard extends React.Component {
  state = {
    name: '',
    card: '',
    cpf: '',
    cvc: '',
    validate: '',
  };

  handlePayment = () => {
    api
      .post('/compra/addPagamento/', {
        p_produto: '2648',
        p_cod_bandeira: 'visa',
        p_form_pagamento: '1',
        p_num_cartao: this.state.card,
        p_cvv: this.state.cvc,
        p_nome: this.state.name,
        p_vencimento: this.state.validate,
        p_valor_total: '100',
      })
      .then((res) => {
        ToastAndroid.showWithGravityAndOffset(
          res.data.tid_msg,
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
      })
      .catch((err) => {});
  };

  render() {
    return (
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={{backgroundColor: '#f1f1f2'}}>
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
                PAGAMENTO NO CARTÃO DE CRÉDITO
              </Text>
            </View>
            <View style={{paddingHorizontal: 40, marginTop: 20}}>
              <View style={{paddingBottom: 20}}>
                <Text style={{textAlign: 'center'}}>
                  Você está adquirindo R$ 100 de créditos.
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginBottom: 15}}>
                <TextInputMask
                  value={this.state.card}
                  onChangeText={(card) => this.setState({card})}
                  type={'custom'}
                  options={{
                    mask: '9999 9999 9999 9999',
                  }}
                  placeholder="Número no cartão"
                  keyboardType="number-pad"
                  style={{
                    borderBottomColor: '#c3c3c3',
                    borderBottomWidth: 1,
                    paddingVertical: 10,
                    flex: 1,
                  }}
                />
              </View>
              <View style={{flexDirection: 'row', marginBottom: 15}}>
                <TextInput
                  onChangeText={(name) => this.setState({name})}
                  placeholder="Nome impresso no cartão"
                  style={{
                    borderBottomColor: '#c3c3c3',
                    borderBottomWidth: 1,
                    paddingVertical: 10,
                    flex: 1,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 15,
                }}>
                <TextInputMask
                  value={this.state.validate}
                  onChangeText={(validate) => this.setState({validate})}
                  type={'custom'}
                  options={{
                    mask: '99/9999',
                  }}
                  placeholder="Validade"
                  keyboardType="number-pad"
                  style={{
                    borderBottomColor: '#c3c3c3',
                    borderBottomWidth: 1,
                    paddingVertical: 10,
                    flex: 1,
                  }}
                />
                <TextInputMask
                  value={this.state.cvc}
                  onChangeText={(cvc) => this.setState({cvc})}
                  type={'custom'}
                  options={{
                    mask: '999',
                  }}
                  placeholder="CVC"
                  keyboardType="number-pad"
                  style={{
                    borderBottomColor: '#c3c3c3',
                    borderBottomWidth: 1,
                    paddingVertical: 10,
                    flex: 1,
                  }}
                />
              </View>
              <View style={{flexDirection: 'row', marginBottom: 15}}>
                <TextInputMask
                  value={this.state.cpf}
                  onChangeText={(cpf) => this.setState({cpf})}
                  type={'cpf'}
                  placeholder="CPF"
                  keyboardType="number-pad"
                  style={{
                    borderBottomColor: '#c3c3c3',
                    borderBottomWidth: 1,
                    paddingVertical: 10,
                    flex: 1,
                  }}
                />
              </View>
              <View style={{marginVertical: 30}}>
                <Button
                  title="EFETUAR PAGAMENTO"
                  color="#51924B"
                  onPress={() => this.handlePayment()}
                />
              </View>
            </View>
            <View
              style={{
                bottom: 0,
                zIndex: 100,
                width: '100%',
              }}>
              <View>
                <Image
                  style={{
                    marginTop: 40,
                    width: '100%',
                  }}
                  source={require('../../../../assets/images/bar.png')}
                  resizeMode="contain"
                />
              </View>
              <View
                style={{paddingVertical: Platform.OS === 'android' ? 15 : 25}}>
                <TouchableOpacity>
                  <Text
                    style={{
                      textAlign: 'center',
                      marginBottom: Platform.OS === 'android' ? 0 : 10,
                    }}>
                    PRECISA DE AJUDA?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default PaymentCreditCard;
