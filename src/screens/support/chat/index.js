import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView
} from 'react-native';

import Header from '../../../components/ui/header';
import HeaderAuthenticated from '../../../components/ui/header-authenticated';

// import { Container } from './styles';

class Chat extends React.Component {
  render() {
    const Reply = () => {
      return (
        <View style={{flexDirection: 'row-reverse', marginTop: 10}}>
          <View
            style={{
              borderColor: '#c3c3c3',
              borderWidth: 1,
              padding: 20,
              borderRadius: 10,
            }}>
            <Text
              style={{color: '#4674B7', fontWeight: 'bold', marginBottom: 3}}>
              Hugo Mesquita
            </Text>
            <Text>Olá, gostaria de uma informação...</Text>
            <Text style={{fontSize: 10, marginTop: 10, textAlign: 'right'}}>
              10:00
            </Text>
          </View>
        </View>
      );
    };

    const SeculoReply = () => {
      return (
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <View
            style={{
              borderColor: '#c3c3c3',
              borderWidth: 1,
              padding: 20,
              borderRadius: 10,
            }}>
            <Text
              style={{color: '#EA943D', fontWeight: 'bold', marginBottom: 3}}>
              Hugo Mesquita
            </Text>
            <Text>Olá, gostaria de uma informação...</Text>
            <Text style={{fontSize: 10, marginTop: 10, textAlign: 'right'}}>
              10:00
            </Text>
          </View>
        </View>
      );
    };

    return (
     
      <ScrollView
        contentContainerStyle={{
          flex: 1,
        }}>
        
        <View style={{flex: 1, backgroundColor: '#F1F1F2'}}>
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
              CHAT
            </Text>
          </View>


          <View
            style={{
              paddingHorizontal: 20,
              flex: 1,
              justifyContent: 'space-between',
              paddingVertical: 20,
            }}>
            <View>
              <Reply />
              <SeculoReply />
            </View>
           
           
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderColor: '#ccc',
                borderWidth: 1,
                borderRadius: 10,
                alignItems: 'center',
              }}>
              <TextInput
                placeholder="Texto"
                keyboardType="default"
                style={{
                  paddingVertical: 20,
                  paddingHorizontal: 20,
                }}
              />
              <Image
                source={require('../../../assets/images/message.png')}
                resizeMode="stretch"
                style={{width: 20, height: 20, marginRight: 10}}
              />
            </View>

            
          </View>
          


        </View>
        
      </ScrollView>
    );
  }
}

export default Chat;
