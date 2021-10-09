import React from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
  ScrollView,
  Dimensions
} from 'react-native';

import Header from '../../../components/ui/header';
import HeaderAuthenticated from '../../../components/ui/header-authenticated';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();

import api from '../../../config/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

let { width, height } = Dimensions.get("window");
let user

const init = async function (a, b) {
  user = JSON.parse(await AsyncStorage.getItem('@seculo/user'));
}
init();

const leiaMais = (string, limite) => {
  if(string.length > limite){
    return string.substring(0, limite).concat("...");
  }
}



class Comunication extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      itens: [],
      loading: true
    }
  }

  componentDidMount = () => {

    console.log(" Responsavel: " + user.USU_LOGIN)
    api
      .post('notificacao/lstNotificacao/', {
        p_cd_usuario: user.USU_LOGIN,
      })
      .then((res) => {

        console.log("Comunicados: " + JSON.stringify(res))
        if (res.data.length > 0) {

          this.setState({
            notas: res.data,
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
 
          alert("Resposta ao comunicado enviada.");
        
      })
      .catch((err) => {
      });
  }

  render() {
    return (
      <View style={{height: height}}>
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: '#F1F1F2', marginBottom:65}}>
          <Header navigation={this.props.navigation} />
          <HeaderAuthenticated />
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
            <View>

              {this.state.loading && <ActivityIndicator size="large" color="#4674B7" />}

              <View
                scrollEnabled={true}
                scrollIndicatorInsets={true}>

                <FlatList
                  data={this.state.notas}
                  renderItem={(itemComunicado) =>

                    <View style={{
                      borderWidth: 1,
                      borderColor: '#E8E8E8',
                      backgroundColor: '#FFF',
                      padding: 20,
                      borderRadius: 20,
                      marginBottom: 10,
                      alignItems:'center'
                    }}>

                    <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('DetailsComunication', {titulo: itemComunicado.item.TITULO, conteudo: itemComunicado.item.MENSAGEM})
                            }}>
                      
                      {/* <Text style={{position: 'absolute', left:-10, top:-5}}>
                        <Icon name="pushpino" size={25} color="#4674b7" /> 
                      </Text> */}
                      <Text
                        style={{
                          textAlign: 'center',
                          color: '#4674B7',
                          fontWeight: 'bold',
                        }}>  
                        {itemComunicado.item.TITULO}
                      </Text>


                      
                      <Text style={{ textAlign: 'justify', marginVertical: 10 }}>
                        {leiaMais(itemComunicado.item.MENSAGEM, 100)}
                      </Text>
                      <Text style={{ textAlign: 'right', fontWeight: 'bold', color:'#6C6C6C' }}>
                        {itemComunicado.item.DT_NOTIFICAR}
                      </Text>
                      {/* <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          backgroundColor: '#e1e1e1',
                          width: '50%',
                          justifyContent: 'center',
                          paddingVertical: 10,
                          borderRadius: 10,
                          borderWidth: 1,
                          borderColor: '#ccc',
                        }}>

                        <TouchableOpacity onPress={() => this.responderNotificacao("S", itemComunicado.item.ID_NOTIFICACAO)}>
                          <Text>SIM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.responderNotificacao("N", itemComunicado.item.ID_NOTIFICACAO)}
                          style={{
                            marginLeft: 10,
                            borderLeftWidth: 1,
                            paddingLeft: 10,
                          }}>
                          <Text>NÃO</Text>
                        </TouchableOpacity>
                      </View> */}
                      </TouchableOpacity>

                    </View>

                  }
                  keyExtractor={(item) => item.name}
                />
              </View>

            </View>
          </View>
        </View>
      </ScrollView>



      {/* <View>
        <Image
          style={{
            width: '100%',
            position: "absolute",
            top: -70
          }}
          source={require('../../../assets/images/bar.png')}
          resizeMode="contain"
        />
      </View> */}

      
        {/* <View 
          style={{
            position: "absolute",
            flex: 1,
            left:0,
            right:0,
            bottom: 0,
            flexDirection: "row",
            width: width,
            height: 65,
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#FFF"
          }}>
            
          <Text>
            <TouchableOpacity
               onPress={() =>
                this.props.navigation.navigate('Dashboard')
              }
              style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
              <Icon name="home" size={20} color="#4674b7"/>
              <Text style={{ textAlign: 'center',
                color: '#4674b7',
                fontWeight: 'bold',
                marginTop:5,
                fontSize: 12,}}> 
                 Home</Text>
            </TouchableOpacity>
          </Text>

          <Text>
            <TouchableOpacity
               onPress={() =>
                this.props.navigation.navigate('Dashboard')
              }
              style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
              <Icon name="pushpino" size={20} color="#4674b7"/>
              <Text style={{ textAlign: 'center',
                color: '#4674b7',
                fontWeight: 'bold',
                marginTop:5,
                fontSize: 12,}}> 
                 Solicitações</Text>
            </TouchableOpacity>            
          </Text>

          <Text>
          <TouchableOpacity
               onPress={() =>
                this.props.navigation.navigate('Dashboard')
              }
              style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
              <Icon name="home" size={20} color="#4674b7"/>
              <Text style={{ textAlign: 'center',
                color: '#4674b7',
                fontWeight: 'bold',
                marginTop:5,
                fontSize: 12,}}> 
                 Loja</Text>
            </TouchableOpacity>

          </Text>
          
          <Text>
            <TouchableOpacity
              onPress={this.logout}
              style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
              <Icon name="logout" size={20} color="#4674b7"/>
              <Text style={{ textAlign: 'center',
                color: '#4674b7',
                fontWeight: 'bold',
                marginTop:5,
                fontSize: 12,}}> 
                 Sair</Text>
            </TouchableOpacity>
          </Text>
        </View>  */}



      </View>

    );
  }
}


export default Comunication;

