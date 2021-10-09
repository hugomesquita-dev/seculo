import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator, FlatList} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import {connect} from 'react-redux';

import Header from '../../components/ui/header';
import HeaderAuthenticated from '../../components/ui/header-authenticated';
import HeaderSelectUser from '../../components/ui/header-select-user';

import api from '../../config/api';

// import { Container } from './styles';

class TestPerformance extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      media: 0.0,
      notas: [],
      percentagem: 0,
      loading: true
    }
  }

  componentDidMount = () => {

    console.log(" ALUNO: " + this.props.students.student.RA)
    api
      .post('/desempenho/lstDesempenho/', {
        p_cd_usuario: this.props.students.student.RA,
      })
      .then((res) => {

        let media = 0.0

        if(res.data.length > 0){
          for(var index in res.data) {
            if(res.data[index].MEDIA == null){res.data[index].MEDIA = 0.0}

            console.log(" ALUNO MEDIA: " + res.data[index].MEDIA)

            media = media + parseInt(res.data[index].MEDIA)
          }


          console.log("MEDIA antes: "+media)
          console.log("MEDIA size: "+res.data.length)

          media = media / res.data.length

          console.log("MEDIA: "+media)

          this.setState({
            media: media.toFixed(2),
            notas: res.data,
            percentagem: Math.round( media) * 10,
            loading: false
          })

    }else{
      this.setState({loading: false})
      alert("Erro ao carregar informações.");
    }
    this.setState({loading: false})
        console.log("Desempenho: "+JSON.stringify(res));
      })
      .catch((err) => {
        alert("Erro ao carregar informações.");
      });
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f1f1f2'}}>
        <Header navigation={this.props.navigation} />
        <HeaderAuthenticated />

        <View style={{flex: 1, paddingBottom: 10}}>
          <View style={{paddingHorizontal: 20, marginTop: 20}}>
            <Text
              style={{marginBottom: 10, color: '#929496', fontWeight: 'bold'}}>
              ALUNO(A):
            </Text>
            <HeaderSelectUser />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 20,
            }}>
            <Text
              style={{color: '#4674B7', fontWeight: 'bold', marginBottom: 15}}>
              DESEMPENHO
            </Text>

            { this.state.loading && <ActivityIndicator size="large" color="#4674B7" /> }

            <AnimatedCircularProgress
              size={140}
              width={8}
              backgroundWidth={8}
              fill={this.state.percentagem}
              tintColor="#4674B7"
              backgroundColor="#E2E2E2"
              arcSweepAngle={240}
              rotation={240}
              lineCap="round">
              {(fill) => (
                <View>
                  <Text
                    style={{
                      color: '#4674B7',
                      fontWeight: 'bold',
                      fontSize: 32,
                      textAlign: 'center',
                    }}>
                    {this.state.media}
                  </Text>
                  <Text
                    style={{
                      color: '#1A2541',
                      fontSize: 14,
                      textAlign: 'center',
                    }}>
                    Coeficiente do Aluno
                  </Text>
                </View>
              )}
            </AnimatedCircularProgress>
          </View>

          <View
            style={{paddingHorizontal: 40}}
            scrollEnabled={true}
            scrollIndicatorInsets={true}>

          <FlatList 
            data={this.state.notas}
            renderItem={(dataNota) => 
            <View
              style={{
                borderBottomColor: '#c3c3c3',
                borderBottomWidth: 1,
                paddingBottom: 10,
                marginBottom: 10,
              }}>
              <Text
                style={{fontWeight: 'bold', color: '#1A2541', marginBottom: 4}}>
                {dataNota.item.NM_DISCIPLINA}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{flex: 0.4, color: '#1A2541'}}>Média</Text>
              
                <Text style={{marginLeft: 5}}>{dataNota.item.MEDIA}</Text>
              </View>
            
            </View>
            }
            keyExtractor={(item) => item.name} 
            />

          </View>

        </View>
      
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  students: state.students,
});

export default connect(mapStateToProps)(TestPerformance);
