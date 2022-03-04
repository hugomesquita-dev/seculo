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
  Keyboard ,
  Alert
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
    loading_btn: false,
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



  responder = async () => {

    this.setState({
      loading_btn: true,
    });

    let p_mensagem = this.state.text;
    await api
      .post('/acompanhamento/sendAcompanhamentoInfantil/',{
        p_cd_usuario: this.props.students.student.RA,
        p_mensagem: p_mensagem
      }).then((res) => {

        Alert.alert("Século",
                    res.data[0].mensagem,
                    [
                      {
                        text: "Cancelar"
                      },
                      {
                        text: "Ok"
                      }
                    ]);
        this.setState({
          loading_btn: false,
        });

      }).catch((err) =>{
        alert("Erro ao carregar os dados.");
        this.setState({
          loading: false
        });
      });

    //alert("Mensagem enviada");
  }

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center'}} behavior="position" enabled   keyboardVerticalOffset={10}>
      <ScrollView>
      
        <View style={{backgroundColor: '#f1f1f2' }}>
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
              ACOMPANHAMENTO INFANTIL
            </Text>
          </View>

          <View style={{ paddingHorizontal: 20 }}>
            <HeaderSelectUser />
          </View>

          <View style={{ paddingHorizontal: 30, paddingBottom: Platform.OS === 'android' ? 15 : 110 }}>

            {this.state.loading && <ActivityIndicator size="large" color="#4674B7" />}

            <View style={{ marginTop: 20 }}>

                {/** modificado */}
                <View style={styles.boxCard}>

                    <View style={styles.boxCard_Row}>
                        <Text style={styles.boxCard_Title}>LANCHE DA MANHÃ</Text>
                        <View style={styles.boxCard_Border}>

                          {this.state.acompanhamento.COLACAO != null && 
                          <Text
                            style={styles.boxCard_Border_Title}>
                            {this.state.acompanhamento.COLACAO}
                          </Text>
                          }

                        </View>
                    </View>

                    <View style={{marginVertical:10}}>
                      <Text style={styles.boxCard_Text}>{this.state.acompanhamento.OBS_COLACAO}</Text>
                    </View>

                </View>



                {/** modificado */}
                <View style={styles.boxCard}>

                    <View style={styles.boxCard_Row}>
                        <Text style={styles.boxCard_Title}>ALMOÇO</Text>
                      
                        <View style={styles.boxCard_Border}>
                        {this.state.acompanhamento.ALMOCO != null &&
                          <Text
                            style={styles.boxCard_Border_Title}>
                            {this.state.acompanhamento.ALMOCO}
                          </Text>
                        }
                        </View>
                    </View>


                    <View style={{marginVertical:10}}>
                      <Text style={styles.boxCard_Text}>{this.state.acompanhamento.OBS_ALMOCO}</Text>
                    </View>
                </View>


                {/** modificado */}
                <View style={styles.boxCard}>

                    <View style={styles.boxCard_Row}>
                        <Text style={styles.boxCard_Title}>LANCHE DA TARDE</Text>
                        <View style={styles.boxCard_Border}>
                          
                          {this.state.acompanhamento.LANCHE != null && 
                          <Text
                            style={styles.boxCard_Border_Title}>
                             {this.state.acompanhamento.LANCHE}
                          </Text>
                          }

                        </View>
                    </View>

                    <View style={{marginVertical:10}}>
                      <Text style={styles.boxCard_Text}>{this.state.acompanhamento.OBS_LANCHE}</Text>
                    </View>

                </View>

                
                {/** modificado */}
                <View style={styles.boxCard}>

                    <View style={styles.boxCard_Row}>
                        <Text style={styles.boxCard_Title}>SONO</Text>
                        <View style={styles.boxCard_Border}>
                        
                        {this.state.acompanhamento.SONO != null &&
                          <Text
                            style={styles.boxCard_Border_Title}>
                            {this.state.acompanhamento.SONO}
                          </Text>
                        }

                        </View>
                    </View>

                    <View style={{marginVertical:10}}>
                      <Text style={styles.boxCard_Text}>{this.state.acompanhamento.OBS_SONO}</Text>
                    </View>

                </View>



                {/** modificado */}
                <View style={styles.boxCard}>

                    <View style={styles.boxCard_Row}>
                        <Text style={styles.boxCard_Title}>EVACUAÇÃO</Text>
                        <View style={styles.boxCard_Border}>
                        
                        {this.state.acompanhamento.EVACUACAO != null && 
                          <Text
                            style={styles.boxCard_Border_Title}>
                            {this.state.acompanhamento.EVACUACAO}
                          </Text>
                        }

                        </View>
                    </View>

                    <View style={{marginVertical:10}}>
                      <Text style={styles.boxCard_Text}>{this.state.acompanhamento.OBS_EVACUACAO}</Text>
                    </View>

                </View>
                


               
                

                {this.state.acompanhamento.OBSERVACAO == null &&
                <View>
                  <View style={styles.boxTitle}>
                    <Text style={styles.textTitle}>INFORMATIVO DIÁRIO</Text> 
                  </View>
                
                  <View style={styles.boxObs}>
                    <Text style={styles.textObs}>{this.state.acompanhamento.OBSERVACAO}</Text>
                  </View>
               



                  {this.state.acompanhamento.OBSERVACAO_RESP == null 
                  ?
                  <View> 
                    <TextInput style={styles.textarea} 
                              multiline={true} placeholder="Responder..."
                              onChangeText={(text) => this.setState({text})}
                              value={this.state.text}/>
                    <TouchableOpacity
                    onPress={()=>{this.responder()}}
                    style={styles.boxBtn}>
                      {this.state.loading_btn 
                      ? <ActivityIndicator size="large" color="#FFFFFF" /> 
                      : <Text style={styles.textBtn}>Enviar Mensagem</Text>}
                      
                    </TouchableOpacity>
                  </View>
                  :
                    <View>
                      <View style={styles.boxTitle}>
                        <Text style={styles.textTitle}>Responsável</Text> 
                      </View>
                      <View style={styles.boxResposta}>
                        <Text style={styles.boxRespostaText}>
                          {this.state.acompanhamento.OBSERVACAO_RESP}
                        </Text>
                      </View>
                    </View>
                  }
                 
                 </View>
                }


            </View>
          </View>
        </View>
        
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
  boxCard: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#c1c1c1',
    marginBottom: 10,
    backgroundColor: '#FFF',
    borderRadius:6
  },
  boxCard_Row: {
    flex:1, 
    flexDirection:'row', 
    justifyContent: 'space-between'
  },
  boxCard_Title: {
    fontSize: 16,
    color: '#1A2541',
    fontWeight: 'bold',
  },
  boxCard_Border:{
    backgroundColor: '#E6BD56', 
    borderRadius:6
  },
  boxCard_Border_Title:{
    fontSize: 13,
    color: '#fff',
    fontWeight: 'bold',
    padding:5
  },
  boxCard_Text: {
    fontSize: 13,
    color: '#1A2541',
  },
  textarea:{
    backgroundColor: '#FFFFFF',
    padding:'2%',
    height: '20%',
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
    marginVertical:10,
  },
  boxObs:{
    borderColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    padding: 10
  },
  boxResposta: {
    backgroundColor: '#D7E6FF',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#93B7F3',
    color: '#111111',
    marginTop: 10
  },
  boxRespostaText: {
    textAlign: 'justify',
    fontSize: responsiveFontSize(2)
  },
  textTitle:{
    fontSize: responsiveFontSize(2),
    color: '#4674B7',
    fontWeight: 'bold'
  },
  textObs: {
    color: '#111111',
    textAlign: 'justify',
    fontSize: responsiveFontSize(2),
    padding:5
  }
})

export default connect(mapStateToProps)(AcompanhamentoInfantil);
