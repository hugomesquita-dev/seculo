import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

// import { Container } from './styles';

const SelectMonth = ({months, changeMonth, activated}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity onPress={() => changeMonth(-1)}>
        <Icon name="angle-left" />
      </TouchableOpacity>
      <View>
        <Text style={{fontWeight: 'bold'}}>{months[activated]}</Text>
      </View>
      <TouchableOpacity onPress={() => changeMonth(+1)}>
        <Icon name="angle-right" />
      </TouchableOpacity>
    </View>
  );
};

export default SelectMonth;

