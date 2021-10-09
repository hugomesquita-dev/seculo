import React from 'react';
import {Platform, View, Text, Image, TouchableOpacity} from 'react-native';
import Header from '../../../components/ui/header';
import HeaderAuthenticated from '../../../components/ui/header-authenticated';
import Slider from '@react-native-community/slider';
import Button from '../../../components/core/button';

class AdjustsCredits extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
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
            AJUSTAR LIMITE
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={{marginBottom: 20}}>
            <Text style={{textAlign: 'center', color: '#383838', fontSize: 16}}>
              Saldo Crédito Disponível
            </Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text
              style={{
                textAlign: 'center',
                color: '#4674B7',
                fontWeight: 'bold',
                fontSize: 32,
              }}>
              R$ 300,00
            </Text>
            {/* <Text
              style={{
                textAlign: 'center',
                color: '#383838',
                fontSize: 16,
              }}>
              Limite Diário R$ 30,00
            </Text> */}
          </View>
        </View>
        <View style={{marginTop: 80, paddingHorizontal: 40}}>
          <View style={{width: '100%', alignItems: 'center'}}>
            <Slider
              style={{width: '100%'}}
              minimumValue={0}
              maximumValue={100}
              thumbTintColor="#4674B7"
              minimumTrackTintColor="#4674B7"
              maximumTrackTintColor="#000000"
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{textAlign: 'left', fontWeight: 'bold'}}>R$ 0</Text>
            <Text style={{textAlign: 'right', fontWeight: 'bold'}}>R$ 100</Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text
            style={{
              textAlign: 'center',
              color: '#383838',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Arraste para ajustar
          </Text>
        </View>
        <View style={{marginVertical: 40, paddingHorizontal: 40}}>
          <Button
            title="SALVAR"
            color="#51924B"
            onPress={() => this.props.navigation.navigate('Transfers')}
          />
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

export default AdjustsCredits;
