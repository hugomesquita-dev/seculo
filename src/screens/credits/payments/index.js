import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

import Button from '../../../components/core/button';
import Header from '../../../components/ui/header';
import HeaderAuthenticated from '../../../components/ui/header-authenticated';

// import { Container } from './styles';

class PaymentCredits extends React.Component {
  render() {
    const clipboardText = (value) => {
      Clipboard.setString(value);
    };

    return (
      <ScrollView
        contentContainerStyle={{
          flex: 1,
        }}>
        <View style={{flex: 1, backgroundColor: '#f1f1f2'}}>
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
              FORMAS DE PAGAMENTO
            </Text>
          </View>
          <View style={{paddingHorizontal: 40}}>
            <Text style={{marginBottom: 10, fontWeight: 'bold'}}>
              CARTÃO DE CRÉDITO
            </Text>
            <View style={{marginBottom: 20}}>
              <Button
                title="EFETUAR PAGAMENTO"
                color="#51924B"
                onPress={() =>
                  this.props.navigation.navigate('PaymentCreditCard')
                }
              />
            </View>
          </View>
          <View style={{paddingHorizontal: 40}}>
            <View>
              <View style={{marginBottom: 10}}>
                <Text style={{fontWeight: 'bold'}}>TRANSFERÊNCIA BANCÁRIA</Text>
                <Text>BRADESCO S.A - BANCO 0000</Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginBottom: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontWeight: 'bold'}}>
                  CNPJ: XX.XXX.XXX-0001-XX
                </Text>
                <TouchableOpacity
                  style={{paddingLeft: 20}}
                  onPress={() => clipboardText('XX.XXX.XXX-0001-XX')}>
                  <Icon name="copy" size={18} />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginBottom: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{flexShrink: 1, fontWeight: 'bold'}}>
                  RAZÃO SOCIAL: CENTRO EDUCACIONAL SÉCULO LTDA
                </Text>
                <TouchableOpacity
                  style={{paddingLeft: 20}}
                  onPress={() =>
                    clipboardText('CENTRO EDUCACIONAL SÉCULO LTDA')
                  }>
                  <Icon name="copy" size={18} />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginBottom: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontWeight: 'bold'}}>
                  CONTA CORRENTE: 123456-5
                </Text>
                <TouchableOpacity
                  style={{paddingLeft: 20}}
                  onPress={() => clipboardText('123456-5')}>
                  <Icon name="copy" size={18} />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginBottom: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontWeight: 'bold'}}>AGÊNCIA: 1234</Text>
                <TouchableOpacity
                  style={{paddingLeft: 20}}
                  onPress={() => clipboardText('1234')}>
                  <Icon name="copy" size={18} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              position: 'absolute',
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
                source={require('../../../assets/images/bar.png')}
                resizeMode="contain"
              />
            </View>
            <View style={{paddingVertical: 15}}>
              <TouchableOpacity>
                <Text style={{textAlign: 'center'}}>PRECISA DE AJUDA?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default PaymentCredits;
