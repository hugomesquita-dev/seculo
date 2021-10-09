import React from 'react';
import { View, 
      ScrollView, 
      Text, 
      Button, 
      TouchableOpacity, 
      Image, 
      FlatList, 
      ActivityIndicator, 
      Linking, 
      StyleSheet,
      Dimensions
} from 'react-native';

import Header from '../../components/ui/header';
import HeaderAuthenticated from '../../components/ui/header-authenticated';
import IconSetas from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';
import api from '../../config/api';
import { connect } from 'react-redux';
import HeaderSelectUser from '../../components/ui/header-select-user';
Icon.loadFont();
let { width, height } = Dimensions.get("window");

class BoletimFrequence extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      itens: [],
      loading: true,
      itensSelected: [],
      bimestre: 1
    }
  }

  componentDidMount = () => {
    api
      .post('/nota/lstBoletim/', { 
        p_cd_usuario: this.props.students.student.RA,
      })
      .then((res) => {
        var itensSelected = res.data;

        this.setState({
          itens: res.data,
          itensSelected: itensSelected,
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


  componentDidUpdate = () => {
    api
      .post('/nota/lstBoletim/', {
        p_cd_usuario: this.props.students.student.RA,
      })
      .then((res) => {

        var itensSelected = res.data;

        this.setState({
          itens: res.data,
          itensSelected: itensSelected,
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
              NOTAS E FREQUÊNCIAS
            </Text>
          </View>

          <View style={{paddingHorizontal: 20, marginTop: 10}}>
            <HeaderSelectUser />
          </View>

          <View style={{ paddingHorizontal: 20 }}>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 15,
                marginTop: 15,
                borderWidth: 1,
                borderColor: '#E8E8E8',
                borderRadius: 25,
                backgroundColor:'#FFFFFF',
                paddingHorizontal: 15,
                paddingVertical: 10,
                alignItems: 'center',
              }}>
              <TouchableOpacity style={{ paddingHorizontal: 15 }} onPress={() => {
                if (this.state.bimestre > 1) {

                  this.setState({
                      bimestre: this.state.bimestre - 1
                    });
                }
              }}>
                <IconSetas name="angle-left" size={25} />
              </TouchableOpacity>
              <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                {this.state.bimestre} BIMESTRE
              </Text>
              <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={() => {
                if (this.state.bimestre <= 3) {

                  this.setState({
                      bimestre: this.state.bimestre + 1
                    });
                }
              }}>
                <IconSetas name="angle-right" size={25} />
              </TouchableOpacity>
            </View>

            {this.state.loading && <ActivityIndicator size="large" color="#4674B7" />}

            <View style={{flex:1, flexDirection: 'row', justifyContent:'space-between'}}>
              <View style={{fontSize:14, marginTop:15, marginBottom:15}}>
                <Text style={styles.text}> N1 - Primeira avaliação </Text>
                <Text style={styles.text}> N2 - Segunda avaliação </Text>
                <Text style={styles.text}> MAIC - Média das avaliações </Text>
                <Text style={styles.text}> MB - Média do Bimestre </Text>
                <Text style={styles.text}> F - Faltas </Text>
              </View>

              <View style={{alignItems:'center', justifyContent:'center' ,borderRadius:20, borderColor:"#cc0000", borderWidth:1, fontSize:12, marginTop:15, marginBottom:15}}>
               
                <TouchableOpacity style={{alignItems:'center', justifyContent:'center', paddingLeft:10, paddingRight:10, paddingTop:2,paddingBottom:2 }} onPress={() => {Linking.openURL('https://seculomanaus.com.br/componentes/portal/demonstrativo/inicio?ra='+this.props.students.student.RA);}}>
                    <Icon name="download" color="#cc0000" size={30} />
                    <Text style={{fontSize:14, textAlign:'center', width:80, fontWeight: 'bold' ,color:'#cc0000', paddingTop:5, paddingBottom:10}}>
                      Baixe o Boletim
                    </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between', 
              marginBottom: 30,
              marginTop: 30,
              padding:8,
              backgroundColor: '#DDDDDD',
              borderRadius:10
            }}>

              <Text
                style={{
                  fontSize: 13,
                  color: '#1A2541',
                  fontWeight: 'bold',
                  width: '40%',
                }}>
                DISCIPLINA
              </Text>
              <Text style={{ fontSize: 12, fontWeight:'bold', color: '#1A2541' }}>N1</Text>
              <Text style={{ fontSize: 12, fontWeight:'bold', color: '#1A2541' }}>MAIC</Text>
              <Text style={{ fontSize: 12, fontWeight:'bold', color: '#1A2541' }}>N2</Text>
              <Text style={{ fontSize: 12, fontWeight:'bold', color: '#1A2541' }}>MB</Text>
              <Text style={{ fontSize: 12, fontWeight:'bold', color: '#1A2541' }}>F</Text>
            </View>

            <FlatList
              data={this.state.itensSelected}
              renderItem={(itemData) =>

                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    paddingBottom: 5,
                    borderBottomWidth: 1,
                    borderBottomColor: '#c1c1c1',
                    alignItems: 'center',
                    marginBottom: 10,
                  }}>

                  <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}>

                    <Text
                      style={{
                        fontSize: 13,
                        color: '#1A2541',
                        fontWeight: 'bold',
                        width: '40%'
                      }}>
                      {itemData.item.NM_DISCIPLINA}
                    </Text>
                    <Text style={{ fontSize: 12, color: '#1A2541' }}>{itemData.item['N1_'+this.state.bimestre+'B'] == null ? '-' : itemData.item['N1_'+this.state.bimestre+'B']}</Text>
                    <Text style={{ fontSize: 12, color: '#1A2541' }}>{itemData.item['MAIC_'+this.state.bimestre+'B'] == null ? '-' : itemData.item['MAIC_'+this.state.bimestre+'B']}</Text>
                    <Text style={{ fontSize: 12, color: '#1A2541' }}>{itemData.item['N2_'+this.state.bimestre+'B'] == null ? '-' : itemData.item['N2_'+this.state.bimestre+'B']}</Text>
                    <Text style={{ fontSize: 12, color: '#1A2541' }}>{itemData.item['MB_'+this.state.bimestre+'B'] == null ? '-' : itemData.item['MB_'+this.state.bimestre+'B']}</Text>
                    <Text style={{ fontSize: 12, color: '#1A2541' }}>{itemData.item['FT_'+this.state.bimestre+'B'] == null ? '-' : itemData.item['FT_'+this.state.bimestre+'B']}</Text>
                  </View>
                </View>

              }
              keyExtractor={(item) => item.name}
            />

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
        </View> */}



      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    paddingTop:2,
    paddingBottom:2
  }
})

const mapStateToProps = (state) => ({
  auth: state.auth,
  students: state.students,
});

export default connect(mapStateToProps)(BoletimFrequence);
