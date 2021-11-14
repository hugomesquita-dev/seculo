import React from 'react';
import { View, 
  ScrollView, 
  Text, 
  TouchableOpacity, 
  Image, 
  FlatList, 
  ActivityIndicator,
  StyleSheet,
  Dimensions } from 'react-native';

import Header from '../../components/ui/header';
import HeaderAuthenticated from '../../components/ui/header-authenticated';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();
import api from '../../config/api';
import { connect } from 'react-redux';

import HeaderSelectUser from '../../components/ui/header-select-user';
import Tab from './components/tab';

let { width, height } = Dimensions.get("window");
class ContentsHours extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      itens: [
        {
          ds_content: [] //seg
        },
        {
          ds_content: [] //ter
        },
        {
          ds_content: [] //qua
        },
        {
          ds_content: [] //qui
        },
        {
          ds_content: [] //sex
        }
      ],
      tabActive: 0,
      loading: true,
      dataHoje: "",
    }
  }
  componentDidMount = () => {
    this.fetchItens();
  };

  componentDidUpdate = () => {
    this.fetchItens();
  }
 
  fetchItens = () => {
    api
    .post('/horario/lstHorario/', {
      p_cd_usuario: this.props.students.student.RA,
    })
    .then((res) => {
      let today = new Date();
      let date = today.toLocaleDateString("pt-br", { 
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

      console.log(this.props.students.student.RA);

      this.state.itens = [
        {
          id: 1,
          ds_dia: 'SEGUNDA-FEIRA',
          ds_content: [...this.state.itens[0].ds_content,  res.data.filter(i => i.DIASEMANA == 2)],
        },       
        { 
          id: 2,
          ds_dia: 'TERÇA-FEIRA',
          ds_content: [...this.state.itens[1].ds_content,  res.data.filter(i => i.DIASEMANA == 3)],
        },
        {
          id: 3,
          ds_dia: 'QUARTA-FEIRA',
          ds_content: [...this.state.itens[2].ds_content, res.data.filter(i => i.DIASEMANA == 4)],
        },
        {
          id: 4,
          ds_dia: 'QUINTA-FEIRA',
          ds_content: [...this.state.itens[3].ds_content, res.data.filter(i => i.DIASEMANA == 5)],
        },
        {
          id: 5,
          ds_dia: 'SEXTA-FEIRA',
          ds_content: [...this.state.itens[4].ds_content, res.data.filter(i => i.DIASEMANA == 6)],
        }
      ]


      this.setState({
        ...this.state,
        //value: this.state.itens,
        loading: false,
        dataHora: date 
      })


    })
    .catch((err) => {
      alert("Erro ao carregar os dados.");
      this.setState({
        loading: false,
      })

    });
  }

  /*updateFilter = (filterCrime) => {
    this.setState({ filterCrime: filterCrime })
  }*/

  changeTabSelected = (tabActive) => {
    this.setState({
      tabActive,
    });
  };


  /*handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1 
      },() => {
        this.fetchItens()
      }
    )
  }*/

  render() {
    return (

      <View>
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
              CONTEÚDOS E HORÁRIOS
            </Text>
          </View>

          <View style={{ paddingHorizontal: 20}}>
            <HeaderSelectUser />
          </View>

          <View style={{ paddingHorizontal: 20}}>
            <Tab 
                data={this.state.itens[this.state.tabActive]}
                active={this.state.tabActive}
                changeTabSelected={this.changeTabSelected}/>
          </View>
          {this.state.loading && <ActivityIndicator size="large" color="#4674B7" />}
          

        
          
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
        </View>       */}

      </View>
    );
  }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    students: state.students,
});

export default connect(mapStateToProps)(ContentsHours);