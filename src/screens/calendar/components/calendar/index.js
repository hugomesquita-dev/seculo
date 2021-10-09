import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class CalendarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      matrix: [],
    };
  }

  render() {
    let rows = [];

    return (
      <View style={{marginTop: 5, marginBottom: 20}}>
        {
          (rows = this.props.matrix.map((row, rowIndex) => {
            var rowItems = row.map((item, colIndex) => {
              
              return (
                <TouchableOpacity
                  key={item + 1}
                  style={{flex: 1}}
                  // onPress={() => this.props.navigation.navigate('SingleMonth')}>
                >
                  <Text
                    key={colIndex}
                    style={{
                      flex: 1,
                      height: 24,
                      textAlign: 'center',
                      color:
                        rowIndex == 0
                          ? '#4674B7'
                          : colIndex == 0
                          ? '#1A2541'
                          : '#1A2541',
                      fontWeight:
                        rowIndex == 0
                          ? 'bold'
                          : item == this.props.date.getDate()
                          ? 'bold'
                          : 'normal',
                    }}>
                    {item != -1 ? item : ''}
                  </Text>
                </TouchableOpacity>
              );
            });

            return (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  paddingVertical: 12,
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor:
                    rowIndex != 0 && rowIndex != 6 ? '#c3c3c3' : 'transparent',
                }}>
                {rowItems}
              </View>
            );
          }))
        }
      </View>
    );
  }
}

export default CalendarComponent;
