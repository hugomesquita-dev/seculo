import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';

import Header from '../../components/ui/header';
import HeaderAuthenticated from '../../components/ui/header-authenticated';
import HeaderSelectUser from '../../components/ui/header-select-user';

import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

class ListEvaluationTemplates extends React.Component {
  render() {
    return (
      <ScrollView
        contentContainerStyle={{flex: 1}}
        style={{
          backgroundColor: '#F1F1F2',
        }}>
        <View>
          <Header navigation={this.props.navigation} />
          <HeaderAuthenticated />
        </View>
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
            GABARITO DE PROVAS
          </Text>
        </View>
        <View style={{paddingHorizontal: 40}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 15,
              borderWidth: 1,
              borderColor: '#BBBCBF',
              borderRadius: 20,
              paddingHorizontal: 15,
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Icon name="angle-left" size={20} />
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold'}}>1º BIMESTRE</Text>
            <TouchableOpacity>
              <Icon name="angle-right" size={20} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 15,
              borderWidth: 1,
              borderColor: '#BBBCBF',
              borderRadius: 20,
              paddingHorizontal: 15,
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <View />
            <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
              LÍNGUA PORTUGUESA
            </Text>
            <TouchableOpacity>
              <Icon name="arrow-down" size={20} />
            </TouchableOpacity>
          </View>

          <View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingBottom: 15,
                borderBottomWidth: 1,
                borderBottomColor: ' #CCC',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <View style={{width: '15%'}}>
                <Image
                  source={require('../../assets/images/task.png')}
                  resizeMode="stretch"
                  style={{width: 40, height: 40}}
                />
              </View>
              <View style={{width: '60%'}}>
                <Text
                  style={{fontSize: 13, color: '#1A2541', fontWeight: 'bold'}}>
                  GRAMÁTICA
                </Text>
                <Text style={{fontSize: 12, color: '#1A2541'}}>
                  TIPO: OBJETIVA
                </Text>
                <Text style={{fontSize: 12, color: '#1A2541'}}>PROVA: N1</Text>
              </View>
              <View style={{width: '25%'}}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('EvaluationTemplates');
                  }}
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: '#CCC',
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                  }}>
                  <Text style={{textAlign: 'center'}}>Ver Gabarito</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingBottom: 15,
                borderBottomWidth: 1,
                borderBottomColor: ' #CCC',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <View style={{width: '15%'}}>
                <Image
                  source={require('../../assets/images/task.png')}
                  resizeMode="stretch"
                  style={{width: 40, height: 40}}
                />
              </View>
              <View style={{width: '60%'}}>
                <Text
                  style={{fontSize: 13, color: '#1A2541', fontWeight: 'bold'}}>
                  GRAMÁTICA
                </Text>
                <Text style={{fontSize: 12, color: '#1A2541'}}>
                  TIPO: OBJETIVA
                </Text>
                <Text style={{fontSize: 12, color: '#1A2541'}}>PROVA: N1</Text>
              </View>
              <View style={{width: '25%'}}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('EvaluationTemplates');
                  }}
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: '#CCC',
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                  }}>
                  <Text style={{textAlign: 'center'}}>Ver Gabarito</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingBottom: 15,
                borderBottomWidth: 1,
                borderBottomColor: ' #CCC',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <View style={{width: '15%'}}>
                <Image
                  source={require('../../assets/images/task.png')}
                  resizeMode="stretch"
                  style={{width: 40, height: 40}}
                />
              </View>
              <View style={{width: '60%'}}>
                <Text
                  style={{fontSize: 13, color: '#1A2541', fontWeight: 'bold'}}>
                  GRAMÁTICA
                </Text>
                <Text style={{fontSize: 12, color: '#1A2541'}}>
                  TIPO: OBJETIVA
                </Text>
                <Text style={{fontSize: 12, color: '#1A2541'}}>PROVA: N1</Text>
              </View>
              <View style={{width: '25%'}}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('EvaluationTemplates');
                  }}
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: '#CCC',
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                  }}>
                  <Text style={{textAlign: 'center'}}>Ver Gabarito</Text>
                </TouchableOpacity>
              </View>
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
              source={require('../../assets/images/bar.png')}
              resizeMode="contain"
            />
          </View>
          <View style={{paddingVertical: Platform.OS === 'android' ? 15 : 25}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Support')}>
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
      </ScrollView>
    );
  }
}

export default ListEvaluationTemplates;
