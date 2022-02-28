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
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard 
} from 'react-native';
import { connect } from 'react-redux';

import api from '../../config/api';

import Header from '../../components/ui/header';
import HeaderAuthenticated from '../../components/ui/header-authenticated';
import HeaderSelectUser from '../../components/ui/header-select-user';
import {
  responsiveFontSize
} from "react-native-responsive-dimensions";
let { height } = Dimensions.get("window");

class AcompanhamentoInfantil extends React.Component {
  state = {
    acompanhamento: {},
    loading: true,
    ativa: false,
    text: ""
  };

  componentDidMount = async () => {
    await api
      .post('/acompanhamento/lstAcompanhamentoInfantil/', {
        p_cd_usuario: this.props.auth.user.USU_LOGIN,
      })
      .then((res) => {

        console.log("  INFANTIL: " + JSON.stringify(res.data))

        var info = {}

        for (let index in res.data) {

            console.log("  INFANTIL: " + JSON.stringify(res.data[index]))

          if (res.data[index].RA == this.props.students.student.RA) {
            info = res.data[index]
          }
        }

        this.setState({
            acompanhamento: info,
            loading: false,
        });
      })
      .catch((err) => {
        alert("Erro ao carregar os dados.");
        this.setState({
          loading: false,
        });
      });
  };


  componentDidUpdate = async () => {
    await api
      .post('/acompanhamento/lstAcompanhamentoInfantil/', {
        p_cd_usuario: this.props.auth.user.USU_LOGIN,
      })
      .then((res) => {

        console.log("  INFANTIL: " + JSON.stringify(res.data))

        var info = {}

        for (let index in res.data) {

            console.log("  INFANTIL: " + JSON.stringify(res.data[index]))

          if (res.data[index].RA == this.props.students.student.RA) {
            info = res.data[index]
          }
        }

        this.setState({
            acompanhamento: info,
            loading: false,
        });
      })
      .catch((err) => {
        alert("Erro ao carregar os dados.");
        this.setState({
          loading: false,
        });
      });
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
        <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center'}} behavior="position" enabled   keyboardVerticalOffset={200}>
        <ScrollView>
          <Text style={{padding:10,fontSize:42}}>Text 1</Text>
          <Text style={{padding:10,fontSize:42}}>Text 2</Text>
          <Text style={{padding:10,fontSize:42}}>Text 3</Text>
          <Text style={{padding:10,fontSize:42}}>Text 4</Text>
          <Text style={{padding:10,fontSize:42}}>Text 5</Text>
          <Text style={{padding:10,fontSize:42}}>Text 6</Text>
          <Text style={{padding:10,fontSize:42}}>Text 7</Text>
          <Text style={{padding:10,fontSize:42}}>Text 8</Text>
          <Text style={{padding:10,fontSize:42}}>Text 9</Text>
          <Text style={{padding:10,fontSize:42}}>Text 10</Text>
          <Text style={{padding:10,fontSize:42}}>Text 11</Text>
          <Text style={{padding:10,fontSize:42}}>Text 12</Text>
          <TextInput style={styles.input}
            placeholder="Type some text...">
          </TextInput>
          </ScrollView>
        </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  students: state.students,
});

const styles = StyleSheet.create({
  container: {
    flex: 1
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

export default connect(mapStateToProps)(AcompanhamentoInfantil);
