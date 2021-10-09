import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import Button from '../../../components/core/button';
import Timeline from '../../../components/core/timeline/Timeline';
import Header from '../../../components/ui/header';
import HeaderAuthenticated from '../../../components/ui/header-authenticated';

const movimentations = [
  {
    date: 1574342522000,
    data: [
      {
        title: 'ALMOÇO',
        subtitle: 'R$ 19,90',
        date: 1574342522000,
      },
      {
        title: 'CANTINA',
        subtitle: 'R$ 8,00',
        date: 1574342501000,
      },
    ],
  },
  {
    date: 1574248261000,
    data: [
      {
        title: 'CRÉDITO',
        subtitle: 'R$ 200,00',
        date: 1574248261000,
      },
    ],
  },
  {
    date: 1574125621000,
    data: [
      {
        title: 'FARDAMENTO COMPLETO',
        subtitle: 'R$ 200,00',
        date: 1574125621000,
      },
      {
        title: 'CRÉDITO',
        subtitle: 'R$ 100,00',
        date: 1574125621000,
      },
    ],
  },
];

class Extract extends React.Component {
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
            EXTRATO
          </Text>
        </View>
        <View style={{alignItems: 'center', paddingBottom: 20}}>
          <Text style={{color: '#1A2541', fontSize: 18}}>
            Saldo Crédito Disponível
          </Text>
          <Text style={{color: '#4674b7', fontSize: 28, fontWeight: 'bold'}}>
            R$ 135,00
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Timeline backgroundColor="#F1F1F2" data={movimentations} />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            zIndex: 100,
            width: '100%',
            backgroundColor: '#F1F1F2',
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

export default Extract;
