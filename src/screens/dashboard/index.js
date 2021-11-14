import React, {Component, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  Dimensions,
  TextInput
} from 'react-native';

import TypeWriter from 'react-native-typewriter'
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../../components/ui/header';
import HeaderAuthenticated from '../../components/ui/header-authenticated';
import HeaderSelectUser from '../../components/ui/header-select-user';
import Alert from '../../screens/alert';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

/*import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';*/

import messaging from '@react-native-firebase/messaging';
// import notifee from '@notifee/react-native';
let { width, height } = Dimensions.get("window");
let widthTab = width / 3;
/*const Tabs = () => {
  <View 
    style={{
      height:50,
      width: width,
      borderBottomWidth:1,
      borderBottomColor:"#DDD",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "row"
    }}>
    <Text>Text 1</Text>
    <Text>Text 2</Text>
    <Text>Text 3</Text>
  </View>
};*/

/*
const Tab = ({ title, active = false }) => {
  <View style={[
    {
      width: widthTab,
      justifyContent:"center",
      alignItems:"center"
    },
    active ? { borderBottomWidth: 2, borderBottomColor: "#000"} : {}
    ]}>
    <Text>{title}</Text>
  </View>
}*/


class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      typing: 1
    }
  }

  static navigationOptions = {
    header: null
  }



  done = () =>{
    // if(this.state.typing == 1){
    //   this.state.typing = -1;
    // }else if(this.state.typing == -1){
    //   this.state.typing = 1;
    // }
    //alert("ok");
    //alert(this.state.typing);
   // this.state.typing = -1;

    this.state.typing = !this.state.typing;
  }


  logout = async () => {
    
    try{

      messaging()
      .unsubscribeFromTopic(this.props.auth.user.USU_LOGIN)
      .then(() => console.log('Subscribed to topic!'));

      for(let index in this.props.students.students){
        messaging()
        .unsubscribeFromTopic(this.props.students.students[index].TURMA)
        .then(() => console.log('Subscribed to topic!'));
      }
    }catch(e){}

    await AsyncStorage.removeItem('@seculo/user');
    await AsyncStorage.removeItem('@seculo/students');
    await AsyncStorage.removeItem('@seculo/user');

    this.props.navigation.replace('Signin')
  };



  componentDidMount = () =>{

    try{

      messaging()
      .subscribeToTopic(this.props.auth.user.USU_LOGIN)
      .then(() => console.log('Subscribed to topic!'));

      for(let index in this.props.students.students){
        messaging()
        .subscribeToTopic(this.props.students.students[index].TURMA)
        .then(() => console.log('Subscribed to topic!'));
      }
    }catch(e){}
    
  }
  componentDidUpdate = () => {}

  render() {
    /*
    const channelId = notifee.createChannel({
      id: 'default',
      name: 'Padrão'
    })
  
    const createAdroindNotificationChannels = async () => {
  
      await notifee.displayNotification({
        title: 'Notification Title',
        body: 'Main body content of the notification',
        android: {
          channelId,
        },
      });
      
    }*/


    const data = [
      {
        id: '00',
        name: 'CALENDÁRIO',
        //image: require('../../assets/images/calendar.png'),
        image: <Icon name="calendar" size={25} color="#4674b7" />,
        navigation: 'CalendarPage',
        done: false,
        roles: ['aluno', 'responsavel'],
      },
      {
        id: '01',
        name: 'CONTEÚDOS E HORÁRIOS',
        //image: require('../../assets/images/contents.png'),
        image: <Icon name="book" size={25} color="#4674b7"/>,
        navigation: 'ContentsHours',
        done: false,
        roles: ['aluno', 'responsavel'],
      },
      {
        id: '02',
        name: 'NOTAS E FREQUÊNCIAS',
        //image: require('../../assets/images/notes.png'),
        image: <Icon name="menuunfold" size={25} color="#4674b7"/>,
        navigation: 'BoletimFrequence',
        done: false,
        roles: ['aluno', 'responsavel'],
      }/*,
      {
        id: '03',
        name: 'DESEMPENHO',
        image: require('../../assets/images/performance.png'),
        navigation: 'TestPerformance',
        done: false,
        roles: ['aluno', 'responsavel'],
      },
      {
        id: '04',
        name: 'PROVAS',
        image: require('../../assets/images/feedback.png'),
        navigation: 'SelectEvaluation',
        done: false,
        roles: ['aluno', 'responsavel'],
      }*/,
      {
        id: '05',
        name: 'CARDÁPIO SEMANAL',
        //image: require('../../assets/images/lunch.png'),
        image: <Icon name="profile" size={25} color="#4674b7"/>,
        navigation: 'WeeklyMenu',
        done: false,
        roles: ['aluno', 'responsavel'],
      },
      /*{
        id: '06',
        name: 'SALDO DE CRÉDITO',
        //image: require('../../assets/images/balance.png'),
        image: <Icon name="menuunfold" size={25} color="#4674b7"/>,
        navigation: 'Transfers',
        done: false,
        roles: ['responsavel'],
      },*/
      {
        id: '07',
        name: 'COMPRAR CRÉDITOS',
        //image: require('../../assets/images/credit-card.png'),
        image: <Icon name="creditcard" size={25} color="#4674b7"/>,
        navigation: 'PurchaseCredits',
        done: false,
        roles: ['responsavel'],
      },
      {
        id: '08',
        name: 'MENSALIDADE',
        //image: require('../../assets/images/balance.png'),
        image: <Icon name="wallet" size={25} color="#4674b7"/>,
        navigation: 'BoletosComponent',
        done: false,
        roles: ['responsavel'],
      },
      {
        id: '11',
        name: 'SOLICITAÇÕES',
        //image: require('../../assets/images/balance.png'),
        image: <Icon name="pushpino" size={25} color="#4674b7"/>,
        navigation: 'Solicitacion',
        done: false,
        roles: ['responsavel'],
      },
      /*{
        id: '14',
        name: 'RECADOS',
        //image: require('../../assets/images/balance.png'),
        image: <Icon name="message1" size={25} color="#4674b7"/>,
        navigation: 'Messages',
        done: false,
        roles: ['responsavel'],
      }*/

    
    ];
  
    const createRows = (data, columns) => {
      let a = [];

      data.map((c) => {
        a.push(c.roles.includes(this.props.auth.user.USU_TIPO));
      });

      let size = a.filter((value) => !value).length;
      let sizeData = data.length - size;

      const rows = Math.floor(sizeData / columns);

      let lastRowElements = sizeData - rows * columns;

      while (lastRowElements !== columns) {
        data.push({
          id: `empty-${lastRowElements}`,
          name: `empty-${lastRowElements}`,
          empty: true,
        });

        lastRowElements += 1;
      }

      return data;
    };

    const columns = 3;

    if(this.props.students.student.CODCURSO != "001"){
      data[2] = {
        id: '02',
        name: 'NOTAS E FREQUÊNCIAS',
        //image: require('../../assets/images/notes.png'),
        image: <Icon name="menuunfold" size={25} color="#4674b7"/>,
        navigation: 'BoletimFrequence',
        done: false,
        roles: ['aluno', 'responsavel'],
      }
    }else{
      data[2] = {
        id: '09',
        name: 'ACOMPANHAMENTO INFANTIL',
        //image: require('../../assets/images/infantil.png'),
        image: <Icon name="team" size={25} color="#4674b7"/>,
        navigation: 'AcompanhamentoInfantil',
        done: false,
        roles: ['responsavel'],
      }
    }



    return (
      <View>
      <ScrollView>
        <View style={{backgroundColor: '#F1F1F2', flex: 1}}>
          <Header navigation={this.props.navigation} />
          <HeaderAuthenticated />
          
          <Alert navigation={this.props.navigation}/>      


          <View style={{paddingHorizontal: 10, marginTop: 20}}>
            <HeaderSelectUser />
          </View>
         
          

          <View style={{paddingHorizontal: 10, paddingTop: 20}}>
            <FlatList
              data={createRows(data, columns)}
              keyExtractor={(item) => item.id}
              numColumns={columns}
              renderItem={({item}) => {
                if (item.empty) {
                  return <View style={[styles.item, styles.itemEmpty]} />;
                }

                if (
                  typeof item.roles !== 'undefined' &&
                  item.roles.includes(this.props.auth.user.USU_TIPO)
                ) {
                  return (
                    <TouchableOpacity
                      key={item.id}
                      style={[styles.item]}
                      onPress={() =>
                        this.props.navigation.navigate(item.navigation)
                      }>
                      <View
                        style={{
                          padding: 10,
                          backgroundColor: '#F1F1F2',
                          borderRadius: 60,
                          marginBottom: 8,
                          flexShrink: 1,
                        }}>
                        
                        {/* <Image
                          resizeMode="stretch"
                          style={{width: 25, height: 25}}
                          source={item.image}
                        /> */}

                        <Text>
                        {item.image}
                        
                        </Text>
                      </View>
                      <Text style={item.id == 12 ? styles.colorFin : styles.text}>{item.name}</Text>
                    </TouchableOpacity>
                  );
                }
              }}
            />
            
          </View>

          {/* <View style={{backgroundColor:'#4674b7', flex:1, height:60, marginVertical:40,
            position:'relative', marginBottom:60}}>
            <Image
                style={{zIndex:2, marginLeft:30, marginTop:-40}}
                source={require('../../assets/images/maskote.png')}
              />
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Chat')}
                style={{zIndex:2, position: 'absolute', top:15, right:60}}>
                <TypeWriter 
                  onTypingEnd={this.done}
                  typing={this.state.typing}
                  
                  //reset={this.state.typing}
                  style={{fontSize:responsiveFontSize(2.5), color:'#FFF', fontWeight:'bold' }}>
                  PRECISA DE AJUDA?
                  </TypeWriter>
                </TouchableOpacity>
          </View> */}



          <View
            style={{
              bottom: 0,
              zIndex: 100,
              width: '100%'
            }}>
            {/* <View>
              <Image
                style={{
                  width: '100%',
                }}
                source={require('../../assets/images/bar.png')}
                resizeMode="contain"
              />
            </View> */}


            <View
              style={{paddingVertical: Platform.OS === 'android' ? 15 : 25}}
              >
              {/* <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Support')}>
                <Text
                  style={{
                    textAlign: 'center',
                    marginBottom: Platform.OS === 'android' ? 0 : 10,
                  }}>

              <TypeWriter 
                onTypingEnd={this.done}
                typing={this.state.typing}
                
                //reset={this.state.typing}
                style={{fontSize:20}}>
                PRECISA DE AJUDA?
                </TypeWriter>

                </Text>
              </TouchableOpacity> */}
              
             

              <TouchableOpacity
              onPress={this.logout}
              style={{flex: 1, justifyContent:'center', marginHorizontal:20, alignItems:'center', padding:10, borderRadius:20, backgroundColor:'#4674b7'}}>
              <Text style={{ textAlign: 'center',
                color: '#FFF',
                fontWeight: 'bold',
                fontSize: responsiveFontSize(1.8)}}> 
                 Sair</Text>
              </TouchableOpacity>

              {/* <TouchableOpacity onPress={() => createAdroindNotificationChannels()}><Text>Notificacao Local</Text></TouchableOpacity> */}

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
          source={require('../../assets/images/bar.png')}
          resizeMode="contain"
        />
      </View> */}

      
      {/* <View style={{
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
              style={{flex: 1, justifyContent:'center', alignItems:'center', paddingTop:5}}>
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
                this.props.navigation.navigate('Solicitacion')
              }
              style={{flex: 1, justifyContent:'center', alignItems:'center', paddingTop:5}}>
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
              style={{flex: 1, justifyContent:'center', alignItems:'center', paddingTop:5}}>
              <Icon name="appstore-o" size={20} color="#4674b7"/>
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
              style={{flex: 1, justifyContent:'center', alignItems:'center', paddingTop:5}}>
              <Icon name="logout" size={20} color="#4674b7"/>
              <Text style={{ textAlign: 'center',
                color: '#4674b7',
                fontWeight: 'bold',
                marginTop:5,
                fontSize: 12,}}> 
                 Sair</Text>
            </TouchableOpacity>
          </Text>
        </View>   */}


      </View>
      
    );
  }
}

/**
 * 
 *        <TouchableOpacity
              onPress={this.logout}
              style={{flex: 1, marginBottom: 20}}>
              <Text style={{ textAlign: 'center',
                color: '#4674b7',
                fontWeight: 'bold',
                fontSize: 16,}}>Sair</Text>
            </TouchableOpacity>



 *         <Tabs>
            <Tab title="Tab 1" active={true}/>
            <Tab title="Tab 2" />
            <Tab title="Tab 3" />
          </Tabs>
 */

const styles = StyleSheet.create({
  item: {
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    flexGrow: 1,
    marginHorizontal: 8,
    marginBottom: 15,
    flexBasis: 0,
    minHeight: 100,
    padding:8,
    paddingVertical: 10,
    backgroundColor: '#fff',
    flexShrink: 1,
  },
  text: {
    color: '#4674b7',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.2),
    padding:2,
    //paddingHorizontal: 5,
    flexShrink: 1,
  },
  itemEmpty: {
    backgroundColor: 'transparent',
    flexShrink: 1,
    borderWidth: 0,
    marginBottom:10
  },
  colorFin: {
    color: '#ED695F',
    fontWeight: 'bold'
  },
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

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    students: state.students,
  };
};

export default connect(mapStateToProps)(Dashboard);
