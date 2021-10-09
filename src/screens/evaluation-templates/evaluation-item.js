import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';

// import { Container } from './styles';

class Evaluationitem extends React.Component {
  render() {
    return (
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingBottom: 15,
          borderBottomWidth: 1,
          borderBottomColor: '#c1c1c1',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <View style={{width: '15%'}}>
          <Image
            source={require('../../assets/images/task.png')}
            resizeMode="stretch"
            style={{width: 40, height: 40}}
          />
        </View>
        <View style={{width: '60%'}}>
          <Text
            style={{
              fontSize: 13,
              color: '#1A2541',
              fontWeight: 'bold',
            }}>
            GRAMÁTICA
          </Text>
          <Text style={{fontSize: 12, color: '#1A2541'}}>TIPO: OBJETIVA</Text>
          <Text style={{fontSize: 12, color: '#1A2541'}}>PROVA: N1</Text>
        </View>
        <View style={{width: '25%'}}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('EvaluationTemplates');
            }}
            style={{
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#CCC',
              paddingVertical: 10,
              paddingHorizontal: 10,
            }}>
            <Text style={{textAlign: 'center'}}>Ver Gabarito</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Evaluationitem;
