import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

// import { Container } from './styles';

const MenuItem = ({item}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    backgroundColor: '#dcda48',
    flexGrow: 1,
    margin: 4,
    padding: 20,
  },
  text: {
    color: '#333333',
  },
});
export default MenuItem;
