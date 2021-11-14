import React, {Component} from 'react';
import {Text, 
    View, 
    TouchableOpacity, 
    StyleSheet,
  Image} from 'react-native';
//import api from '../../../config/api';
import {connect} from 'react-redux';

import {Container, Title} from './styles';

class HeaderAuthenticated extends React.Component {
  /*constructor(props){
    super(props);

    this.state = {
      alertaStatus: true,
      valorStatus: "",
      valorTitulo: "",
      valorTipo: ""
    }
  }

  toggleStatus = (valor) => {
    this.state.valorStatus = valor;
    this.setState({
      alertaStatus: !this.state.alertaStatus,
      valorStatus: this.state.valorStatus
    });


    console.log(`USUÁRIO: ${this.props.students.student.RA}`);
    console.log(`ALERTA: ${this.state.valorStatus}`)

    api
    .post('/matricula/confPesquisa/', {
      p_cd_usuario: this.props.students.student.RA,
      p_status_confirmacao: this.state.valorStatus
    })
    .then((res) => {
      console.log(res.data)
    });
  }*/



  //lista o texto do alerta
  /*componentDidMount = () => {
    api
    .post('/matricula/lstAlerta/', {
      p_opcao: null
    })
    .then((res) => {
      console.log(res.data);

      if(res.data.length == 0){
        this.setState({
          alertaStatus: false
        });
      }else{
        this.setState({
          alertaStatus: true,
          valorStatus: res.data[0].STATUS,
          valorTitulo: res.data[0].DESCRICAO,
          valorTipo: res.data[0].TIPO_ALERTA
        });
      }
     

    });
  }*/

  //verifica se já foi feito a confirmação do alerta
  /*componentDidUpdate = () => {
    api
    .post('/matricula /lstAlerta/', {
      p_opcao: null
    })
    .then((res) => {

      if(res.data.length == 0){
        this.setState({
          alertaStatus: false
        })
      }else{
        this.setState({
          alertaStatus: true,
          valorStatus: res.data[0].STATUS,
          valorTitulo: res.data[0].DESCRICAO,
          valorTipo: res.data[0].TIPO_ALERTA
        });
      }
      

    });
  }*/


  render() {
    return (
      <View>
      <Container
        color={
          this.props.auth.user.USU_TIPO === 'aluno' ? '#51924b' : '#4674b7'
        }>
        <Title style={{fontWeight: 'bold', fontSize: 22, textAlign: 'left',}}>
          Olá {this.props.auth.user.USU_TIPO === 'aluno' ? 'Aluno' : 'Sr.'}(a){' '}
        </Title>
        <Title>
          {this.props.auth.user.USU_NOME}
        </Title>
      </Container>
        {/* botão de alerta */}
        {/* <View style={{
                flexDirection: "row",
                alignContent: "center"
              }}>
          <TouchableOpacity style={styles.boxBtnGreen}>
            <Text style={{color:'#FFF', fontWeight: 'bold'}} onPress={() => this.toggleStatus('S')}>SIM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxBtnRed}>
            <Text style={{color:'#FFF',  fontWeight: 'bold'}} onPress={() => this.toggleStatus('N')}>NÃO</Text>
          </TouchableOpacity>
        </View> */}
        
        <View style={{marginTop: -5}}>
              <Image
                style={{
                  width: '100%',
                }}
                source={require('../../../assets/images/bar.png')}
                resizeMode="contain"
              />
            </View>

      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  boxHeader: {
    padding:20,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginTop:20,
    marginHorizontal:20,
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  boxHeaderTitle: {
    fontSize:14,
    textAlign: 'center',
    textTransform: 'uppercase',
    color:'#084E82',
    fontWeight: 'bold',
    marginBottom: 10
  },
  boxBtnGreen: {
    backgroundColor: '#34A853',
    color:'#FFF',
    borderWidth:0,
    padding: 10,
    borderRadius:10,
    marginVertical:10
  },
  boxBtnRed: {
    backgroundColor: '#EA4335',
    color: '#FFF',
    borderWidth:0,
    padding: 10,
    borderRadius:10,
    margin:10
  }
});

const mapStateToProps = (state) => ({
  auth: state.auth,
  students: state.students,
});

export default connect(mapStateToProps)(HeaderAuthenticated);
