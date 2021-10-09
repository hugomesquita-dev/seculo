import React from 'react';
import {Text, TextInput} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';

import {Container} from './styles';

const Input = ({placeholder, price, changePrice}) => {
  return (
    <Container>
      <Text style={{fontWeight: 'bold', marginBottom: 5}}>{placeholder}</Text>
      <TextInputMask
        style={{
          backgroundColor: '#e1e1e1',
          borderRadius: 10,
          paddingHorizontal: 15,
          paddingVertical: 15,
        }}
        keyboardType="number-pad"
        placeholder={'R$ 100,00'}
        type={'money'}
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: 'R$ ',
          suffixUnit: '',
        }}
        value={price}
        onChangeText={(value) => {
          changePrice(value);
        }}
      />
    </Container>
  );
};

export default Input;
