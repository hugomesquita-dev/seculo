import React, {Component} from 'react';
import {Platform, View, Text, Image, TouchableOpacity} from 'react-native';

import Button from '../../../../components/core/button';
import Header from '../../../../components/ui/header';
import HeaderAuthenticated from '../../../../components/ui/header-authenticated';

class TransferCredit extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f1f1f2'}}>
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
            TRANSFERÊNCIA DE CRÉDITO
          </Text>
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
              <Text style={{fontSize: 20, color: '#383838'}}>
                Saldo Disponível
              </Text>
              <Text
                style={{
                  color: '#51924B',
                  fontWeight: 'bold',
                  fontSize: 32,
                  marginVertical: 3,
                }}>
                R$ 135,00
              </Text>
            </View>
          </View>

          <View style={{marginVertical: 40}}>
            <Button
              title="TRANSFERIR"
              onPress={() => this.props.navigation.navigate('Transfers')}
            />
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
              source={require('../../../../assets/images/bar.png')}
              resizeMode="contain"
            />
          </View>
          <View style={{paddingVertical: Platform.OS === 'android' ? 15 : 25}}>
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
    );
  }
}

export default TransferCredit;
