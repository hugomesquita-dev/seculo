import React from 'react';
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';

import Header from '../../../components/ui/header';
import HeaderAuthenticated from '../../../components/ui/header-authenticated';

import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderSelectUser from '../../../components/ui/header-select-user';
import Button from '../../../components/core/button';
Icon.loadFont();

const ConceptualAssessment = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
        }}>
        <Header />
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
            AVALIAÇÃO CONCEITUAL
          </Text>
          <Text style={{marginTop: 5, color: '#1A2541'}}>
            EDUCAÇÃO INFANTIL
          </Text>
        </View>
        <View style={{padding: 40}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Icon name="angle-left" />
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold'}}>1º BIMESTRE</Text>
            <TouchableOpacity>
              <Icon name="angle-left" />
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 90}}>
            <Text style={{marginBottom: 5}}>ALUNO(A):</Text>
            <HeaderSelectUser />
          </View>
          <View style={{marginTop: 80}}>
            <Button title="VER AVALIAÇÃO" />
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
    </ScrollView>
  );
};

export default ConceptualAssessment;
