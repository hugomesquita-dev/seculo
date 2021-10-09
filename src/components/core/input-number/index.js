import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import {Container} from './styles';

const InputNumber = ({
  placeholder,
  handleSumQuantity,
  handleSubQuantity,
  quantity,
}) => {
  return (
    <Container>
      <View>
        <Text style={{fontWeight: 'bold', marginBottom: 5}}>Quantidade</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={handleSubQuantity}
          style={{
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            width: '25%',
            backgroundColor: '#4674b7',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 20}}>
            -
          </Text>
        </TouchableOpacity>
        <View
          style={{
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
            backgroundColor: '#e1e1e1',
          }}>
          <Text>{quantity}</Text>
        </View>
        <TouchableOpacity
          onPress={handleSumQuantity}
          style={{
            borderBottomRightRadius: 10,
            borderTopRightRadius: 10,
            width: '25%',
            backgroundColor: '#4674b7',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default InputNumber;
