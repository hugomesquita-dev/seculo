import React, { useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import api from '../../config/api';
import Header from '../../components/ui/header';
import HeaderAuthenticated from '../../components/ui/header-authenticated';
import HeaderSelectUser from '../../components/ui/header-select-user';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
    } from "react-native-responsive-dimensions";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';


Icon.loadFont();
let { height } = Dimensions.get("window");
let student
const init = async function (a, b) {
    student = JSON.parse(await AsyncStorage.getItem('@seculo/student'));
}
init();
const leiaMais = (string, limite) => {
    if(string.length > limite){
      return string.substring(0, limite).concat("...");
    }else{
        return string;
    }
}

class Messages extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            recados: [],
            loading: true,
            ra_aluno: this.props.students.student.RA,
        }

        //this.handleLoadingChange = this.handleLoadingChange.bind(this);
    }

    componentDidMount = async () => {
      
        await api 
            .post('/recado/lstRecado/', {
                p_cd_usuario: this.props.students.student.RA
            })
            .then((res) => {
                this.setState({
                    loading: false,
                    recados: res.data
                })
                //console.log("--------LISTA "+res.data);
            }).catch((err) => {
                alert("Erro ao carregar os dados.");
               
            })

            console.log("renderizou");
            
    }
    
    componentDidUpdate = async (prevProps) => {
        // console.log("RA STORAGE: "+student.RA);
        console.log("RA: "+this.state.ra_aluno);
        console.log("RA SELECIONADO "+this.props.students.student.RA);
    

        if(prevProps.students.student.RA !== this.props.students.student.RA){
            this.listData();
            
            return;
            //console.log("Mudou para um novo aluno");
        }else{
            return;
        }
      
    }


    listData = async () => {
        await api 
        .post('/recado/lstRecado/', {
            p_cd_usuario: this.props.students.student.RA
        })
        .then((res) => {
            this.setState({
                loading: false,
                recados: res.data,
                ra_aluno: this.props.students.student.RA
            }, function(){})
            console.log("listou e mudou");
        })
    }

    // handleLoadingChange = () =>{
    //     this.setState({
    //         loading: true
    //     })
    // }

   
    render(){
        return(
            <View style={{height: height}}>
            <ScrollView>
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
                        RECADOS
                        </Text>
                    </View> 
                    
                    <View style={{ paddingHorizontal: 20 }}>
                        <HeaderSelectUser />
                    </View>

                    <View style={{ paddingHorizontal: 20, marginTop:20 }}>
                  
                    {this.state.loading && <ActivityIndicator size="large" color="#4674B7" />}
                    {this.state.recados.length == 0 && <Text style={styles.contentTitle}>Nenhum Recado.</Text>}

                    <View 
                        scrollEnabled={true}
                        scrollIndicatorInsets={true}>
                    <FlatList 
                            data={this.state.recados}
                            keyExtractor={(item) => item.id_recado}
                            renderItem={(itemData) => 
                                <View>
                                <TouchableOpacity 
                                    onPress={() => 
                                        this.props.navigation.navigate('detailsMenssages',
                                                    {
                                                        titulo: itemData.item.TITULO,
                                                        observacao: itemData.item.OBSERVACAO,
                                                        flg_status: itemData.item.FLG_STATUS,
                                                        dt_entrega: itemData.item.DT_ENTREGA
                                                    })}>
                                    <View style={styles.box}>
                                        <View style={{flex:2, flexDirection: 'row'}}>
                                            <View style={{flex:2, paddingRight: 10}}>
                                                <Text style={styles.boxTitle}>{itemData.item.TITULO}</Text>
                                                <Text style={styles.boxTitleDisc}>{itemData.item.DISCIPLINA}</Text>
                                                
                                                
                                            </View>
                                            <View style={{flex:1.2}}>
                                                {itemData.item.FLG_STATUS == 'CONCLUIDO' && <Text style={styles.btn}><Text style={[styles.btnText, styles.btnTextGreen]}>{itemData.item.FLG_STATUS}</Text> <Icon name="check" size={25}  style={[styles.btnTextGreen, styles.btnIconSmall]}/></Text>}
                                                {itemData.item.FLG_STATUS == 'FAZER' && <Text style={styles.btn}><Text style={[styles.btnText, styles.btnTextBlue]}>{itemData.item.FLG_STATUS}</Text> <Icon name="exclamation" size={25}  style={[styles.btnTextBlue, styles.btnIconSmall]}/></Text>}
                                                {itemData.item.FLG_STATUS == 'REFAZER' && <Text style={styles.btn}><Text style={[styles.btnText, styles.btnTextRed]}>{itemData.item.FLG_STATUS}</Text> <Icon name="retweet" size={25}  style={[styles.btnTextRed, styles.btnIconSmall]}/></Text>}
                                            </View>
                                            
                                        </View>
                                        <Text style={styles.boxContent}>{leiaMais(itemData.item.OBSERVACAO,30)}</Text>
                                        <Text style={styles.contentDate}>
                                            {itemData.item.DT_ENTREGA}
                                        </Text>

                                    </View>  
                                </TouchableOpacity>
                                </View>

                            }
                           
                        />
                        </View>
                        


                    </View>



            </ScrollView>
            </View>
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
        marginVertical: 10,
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

const mapStateToProps = (state) => ({
    auth: state.auth,
    students: state.students,
});

export default connect(mapStateToProps)(Messages);

