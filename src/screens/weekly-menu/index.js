import React from 'react';
import {View, 
  Text, 
  Image, 
  TouchableOpacity, 
  ScrollView,
  StyleSheet,
  Dimensions} from 'react-native';
import {connect} from 'react-redux';

import Header from '../../components/ui/header';
import HeaderSelectUser from '../../components/ui/header-select-user';
import HeaderAuthenticated from '../../components/ui/header-authenticated';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();

import api from '../../config/api';

import Tab from './components/tab';
let { width, height } = Dimensions.get("window");
class WeeklyMenu extends React.Component {
  state = {
    tabActive: 0,
    weekly: [
      {
        coffee: [],
        lunch: [],
        evening: [],
      },
      {
        coffee: [],
        lunch: [],
        evening: [],
      },
      {
        coffee: [],
        lunch: [],
        evening: [],
      },
      {
        coffee: [],
        lunch: [],
        evening: [],
      },
      {
        coffee: [],
        lunch: [],
        evening: [],
      },
    ],
  };

  
  changeTabSelected = (tabActive) => {
    this.setState({
      tabActive,
    });
  };

  
  componentDidMount = () => {

    console.log("++++++++RA: "+this.props.auth.students.RA);
    api
      .post('/cardapio/lstCardapio/', {
        p_cd_usuario: this.props.auth.students.RA,
      })
      .then((res) => {
        
        //console.log("Calendário: "+res.data);


        res.data.map((menu) => {
          if (menu.DC_TIPO == 'LANCHE DA MANHÃ (Exclusivo Ensino Infantil)') {
            this.state.weekly = [
              {
                ...this.state.weekly[0],
                coffee: [...this.state.weekly[0].coffee, menu.SEG_DESC],
              },
              {
                ...this.state.weekly[1],
                coffee: [...this.state.weekly[1].coffee, menu.TER_DESC],
              },
              {
                ...this.state.weekly[2],
                coffee: [...this.state.weekly[2].coffee, menu.QUA_DESC],
              },
              {
                ...this.state.weekly[3],
                coffee: [...this.state.weekly[3].coffee, menu.QUI_DESC],
              },
              {
                ...this.state.weekly[4],
                coffee: [...this.state.weekly[4].coffee, menu.SEX_DESC],
              },
            ];
          }

          if (menu.DC_TIPO == 'ALMOÇO') {
            this.state.weekly = [
              {
                ...this.state.weekly[0],
                lunch: [...this.state.weekly[0].lunch, menu.SEG_DESC],
              },
              {
                ...this.state.weekly[1],
                lunch: [...this.state.weekly[1].lunch, menu.TER_DESC],
              },
              {
                ...this.state.weekly[2],
                lunch: [...this.state.weekly[2].lunch, menu.QUA_DESC],
              },
              {
                ...this.state.weekly[3],
                lunch: [...this.state.weekly[3].lunch, menu.QUI_DESC],
              },
              {
                ...this.state.weekly[4],
                lunch: [...this.state.weekly[4].lunch, menu.SEX_DESC],
              },
            ];
          }

          if (menu.DC_TIPO == 'LANCHE DA TARDE (Exclusivo Ensino Infantil)') {
            this.state.weekly = [
              {
                ...this.state.weekly[0],
                evening: [...this.state.weekly[0].evening, menu.SEG_DESC],
              },
              {
                ...this.state.weekly[1],
                evening: [...this.state.weekly[1].evening, menu.TER_DESC],
              },
              {
                ...this.state.weekly[2],
                evening: [...this.state.weekly[2].evening, menu.QUA_DESC],
              },
              {
                ...this.state.weekly[3],
                evening: [...this.state.weekly[3].evening, menu.QUI_DESC],
              },
              {
                ...this.state.weekly[4],
                evening: [...this.state.weekly[4].evening, menu.SEX_DESC],
              },
            ];
          }
        });

        //console.log(""+this.state.weekly);
        //console.log("CARDAPIO: "+JSON.stringify(this.state.weekly))

        this.setState({...this.state}, () => {
          this.state;
        });
      })
      .catch((err) => {});
  };




  
  render() {
    return (
      <View style={{height: height}}>
      <ScrollView>
        <View style={{flex: 1, backgroundColor: '#f1f1f2', marginBottom:65}}>
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
                width: '50%',
              }}>
              CARDÁPIO SEMANAL
            </Text>
          </View>

          <View style={{ paddingHorizontal: 20}}>
            <HeaderSelectUser />
          </View>


          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 20,
              
            }}>
            <Tab
              data={this.state.weekly[this.state.tabActive]}
              active={this.state.tabActive}
              changeTabSelected={this.changeTabSelected}
            />
          </View>

{/*           
          <View
            style={{
              bottom: 0,
              zIndex: 100,
              width: '100%',
            }}>
            <View>
              <Image
                style={{
                  marginTop: 40,
                  width: '100%',
                }}
                source={require('../../assets/images/bar.png')}
                resizeMode="contain"
              />
            </View>
            <View
              style={{paddingVertical: Platform.OS === 'android' ? 15 : 25}}>
              <TouchableOpacity>
                <Text
                  style={{
                    textAlign: 'center',
                    marginBottom: Platform.OS === 'android' ? 0 : 10,
                  }}>
                  PRECISA DE AJUDA?
                </Text>
              </TouchableOpacity>
            </View>
          </View> */}


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
                this.props.navigation.navigate('Dashboard')
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

const mapStateToProps = (state) => {
  return {
      auth: state.auth,
      students: state.students,
  };
};

export default connect(mapStateToProps)(WeeklyMenu);
