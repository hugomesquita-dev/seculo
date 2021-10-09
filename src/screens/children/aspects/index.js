import React from 'react';
import {ScrollView, View} from 'react-native';

import Header from '../../../components/ui/header';
import HeaderAuthenticated from '../../../components/ui/header-authenticated';
// import { Container } from './styles';

const Aspects = () => {
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View style={{flex: 1}}>
        <Header />
        <HeaderAuthenticated />
      </View>
    </ScrollView>
  );
};

export default Aspects;
