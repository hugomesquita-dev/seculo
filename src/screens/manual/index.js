import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  Platform,
  Linking
} from 'react-native';
import { connect } from 'react-redux';

import api from '../../config/api';

import Header from '../../components/ui/header';
import HeaderAuthenticated from '../../components/ui/header-authenticated';
import HeaderSelectUser from '../../components/ui/header-select-user';
import {
  responsiveFontSize
} from "react-native-responsive-dimensions";

import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();

let { height } = Dimensions.get("window");

class Manual extends React.Component {
  state = {
    acompanhamento: {},
    loading: true,
    ativa: false,
    text: ""
  };


  toggleTextArea = () => {
    this.setState({
      ativa: !this.state.ativa
    })
  }

  responder = () => {
    //criar uma requisição axios
    //só pode responder uma vez por dia
    let mensagem = this.state.text;

    alert("Mensagem enviada");
  }

  render() {
    return (
      <View  style={{height: height}}>
      <ScrollView> 
        <View style={{ flex: 1, backgroundColor: '#f1f1f2' }}>
          <Header navigation={this.props.navigation} />
          <HeaderAuthenticated />
          <View
            style={{
              marginVertical: 15,
              alignItems: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#4674b7',
                fontWeight: 'bold',
                fontSize: 16,
                width: '70%',
                marginBottom: 10
              }}>
              MANUAL DO ALUNO
            </Text>
          </View>

          <View style={{ paddingHorizontal: 20 }}>
            <HeaderSelectUser />
          </View>

            <View style={{ paddingHorizontal: 30, paddingBottom: Platform.OS === 'android' ? 15 : 80 }}>

            {/* {this.state.loading && <ActivityIndicator size="large" color="#4674B7" />} */}
                <TouchableOpacity style={[styles.itemPersonalizado]} onPress={() => Linking.openURL('https://seculomanaus.com.br/manual/aluno.pdf')}>
                {/* <View style={{padding: 10,
                            backgroundColor: '#F1F1F2',
                            borderRadius: 60,
                            marginBottom: 8,
                            flexShrink: 1,
                            }}>
                <Text><Icon name="pdffile1" size={25} color="#4674b7"/></Text>
                </View> */}
                <Text style={styles.text}><Icon name="pdffile1" size={30} color="#4674b7"/> MANUAL DO ALUNO</Text>
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  students: state.students,
});

const styles = StyleSheet.create({
    itemPersonalizado: {
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    flexGrow: 1,
    marginTop:20,
    marginBottom: 20,
    flexBasis: 0,
    // minHeight: 100,
    padding:8,
    paddingVertical: 10,
    backgroundColor: '#fff',
    flexShrink: 1,
    //width:120
  },
  colorFin: {
    color: '#ED695F',
    fontWeight: 'bold'
  },
  text: {
    color: '#4674b7',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
    padding:2,
    //paddingHorizontal: 5,
    flexShrink: 1,
  },
  container: {
    backgroundColor:'red'
  },
  textarea:{
    backgroundColor: '#FFFFFF',
    padding:'2%',
    height: '30%',
    justifyContent: 'flex-start',
    borderColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 10
  },
  boxBtn: {
    backgroundColor: '#4F74B2',
    color:'#FFFFFF',
    borderRadius:10,
    paddingHorizontal: 10,
    paddingVertical:10,
    marginVertical: '5%'
  },
  textBtn:{
    color:'#FFFFFF',
    textAlign: 'center',
    fontSize: responsiveFontSize(2)
  },
  boxTitle:{
    marginVertical: '2%',
  },
  boxObs:{
    borderColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    paddingVertical: '5%'
  },
  boxResposta: {
    backgroundColor: '#abc6f3',
    paddingVertical: '5%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#86a1cf',
    color: '#111111',
    marginTop: '5%'
  },
  boxRespostaText: {
    textAlign: 'center',
    fontSize: responsiveFontSize(2)
  },
  textTitle:{
    fontSize: responsiveFontSize(2),
    color: '#4674B7',
    fontWeight: 'bold'
  },
  textObs: {
    color: '#111111',
    textAlign: 'center',
    fontSize: responsiveFontSize(2)
  }
})

export default connect(mapStateToProps)(Manual);