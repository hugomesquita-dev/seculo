import React from 'react';
import {Image, Text, View, StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconAlert from 'react-native-vector-icons/MaterialCommunityIcons'
Icon.loadFont();
IconAlert.loadFont();

import LogoImage from '../../../assets/images/logo.png';

import {HeaderGradient, Logo, Content} from './styles';

class Header extends React.Component {
  render() {
    return (
      <HeaderGradient 
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#002DA3', '#011349']}>
        <StatusBar backgroundColor="#011349" barStyle="light-content" />
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Dashboard')}>
            <Image
              source={require('../../../assets/images/home.png')}
              resizeMode="contain"
              style={{
                width: 20,
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Logo source={LogoImage} resizeMode="contain" />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Support')}>
            {/* <Image
              source={require('../../../assets/images/chat.png')}
              resizeMode="contain"
              style={{
                width: 20,
                marginRight: 25,
              }}
            /> */}

            <Text style={{marginRight:20}}><Icon name="wechat" size={25} color="#FFFFFF"/></Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Comunication')}>
             <Image
              source={require('../../../assets/images/notifications.png')}
              resizeMode="contain"
              style={{
                width: 20,
              }}
            /> 
            {/* <Text><IconAlert name="bell-ring" size={25} color="#FFFFFF"/></Text> */}
          </TouchableOpacity>
        </View>
      </HeaderGradient>
    );
  }
}

export default Header;
