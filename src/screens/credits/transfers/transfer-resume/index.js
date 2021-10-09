import React from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';

import Button from '../../../../components/core/button';
import Header from '../../../../components/ui/header';
import HeaderAuthenticated from '../../../../components/ui/header-authenticated';

// import { Container } from './styles';

class TransferResume extends React.Component {
  render() {
    return (
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
            DESEJA CONFIRMAR ESTA TRANSFERÊNCIA?
          </Text>
        </View>
        <View style={{flex: 1, paddingHorizontal: 20, alignItems: 'center'}}>
          <Image
            style={{
              marginVertical: 20,
              resizeMode: 'stretch',
              width: 80,
              height: 80,
            }}
            source={require('../../../../assets/images/transfer-ask.png')}
          />
          <View>
            <View style={{marginBottom: 20}}>
              <Text
                style={{color: '#383838', fontSize: 16, textAlign: 'center'}}>
                ALUNO DESTINO
              </Text>
              <Text
                style={{
                  color: '#383838',
                  fontSize: 16,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                BRENO MARTINS PEREIRA
              </Text>
            </View>
            <View style={{marginBottom: 20}}>
              <Text
                style={{color: '#383838', fontSize: 16, textAlign: 'center'}}>
                VALOR TRANSFERIDO
              </Text>
              <Text
                style={{
                  color: '#383838',
                  fontSize: 16,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                R$ 100,00
              </Text>
            </View>
            <View style={{marginBottom: 20}}>
              <Text
                style={{color: '#383838', fontSize: 16, textAlign: 'center'}}>
                DATA
              </Text>
              <Text
                style={{
                  color: '#383838',
                  fontSize: 16,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                18/08/2020
              </Text>
            </View>

            <View style={{marginBottom: 20, width: '50%'}}>
              <TouchableOpacity>
                <Text style={{textAlign: 'center'}}>
                  LEIA AS INFORMAÇÕES ANTES DE CONFIRMAR
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <Button
                title="CONFIRMAR"
                color="#51924B"
                onPress={() =>
                  this.props.navigation.navigate('TransferComplete')
                }
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default TransferResume;
