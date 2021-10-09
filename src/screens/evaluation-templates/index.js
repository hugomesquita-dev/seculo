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

const picsumImages = new Array(9).fill('http://placeimg.com/640/360/any');

const numColumns = 2;

class EvaluationTemplates extends React.Component {
  state = {images: []};

  componentDidMount = () => {
    this.setState({
      images: picsumImages,
    });
  };

  render() {
    const renderItem = ({item, index}) => {
      return (
        <>
          <View style={{width: '50%', paddingHorizontal: 20, marginTop: 10}}>
            {index === 0 || index === 1 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 5,
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}> </Text>
                <View
                  style={{
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{color: '#383838', fontSize: 9, fontWeight: 'bold'}}>
                    MARCADA
                  </Text>
                </View>
                <View
                  style={{
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{color: '#383838', fontSize: 9, fontWeight: 'bold'}}>
                    CORRETA
                  </Text>
                </View>
              </View>
            ) : null}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                {index + 1}
              </Text>
              <View
                style={{
                  backgroundColor: '#4674B7',
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>A</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#51924B',
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>A</Text>
              </View>
            </View>
          </View>
        </>
      );
    };

    return (
      <ScrollView
        contentContainerStyle={{flex: 1}}
        style={{
          backgroundColor: '#F1F1F2',
        }}>
        <View style={{height: '100%'}}>
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
              GABARITO DE PROVAS
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 40,
            }}>
            <Text style={{marginBottom: 10}}>
              DISCIPLINHA: HISTÓRIA - OBJETIVA 0000225
            </Text>
            <Text>HORA INICIADA: 14h40</Text>
            <Text style={{marginBottom: 10}}>HORA FINALIZADA: 16h20</Text>
            <Text>Etapas: Avaliação - ens. Médio - 2º ano</Text>
            <Text style={{marginBottom: 10}}>
              2º bimestre - 1º chamada - n2
            </Text>

            <FlatList
              data={this.state.images}
              renderItem={(item, index) => renderItem(item, index)}
              numColumns={numColumns}
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
                  width: '100%',
                }}
                source={require('../../assets/images/bar.png')}
                resizeMode="contain"
              />
            </View>
            <View
              style={{paddingVertical: Platform.OS === 'android' ? 15 : 25}}>
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
        </View>
      </ScrollView>
    );
  }
}

export default EvaluationTemplates;
