import React from 'react';
import {Platform, Keyboard, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
Icon.loadFont();

const Select = () => {
  return null;
  // <DropDownPicker
  //   items={[
  //     {
  //       label: 'USA',
  //       value: 'usa',
  //       icon: () => <Icon name="flag" size={18} color="#900" />,
  //       hidden: true,
  //     },
  //     {
  //       label: 'UK',
  //       value: 'uk',
  //       icon: () => <Icon name="flag" size={18} color="#900" />,
  //     },
  //     {
  //       label: 'France',
  //       value: 'france',
  //       icon: () => <Icon name="flag" size={18} color="#900" />,
  //     },
  //   ]}
  //   defaultValue={'uk'}
  //   dropDownMaxHeight={200}
  //   showArrow={true}
  //   // containerStyle={[{paddingHorizontal: 0, flexDirection: 'column'}]}
  //   style={{backgroundColor: 'transparent'}}
  //   placeholder={'Select your service(s)'}
  //   placeholderStyle={{color: 'red'}}
  //   itemStyle={{
  //     justifyContent: 'flex-start',
  //   }}
  //   dropDownStyle={[
  //     {backgroundColor: '#fafafa'},
  //     Platform.OS == 'android' ? {position: 'relative', top: 0} : {},
  //   ]}
  // />
};

export default Select;
