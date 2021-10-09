import React from 'react';
import {View, StatusBar, Text, ActivityIndicator} from 'react-native';

import {Container, LogoContent, Logo} from './styles';
import LogoImage from '../../../assets/images/logo.png';

// import { Container } from './styles';

const Loading = () => {
  return (
    <View style={{flex: 1}}>
      <Container
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
        colors={['#002DA3', '#011349']}>
        <StatusBar backgroundColor="#011349" barStyle="light-content" />
        <View>
          <LogoContent>
            <Logo source={LogoImage} resizeMode="contain" />
          </LogoContent>

          <ActivityIndicator color="#fff" size={40} />
        </View>
      </Container>
    </View>
  );
};

export default Loading;
