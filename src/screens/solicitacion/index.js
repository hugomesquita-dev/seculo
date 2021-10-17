import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Dimensions,
    Platform,
    LayoutAnimation,
    UIManager,
    ActivityIndicator,
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
import CheckBox from '@react-native-community/checkbox';
Icon.loadFont();
let { width, height } = Dimensions.get("window");

class Solicitacion extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            menu :[
              { 
                id: 1,
                title: 'Documentos',
                expanded: false,
                data: [
                    {
                        "id": 0,
                        "key": "Declaração",
                        "checked": false
                    },
                    {
                        "id": 1,
                        "key": "Entrega de Documentação Pendente",
                        "checked": false
                    },
                    {
                        "id": 2,
                        "key": "Estrutura de Curso",
                        "checked": false
                    },
                    {
                        "id": 3,
                        "key": "Atestado Médico",
                        "checked": false
                    }
                ]
              },
              { 
                id: 2,
                title: 'Correções e Alterações',
                expanded: false,
                data: [
                    {
                        "id": 5,
                        "key": "Mudança de Responsável",
                        "checked": false
                    },
                    {
                        "id": 6,
                        "key": "Correção de Notas e Faltas",
                        "checked": false
                    },
                ]
              },
              { 
                id: 3,
                title: 'Solicitações',
                expanded: false,
                data: [
                    {
                        "id": 7,
                        "key": "Prova de 2. Chamada",
                        "checked": false
                    },
                    {
                        "id": 8,
                        "key": "Troca de Modalidade Esportiva",
                        "checked": false
                    },
                    {
                        "id": 9,
                        "key": "Revisão de Faltas",
                        "checked": false
                    },
                    {
                        "id": 10,
                        "key": "Revisão de Notas",
                        "checked": false
                    }  
                ]
              }
            ]

        }

        if(Platform.OS === 'android'){
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }

        // this.state = {
        //     isSelected: false
        // }
        // this.setToggleCheck = this.setToggleCheck.bind(this);
    }

    toggleExpand=(key)=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const novoEstado = Object.assign({}, this.state);
        novoEstado.menu[key].expanded = !this.state.menu[key].expanded;
        this.setState(novoEstado)

        //if(this.state.menu[key].expanded){
            // this.setState({
            //     cars: [ ...this.state.cars, ...carArray ]
            //   })    
        
            // this.setState((state) => {
            //     //[...previousState.menu[0].expanded, 
            //     expanded:!this.state.menu[0].expanded
            
            // })
        //}
        

        // console.log("++++: "+this.state.menu[0].expanded);
        //this.setState({expanded : !this.state.expanded})
        //modificar o expanded


        //console.log(this.state.expanded);
    }
    // setToggleCheck = () => {
    //     this.setState({isSelected: true})
    // }

    onchecked = (z,id) => {
      
        //const dados = this.state.menu[z].data[k].key;
        const dados = this.state.menu[z].data;
        const index = dados.findIndex(x => x.id === id);
        dados[index].checked = !dados[index].checked;
        this.setState(dados);
        //alert(dados[k].id);
        //alert(k);
        //alert(index);
    }

    sendSolicitacion = () => {
        //this.props.parentCallback("olá");
        // alert("Solicitação enviada!");
        let Selected = []
        for(j=0; j < this.state.menu.length; j++){
            var keys = this.state.menu[j].data.map((t) => t.key)   
            var checks = this.state.menu[j].data.map((t) => t.checked)
              
            for(let i=0; i<checks.length; i++){
                if(checks[i]==true){
                    Selected.push(keys[i]);
                }
            }
        }

        //convertendo array para string
        let SelectedItem = Selected.toString();

        //criar api
        // alert(Selected);
        // alert(this.props.students.student.RA)
        // alert(this.props.auth.user.USU_LOGIN)
        this.setState({
            loading: true
        });
        api.post('/email/enviar_solicitacion/',{
            p_cd_usuario_aluno: this.props.students.student.RA,
            p_cd_usuario_resp: this.props.auth.user.USU_LOGIN,
            p_opcao: SelectedItem
        })
        .then((res) => {
            this.setState({
                loading: false
            })
            //alert(res.data[0].mensagem);
            //alert(res.data);
            alert(res.data[0].mensagem)


        })

    }

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

                            {this.state.loading && <ActivityIndicator size="large" color="#4674B7" />}
                            <View style={styles.container}>
                                <View style={styles.checkbox}>

                                {/* { this.renderAccordians() } */}
                                <TouchableOpacity 
                                    style={styles.row}
                                    onPress={() => this.toggleExpand(0)}>
                                    <Text style={styles.title}><Icon name="bars" size={30}  color="#111"/> {this.state.menu[0].title}</Text>
                                </TouchableOpacity>  
                                {this.state.menu[0].expanded &&  
                                    <View>
                                        {this.state.menu[0].data.map(item => 
                                        <TouchableOpacity key={item.id} 
                                            style={styles.boxitem}
                                            onPress={()=>{this.onchecked(0,item.id)}}>
                                            <CheckBox value={item.checked} 
                                                      disabled="false"
                                                      onValueChange={()=>{this.onchecked(0,item.id)}}
                                            />
                                            <Text style={styles.checktext}> {item.key}</Text>
                                        </TouchableOpacity>)}   
                                    </View>
                                }


                                <TouchableOpacity 
                                    style={styles.row}
                                    onPress={() => this.toggleExpand(1)}>
                                    <Text style={styles.title}><Icon name="bars" size={30}  color="#111"/>  {this.state.menu[1].title}</Text>
                                </TouchableOpacity>  
                                {this.state.menu[1].expanded &&  
                                    <View>
                                        {this.state.menu[1].data.map(item => 
                                        <TouchableOpacity key={item.id} 
                                        style={styles.boxitem}
                                        onPress={()=>{this.onchecked(1,item.id)}}>
                                            <CheckBox value={item.checked} 
                                                      disabled="false"
                                                      onValueChange={()=>{this.onchecked(1,item.id)}}
                                            />
                                            <Text style={styles.checktext}>{item.key}</Text>
                                        </TouchableOpacity>)}   
                                    </View>
                                }



                                <TouchableOpacity 
                                    style={styles.row}
                                    onPress={() => this.toggleExpand(2)}>
                                    <Text style={styles.title}><Icon name="bars" size={30}  color="#111"/> {this.state.menu[2].title}</Text>
                                </TouchableOpacity>  
                                {this.state.menu[2].expanded &&  
                                    <View>
                                        {this.state.menu[2].data.map(item => 
                                        <TouchableOpacity key={item.id} 
                                            style={styles.boxitem}
                                            onPress={()=>{this.onchecked(2,item.id)}}>
                                            <CheckBox value={item.checked} 
                                                      disabled="false"
                                                      onValueChange={()=>{this.onchecked(2,item.id)}}
                                            />
                                            <Text style={styles.checktext}>{item.key}</Text>
                                        </TouchableOpacity>)}   
                                    </View>
                                }
                                </View>
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


                

                
            </View>
        );
    }


    // renderAccordians=()=> {
    //     const items = [];
    //     for (item of this.state.menu) {
    //         items.push(
    //             <Accordian 
    //                 id    = {item.id}
    //                 title = {item.title}
    //                 data = {item.data}
    //             />

                
    //         );
    //     }
    //     return items;
    // }
}



const styles = StyleSheet.create({
    content: {
       marginTop:20
    },
    container: {
        flex:1,
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: '#fff',
        // backgroundColor: '#E6BD56',
        color: '#BE8800',
        borderRadius:20,
        marginVertical:10
    },
    checkbox: {
        // borderColor: '#E8E8E8',
        // borderRadius: 25,
        // borderWidth:1,
        marginTop: 10
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
    },
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: '#111',
        textTransform: 'uppercase'
    },
    boxitem: {
        flexDirection:"row", 
        alignItems:'center',
        paddingHorizontal:10,
        paddingVertical:10,
        // backgroundColor: '#FFF',
        // borderRadius:20
    },
    checktext: {
        fontSize: 16,
        marginLeft: 10,
        width:'80%',
        color: '#111'
    },
});


const mapStateToProps = (state) => ({
    auth: state.auth,
    students: state.students,
});

export default connect(mapStateToProps)(Solicitacion);

