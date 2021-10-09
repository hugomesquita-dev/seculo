import React from 'react';
import { View, 
      Text, 
      TouchableOpacity, 
      ScrollView, 
      FlatList,
      Image,
      Dimensions,
      StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Header from '../../components/ui/header';
import HeaderAuthenticated from '../../components/ui/header-authenticated';
import IconInfo from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();
import api from '../../config/api';
import { Calendar, LocaleConfig} from 'react-native-calendars';
import HeaderSelectUser from '../../components/ui/header-select-user';


LocaleConfig.locales['pt'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  monthNamesShort: ['Jan.','Fev.','Mar','Abr','Mai','Jun','Jul.','Ago.','Set.','Out.','Nov.','Dec.'],
  dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
  dayNamesShort: ['Dom.','Seg.','Ter.','Qua.','Qui.','Sex.','Sab.'],
  today: 'hoje'
};
LocaleConfig.defaultLocale = 'pt';
let { width, height } = Dimensions.get("window");

class CalendarPage extends React.Component {
  state = {
    eventsDates: {},
    eventsSelectedDay: [],
    allEvents: []
  };

  componentDidMount = () => {

    console.log(" ALUNO TURMA: " + this.props.students.student.TURMA)
    console.log(" MATRICULA: "+ this.props.students.student.RA)

    api
      .post('/calendario/lstCalendario/', {
        p_turma: this.props.students.student.TURMA,
        p_cd_usuario: this.props.students.student.RA
      }, )
      .then((res) => {
        //console.log(" ----AVALIACOES:  "+res.data);

        if (res.data.length > 0) {

          var dates = {}

          for (var index in res.data) {

            //console.log(" -----DATE: "+JSON.stringify(res.data[index]));

            var d = res.data[index].DATA.split('/')
            var dateFormated = '20' + d[2] + '-' + d[1] + '-' + d[0]
            dates[dateFormated] = { selected: true, marked: true, selectedColor: res.data[index].DC_COLOR }
            res.data[index].DATAFORMATADA = dateFormated

          }

        }
    
        this.setState({
          allEvents: res.data,
          eventsDates: dates,
        });

      })
      .catch((err) => {
        alert("Erro ao carregar informações.");
      });

  };

  componentDidUpdate = () => {
    api
      .post('/calendario/lstCalendario/', {
        p_turma: this.props.students.student.TURMA,
        p_cd_usuario: this.props.students.student.RA
      })
      .then((res) => {
        console.log("okokoko"+res.data);

        if (res.data.length > 0) {

          var dates = {}

          for (var index in res.data) {
            var d = res.data[index].DATA.split('/')
            var dateFormated = '20' + d[2] + '-' + d[1] + '-' + d[0]
            dates[dateFormated] = { selected: true, marked: true, selectedColor: res.data[index].DC_COLOR }
            res.data[index].DATAFORMATADA = dateFormated
          }
        }

        this.setState({
          allEvents: res.data,
          eventsDates: dates,
        });

      })
      .catch((err) => {
        alert("Erro ao carregar informações.");
      });

  };


  filterDate(date){

    var dates = []
    for (var index in this.state.allEvents) {

      if(this.state.allEvents[index].DATAFORMATADA == date){
        dates.push(this.state.allEvents[index])
      }
    }

    this.setState({
      eventsSelectedDay: dates,
    });
  }

  goToDetails = () =>{
    //DetailsCaledar />props.navigation.navigate('DetailsCaledar')
    //alert(texto);
    this.props.navigation.navigate('DetailsCaledar', {
      'params': 'Conteúdo da prova'
    });
  }
  
  render() {
 
    return (
      <View style={{height: height}}>
      <ScrollView style={{ flex: 1, backgroundColor: '#F1F1F2', marginBottom:65 }}>
        <View >
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
              CALENDÁRIO
            </Text>
          </View>
          <View style={{paddingHorizontal: 20, paddingBottom: 20}}>

          <HeaderSelectUser />

            <Calendar
              monthFormat={'MMMM yyyy'}
              onDayPress={(day) => { this.filterDate(day.dateString) }}
              markedDates={this.state.eventsDates}
              style={{ fontWeight:'bold', marginTop:15, marginBottom:15, paddingVertical:10, borderRadius:10, borderColor: '#E8E8E8', borderWidth:1}}
            />

            <View>
              <Text style={{paddingVertical: 5}}>
                <Text style={{textTransform: 'uppercase', fontSize:14, fontWeight: 'bold', color: '#4F74B2'}}><IconInfo name="info-circle" size={20} color="#4F74B2" /> Legenda</Text>
              </Text>
              <View style={{flex:1, flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                <Text style={[styles.BoxLegendColor, styles.At]}></Text>
                <Text style={styles.BoxLegendText}>Atividade</Text>

                <Text style={[styles.BoxLegendColor, styles.Av]}></Text>
                <Text style={styles.BoxLegendText}>Avaliação</Text>

                <Text style={[styles.BoxLegendColor, styles.Fe]}></Text>
                <Text style={styles.BoxLegendText}>Feriado</Text>
              </View>

            </View>

            <FlatList 
              data={this.state.eventsSelectedDay}
              renderItem={(eventSelect) =>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 10,
                    marginTop: 10,
                    padding:10,
                    borderWidth: 1,
                    borderColor: '#E8E8E8',
                    backgroundColor:'#FFFFFF',
                    borderRadius:10
                  }}>
                  

                  <View
                    style={{
                      flex: 0.3,
                    }}>
                    <Text
                      style={{
                        color: '#4674b7',
                        fontWeight: 'bold',
                        fontSize: 18,
                      }}>
                      {eventSelect.item.DATA}
                    </Text>
                  </View>


                  <View
                    style={{
                      flex: 0.7
                    }}>
                    <Text style={{ color: '#111111', fontSize:12, fontWeight: 'bold' }} 
                          onPress={() => {
                            this.props.navigation.navigate('DetailsCaledar', {titulo: eventSelect.item.DC_CALENDARIO, data_prova: eventSelect.item.DATA, conteudo: eventSelect.item.INFO_PROVA})
                            }}>
                      {eventSelect.item.DC_CALENDARIO}
                    </Text>
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

const styles = StyleSheet.create({
  BoxLegendColor: {
    width: 25,
    height:25,
    borderRadius:10, 
    overflow: 'hidden', 
    marginRight: 10
  },
  BoxLegendText: {
    marginRight:10,
    fontSize: 14
  },
  At: {
    backgroundColor: '#F5BE4F'
  },
  Av: {
    backgroundColor: '#62C454'
  },
  Fe:{
    backgroundColor: '#ED695F'
  }
})

const mapStateToProps = (state) => ({
  auth: state.auth,
  students: state.students,
});

export default connect(mapStateToProps)(CalendarPage);
