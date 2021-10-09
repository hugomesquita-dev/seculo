import React from 'react';
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';

import Header from '../../../components/ui/header';
import HeaderAuthenticated from '../../../components/ui/header-authenticated';
// import { Container } from './styles';

class ChildSupport extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{flex: 1}}>
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
                width: '100%',
              }}>
              ACOMPANHAMENTO INFANTIL
            </Text>
          </View>
          <View style={{paddingHorizontal: 40, marginTop: 20}}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: '#707070',
                marginBottom: 10,
              }}>
              <Text
                style={{fontSize: 15, color: '#1A2541', fontWeight: 'bold'}}>
                COLAÇÃO
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  marginTop: 10,
                  marginBottom: 5,
                  color: '#707070',
                }}>
                Aceitação Total
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: '#707070',
                marginBottom: 10,
              }}>
              <Text
                style={{fontSize: 15, color: '#1A2541', fontWeight: 'bold'}}>
                ALMOÇO
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  marginTop: 10,
                  marginBottom: 5,
                  color: '#707070',
                }}>
                Repetiu
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: '#707070',
                marginBottom: 10,
              }}>
              <Text
                style={{fontSize: 15, color: '#1A2541', fontWeight: 'bold'}}>
                LANCHE
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  marginTop: 10,
                  marginBottom: 5,
                  color: '#707070',
                }}>
                Menos da metade
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: '#707070',
                marginBottom: 10,
              }}>
              <Text
                style={{fontSize: 15, color: '#1A2541', fontWeight: 'bold'}}>
                SONO/DESCANSO
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  marginTop: 10,
                  marginBottom: 5,
                  color: '#707070',
                }}>
                Dormiu
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginBottom: 10,
              }}>
              <Text
                style={{fontSize: 15, color: '#1A2541', fontWeight: 'bold'}}>
                EVACUAÇÃO
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  marginTop: 10,
                  marginBottom: 5,
                  color: '#707070',
                }}>
                1 vez
              </Text>
            </View>
            <View style={{marginTop: 20}}>
              <Text
                style={{
                  textAlign: 'center',
                  marginBottom: 10,
                  color: '#1A2541',
                  fontWeight: 'bold',
                }}>
                OBSERVAÇÃO
              </Text>
              <Text style={{color: '#383838', textAlign: 'justify'}}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation .
              </Text>
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

export default ChildSupport;
