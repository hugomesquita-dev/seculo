import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

// import { Container } from './styles';

const Button = ({title, color, onPress}) => {
  return (
    <View
      style={{
        backgroundColor: color ? color : '#4674b7',
        borderRadius: 10,
        marginBottom: 10,
      }}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          paddingVertical: 15,
          paddingHorizontal: 15,
        }}>
        <Text style={{textAlign: 'center', color: '#fff'}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
