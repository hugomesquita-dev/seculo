import React from 'react';

import {View, TouchableOpacity, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const SelectTwoMonth = ({
  activeTwoMonth,
  twoMonths,
  changeSubMonth,
  changeSumMonth,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 50,
      }}>
      <TouchableOpacity  style={{ paddingHorizontal: 10, paddingVertical: 3 }} onPress={() => changeSubMonth()}>
        <Icon name="angle-left" size={25}/>
      </TouchableOpacity>
      <View>
        <Text style={{fontWeight: 'bold'}}>
          {twoMonths[activeTwoMonth].title}
        </Text>
      </View>
      <TouchableOpacity  style={{ paddingHorizontal: 10, paddingVertical: 3 }} onPress={() => changeSumMonth()}>
        <Icon name="angle-right" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default SelectTwoMonth;
