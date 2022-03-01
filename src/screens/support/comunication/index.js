import React from 'react';
import {
  View,
  FlatList,
  Text,
  Picker,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Dimensions,
  StyleSheet,
  Modal,
  Alert
} from 'react-native';
import Header from '../../../components/ui/header';
import HeaderAuthenticated from '../../../components/ui/header-authenticated';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();

import api from '../../../config/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
  } from "react-native-responsive-dimensions";


let { width, height } = Dimensions.get("window");
//let user

const init = async function (a, b) {
  user = JSON.parse(await AsyncStorage.getItem('@seculo/user'));
}
init();

const leiaMais = (string, limite) => {
  if(string.length > limite){
    return string.substring(0, limite).concat("...");
  }else{
    return string;
  }
}



class Comunication extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      itens: [],
      loading: true,
      select_option: "comunicado",
      select_visible: false
    }
  }

  componentDidMount = () => {

   //console.log(" Responsavel: " + user.USU_LOGIN)
    api
      .post('notificacao/lstNotificacao-homologacao/', {
        p_cd_usuario: user.USU_LOGIN,
      })
      .then((res) => {

        //console.log("Comunicados: " + JSON.stringify(res.data))
        if (res.data.length > 0) {

          this.setState({
            itens: res.data,
            loading: false
          })
          
        } else {
          alert("Você não tem comunicados.");
        }

      })
      .catch((err) => {
        alert("Erro ao carregar informações.");
      });
  };


  responderNotificacao(resposta, id){
    api
      .post('notificacao/confNotificacao/', {
        p_cd_usuario: user.USU_LOGIN,
        p_id_notificacao: id,
        p_status_confirmacao: resposta,
      })
      .then((res) => {
          console.log(JSON.stringify(res.data));
          alert("Resposta ao comunicado enviada.");
        
      })
      .catch((err) => {
      });
  }

  closeModal = () => {
    // this.setState({
    //   select_option: itemValue
    // })
    
    this.setState({
      select_visible: !this.state.select_visible 
    })
    
  }
  render() {
    return (
      <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={true}> 
        <View style={{ flex: 1, backgroundColor: '#F1F1F2', marginBottom:65}}>
          <Header navigation={this.props.navigation} />
          <HeaderAuthenticated />

         
          <View style={{backgroundColor:"#CCC", marginTop:-2}}>
            <TouchableOpacity style={{justifyContent:'center', alignItems: 'center', padding:10}} onPress={() => this.closeModal()}>
                <Text>{this.state.select_option} </Text>
            </TouchableOpacity>
          </View>
          
          <Modal 
            animationType="slide"
            transparent={true}
            visible={this.state.select_visible}
            onRequestClose={() => {
              Alert.alert("Modal fechada")
            }}
          
          >
            
            <View style={{flex:1}}>
              <View style={{backgroundColor:"#FFF", width:'100%', height:'40%', position: 'absolute', bottom: 0}}>
                <TouchableOpacity style={{justifyContent:'center', alignItems: 'center', marginTop:50}} onPress={() => this.closeModal()}>
                    <Text>Fechar</Text>
                </TouchableOpacity>
                <Picker
                  selectedValue={this.state.select_option}
                  mode="dropdown"
                  style={{height: 50, width: '100%'}}
                  
                  onValueChange={(itemValue, itemIndex) => this.setState({select_option: itemValue, select_visible: false})}>
                  <Picker.Item label="Comunicado" value="comunicado" />
                  <Picker.Item label="Evento" value="evento" />
                </Picker>
              </View>
            </View>

          </Modal>

          


          <View
            style={{
              marginVertical: 15,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#4674b7',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              COMUNICADOS
            </Text>
          </View>
    

          <View style={{ paddingHorizontal: 20, marginBottom: 20 }} >
              {this.state.loading && <ActivityIndicator size="large" color="#4674B7" />}

              <View
                scrollEnabled={true}
                scrollIndicatorInsets={true}>
                <FlatList
                    data={this.state.itens}
                    renderItem={(itemComunicado) =>
                    <TouchableOpacity 
                      key={itemComunicado.item.ID_NOTIFICACAO}
                      onPress={() => {this.props.navigation.navigate('DetailsComunication', {
                              titulo: itemComunicado.item.TITULO, 
                              conteudo: itemComunicado.item.MENSAGEM,
                              anexo: itemComunicado.item.ANEXO,
                              tipo_notificacao: itemComunicado.item.NM_TIPO,
                              flg_acao_atividade: itemComunicado.item.FLG_ACAO,
                              id_notificacao: itemComunicado.item.ID_NOTIFICACAO
                              })
                            }}>     
                      
                       <View style={styles.box}>
                          <View style={{flex:2, flexDirection: 'row'}}>
                              <View style={{paddingRight: 30}}>
                                  <Text style={[styles.boxTitle]}>{itemComunicado.item.TITULO} </Text>
                                  
                              </View>
                              <Text style={{flex:1, alignSelf: "flex-end", position:'absolute', right: 0, top:0}}> <Icon name="star" size={30}  style={[styles.btnTextYellow, styles.btnIconSmall]}/></Text>
                                 
                              <View style={{flex:1.2}}>
                                  {itemComunicado.item.FLG_ACAO == 'CONCLUIDO' && <Text style={styles.btn}><Text style={[styles.btnText, styles.btnTextGreen]}>{itemComunicado.item.FLG_ACAO}</Text> <Icon name="check" size={25}  style={[styles.btnTextGreen, styles.btnIconSmall]}/></Text>}
                                  {itemComunicado.item.FLG_ACAO == 'FAZER' && <Text style={styles.btn}><Text style={[styles.btnText, styles.btnTextBlue]}>{itemComunicado.item.FLG_ACAO}</Text> <Icon name="exclamation" size={25}  style={[styles.btnTextBlue, styles.btnIconSmall]}/></Text>}
                                  {itemComunicado.item.FLG_ACAO == 'REFAZER' && <Text style={styles.btn}><Text style={[styles.btnText, styles.btnTextRed]}>{itemComunicado.item.FLG_ACAO}</Text> <Icon name="retweet" size={25}  style={[styles.btnTextRed, styles.btnIconSmall]}/></Text>}
                              </View>
                              
                          </View>
                          <View>
                            <Text style={styles.boxContent}>{leiaMais(itemComunicado.item.MENSAGEM,100)}</Text>
                            <Text style={styles.contentDate}>
                                {itemComunicado.item.DT_NOTIFICAR} - {itemComunicado.item.HORARIO}
                            </Text>
                          </View>
                       </View>

                     
                    </TouchableOpacity>  
                    
                  }
                  keyExtractor={(item) => item.ID}
                />
              </View>

           
          </View>
        </View>
        </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  
  box: {
      borderWidth: 1,
      borderColor: '#E8E8E8',
      backgroundColor: '#FFF',
      padding: 20,
      borderRadius: 20,
      marginBottom: 10
  },
  boxTitle: {
      color: '#4674B7',
      fontWeight: 'bold',
      fontSize: responsiveFontSize(2)
  },
  boxTitleDisc: {
      color: '#5b5b5b',
      fontWeight: 'bold',
      fontSize: responsiveFontSize(1.8),
      marginVertical: 5
  },
  boxContent: { 
      marginVertical: 5,
      fontSize: responsiveFontSize(1.8),
      textAlign: 'left',
      textTransform: 'uppercase'
  },
  contentTitle: {
      textAlign: 'center', 
      fontSize:32, 
      color:'#111', 
      fontWeight:'bold'
  },
  contentDate: {
      textAlign: 'right', 
      fontWeight: 'bold', 
      color:'#6C6C6C' 
  },
  btn:{
      textAlign: 'right',
      
  },
  btnGreen:{
      borderColor: '#2d9500'
  },
  btnBlue:{
      borderColor: '#4674B7'
  },
  btnRed:{
      borderColor: '#cc0000'
  },
  btnText: {
      fontWeight: 'bold', 
      padding:8, 
      textAlign: 'right',
      fontSize: responsiveFontSize(1.8),
      justifyContent: 'center', 
      alignItems: 'center',
      flex:1
  },
  btnTextGreen: {
      color:'#2d9500', 
  },
  btnTextBlue: {
      color: '#4674B7'
  },
  btnTextYellow: {
    color: '#f1c232'
  },
  btnTextRed: {
      color: '#cc0000'
  },
  btnIconSmall: {
      justifyContent: 'center', 
      alignItems: 'center',
      flex:1,
      fontSize:responsiveFontSize(1.8)
  }
});


export default Comunication;

