import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import TabItem from './tab-item';

const Tab = ({data, active, changeTabSelected}) => {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: '#F1F1F2',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => changeTabSelected(0)}
            style={[
              styles.menu,
              {backgroundColor: active === 0 ? '#E2B94B' : '#fff'},
            ]}>
            <Text
              style={[
                styles.menuText,
                {color: active === 0 ? '#fff' : '#4674b7'},
              ]}>
              SEG
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeTabSelected(1)}
            style={[
              styles.menu,
              {backgroundColor: active === 1 ? '#E2B94B' : '#fff'},
            ]}>
            <Text
              style={[
                styles.menuText,
                {color: active === 1 ? '#fff' : '#4674b7'},
              ]}>
              TER
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeTabSelected(2)}
            style={[
              styles.menu,
              {backgroundColor: active === 2 ? '#E2B94B' : '#fff'},
            ]}>
            <Text
              style={[
                styles.menuText,
                {color: active === 2 ? '#fff' : '#4674b7'},
              ]}>
              QUA
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeTabSelected(3)}
            style={[
              styles.menu,
              {backgroundColor: active === 3 ? '#E2B94B' : '#fff'},
            ]}>
            <Text
              style={[
                styles.menuText,
                {color: active === 3 ? '#fff' : '#4674b7'},
              ]}>
              QUI
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeTabSelected(4)}
            style={[
              styles.menu,
              {backgroundColor: active === 4 ? '#E2B94B' : '#fff'},
            ]}>
            <Text
              style={[
                styles.menuText,
                {color: active === 4 ? '#fff' : '#4674b7'},
              ]}>
              SEX
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <View
            style={{borderRadius: 20, backgroundColor: '#fff', marginTop: 20}}>
            <Text
              style={{
                backgroundColor: '#4674b7',
                textAlign: 'center',
                paddingVertical: 15,
                borderRadius: 25,
                color: '#fff',
                fontWeight: 'bold',
                overflow: 'hidden'
              }}>
              LANCHE DA MANHÃ
            </Text>
            <View style={{paddingVertical: 20}}>
              <Text style={{textAlign: 'center'}}>
                Principal: {data.coffee[0]}
              </Text>
              <Text style={{textAlign: 'center'}}>
                Acompanhamento: {data.coffee[1]}
              </Text>
            </View>
            <Text
              style={{
                backgroundColor: '#4674b7',
                textAlign: 'center',
                paddingVertical: 15,
                borderRadius: 25,
                color: '#fff',
                fontWeight: 'bold',
                overflow: 'hidden'
              }}>
              ALMOÇO
            </Text>
            <View style={{paddingVertical: 20}}>
              <Text style={{textAlign: 'center'}}>
                Principal: {data.lunch[0]}
              </Text>
              <Text style={{textAlign: 'center'}}>
                Acompanhamento: {data.lunch[1]}
              </Text>
              <Text style={{textAlign: 'center'}}>
                Prato-Base: {data.lunch[2]}
              </Text>
              <Text style={{textAlign: 'center'}}>
                Guarnição: {data.lunch[3]}
              </Text>
              <Text style={{textAlign: 'center'}}>
                Sobremesa: {data.lunch[4]}
              </Text>
            </View>
            <Text
              style={{
                backgroundColor: '#4674b7',
                textAlign: 'center',
                paddingVertical: 15,
                borderRadius: 25,
                color: '#fff',
                fontWeight: 'bold',
                overflow: 'hidden'
              }}>
              LANCHE
            </Text>
            <View style={{paddingVertical: 20}}>
              <Text style={{textAlign: 'center'}}>
                Principal: {data.evening[0]}
              </Text>
              <Text style={{textAlign: 'center'}}>
                Acompanhamento: {data.evening[1]}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  menu: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#c3c3c3',
  },
  menuText: {
    color: '#4674b7',
    fontWeight: 'bold',
  },
});

export default Tab;
