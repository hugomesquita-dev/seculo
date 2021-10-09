import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { connect  } from 'react-redux';
import api from '../../config/api';
import Header from '../../components/ui/header';
import HeaderAuthenticated from '../../components/ui/header-authenticated';
import HeaderSelectUser from '../../components/ui/header-select-user';
import Accordian from './accordian';
//import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();
let { width, height } = Dimensions.get("window");

class Solicitacion extends React.Component {

    sendSolicitacion = () => {
        this.props.parentCallback("olá");
        alert("Solicitação enviada!");
    }
    

    constructor(props){
        super(props);
        this.state = {
            menu :[
              { 
                id: 1,
                title: 'Documentos', 
              },
              { 
                id: 2,
                title: 'Correções e Alterações',
              },
              { 
                id: 3,
                title: 'Solicitações',
              }
            ]

        }


        // this.state = {
        //     isSelected: false
        // }
        // this.setToggleCheck = this.setToggleCheck.bind(this);
    }

    // setToggleCheck = () => {
    //     this.setState({isSelected: true})
    // }


    render(){
        return(
            <View style={{height: height}}>
                <ScrollView style={{ flex: 1, backgroundColor: '#F1F1F2' }}>
                    <View>
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
                            SOLICITAÇÕES
                            </Text>
                        </View>

                        <View style={{paddingHorizontal: 20, paddingBottom: 20}}>
                        <HeaderSelectUser />

                            
                            <View style={styles.container}>
                                { this.renderAccordians() }
                            </View>

                            <View style={styles.content}>
                            <TouchableOpacity style={styles.button}
                                onPress={() => this.sendSolicitacion()}>
                                <Text style={styles.btntext}>Enviar</Text>
                                </TouchableOpacity>
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
                </View> */}


                
            </View>
        );
    }


    renderAccordians=()=> {
        const items = [];
        for (item of this.state.menu) {
            items.push(
                <Accordian 
                    id    = {item.id}
                    title = {item.title}
                    data = {item.data}
                />
            );
        }
        return items;
    }
}



const styles = StyleSheet.create({
    content: {
       marginTop:20
    },
    container: {
        flex:1,
    },
    button:{
        backgroundColor: '#4F74B2',
        color:'#FFFFFF',
        borderRadius:10,
        paddingHorizontal: 10,
        paddingVertical:10,
    },
    btntext: {
        color:'#FFFFFF',
        justifyContent:'center', 
        alignItems: 'center', 
        fontSize: 14, 
        fontWeight: 'bold', 
        textAlign: 'center'
    }
});


const mapStateToProps = (state) => ({
    auth: state.auth,
    students: state.students,
});

export default connect(mapStateToProps)(Solicitacion);

