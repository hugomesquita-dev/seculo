import React, { Component } from 'react';
import {
    View,
    Text, 
    ScrollView, 
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Platform,
    LayoutAnimation,
    UIManager
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();
import { connect } from 'react-redux';

export default class Accordian extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            data: props.data,
            expanded: false,
            valores: [
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
                    },
                    {
                        "id": 4,
                        "key": "Mudança de Endereço",
                        "checked": false
                    },
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

                ],
                selectedDados: []
        }


        if(Platform.OS === 'android'){
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
 

    onchecked = (id) => {
        const dados = this.state.valores;
        const index = dados.findIndex(x => x.id === id);
        dados[index].checked = !dados[index].checked;
        this.setState(dados);
    }

    getSelectedDados = () => {
        var keys = this.state.valores.map((t) => t.key)
        var checks = this.state.valores.map((t) => t.checked)
        let Selected = []
        for(let i=0; i<checks.length; i++){
            if(checks[i]==true){
                Selected.push(keys[i]);
            }
        }
        alert(Selected);
    }



    render(){
        console.log("------------"+this.props.data)
        return(
            <View style={styles.checkbox}>
                <TouchableOpacity style={[styles.row]} onPress={()=>this.toggleExpand()}>
                    <Text style={[styles.title]}><Icon name="bars" size={20}  color="#111"/> {this.props.title}</Text>
                </TouchableOpacity>
                <View>
                    {
                        this.state.expanded &&
                        <View style={[styles.checklist]}>
                            {/* <Text>{this.props.data}</Text> */}
                            {this.props.id == 1 && 
                            <View>
                                <View style={styles.checkitem}>
                                    <TouchableOpacity key="0" onPress={()=>{this.onchecked(0)}} style={styles.boxitem}>
                                    <CheckBox
                                        value={this.state.valores[0].checked} onValueChange={()=>{this.onchecked(0)}}
                                    />
                                    <Text style={styles.checktext}>Declaração</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.checkitem}>
                                    <TouchableOpacity key="1" onPress={() =>{this.onchecked(1)}} style={styles.boxitem}>
                                    <CheckBox 
                                        value={this.state.valores[1].checked} onValueChange={()=>{this.onchecked(1)}}
                                    />
                                    <Text style={styles.checktext}>Entrega de Documentação Pendente</Text>
                                    </TouchableOpacity>
                                </View>
                                
                                <View style={styles.checkitem}>
                                    <TouchableOpacity key="2" onPress={() =>{this.onchecked(2)}} style={styles.boxitem}>
                                    <CheckBox 
                                        value={this.state.valores[2].checked}  onValueChange={()=>{this.onchecked(2)}}
                                    />
                                    <Text style={styles.checktext}>Estrutura de Curso</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.checkitem}>
                                    <TouchableOpacity key="3" onPress={() =>{this.onchecked(3)}} style={styles.boxitem}>
                                    <CheckBox 
                                        value={this.state.valores[3].checked}  onValueChange={()=>{this.onchecked(3)}}
                                    />
                                    <Text style={styles.checktext}>Atestado Médico</Text>       
                                    </TouchableOpacity>                         
                                </View>
                                <View style={{flex:1, flexDirection: 'row'}}>
                                        {/* <Icon name="camerao" size={35} color="#4F74B2" style={{marginRight:20}}/> */}
                                        {/* <Icon name="paperclip" size={35} color="#4F74B2"/> */}
                                </View>                                 
                            </View>
                            }

                            {this.props.id == 2 && 
                            <View>
                                <View style={styles.checkitem}>
                                    <TouchableOpacity key="5">
                                    <CheckBox 
                                        title="Mudança de Endereço" 
                                        />
                                    <Text style={styles.checktext}>Mudança de Endereço</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.checkitem}>
                                    <TouchableOpacity key="6">
                                    <CheckBox 
                                        title="Mudança de Responsável"
                                    />
                                    <Text style={styles.checktext}>Mudança de Responsável</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.checkitem}>
                                    <TouchableOpacity key="7">
                                    <CheckBox 
                                        title="Correção de Notas e Faltas"
                                    />
                                    <Text style={styles.checktext}>Correção de Notas e Faltas</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            }


                            {this.props.id == 3 && 
                            <View>
                                 <View style={styles.checkitem}>
                                    <TouchableOpacity key="8">
                                    <CheckBox
                                        title="Prova de 2. Chamada"
                                    />
                                    <Text style={styles.checktext}>Prova de 2. Chamada</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.checkitem}>
                                    <TouchableOpacity key="9">
                                    <CheckBox 
                                        title="Troca de Modalidade Esportiva"
                                    />
                                    <Text style={styles.checktext}>Troca de Modalidade Esportiva</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.checkitem}>
                                    <TouchableOpacity key="10">
                                    <CheckBox 
                                        title="Revisão de Faltas"
                                    />
                                    <Text style={styles.checktext}>Revisão de Faltas</Text>
                                    </TouchableOpacity>
                                </View>  
                                <View style={styles.checkitem}>
                                    <TouchableOpacity key="11">
                                    <CheckBox 
                                        title="Revisão de Notas"
                                    />
                                    <Text style={styles.checktext}>Revisão de Notas</Text>
                                    </TouchableOpacity>
                                </View>  


                            </View>
                            }


                           

                        </View>
                    }
 

                </View>

                            {/* <View style={styles.content}>
                            <TouchableOpacity style={styles.button}
                                onPress={() => this.getSelectedDados()}>
                                <Text style={styles.btntext}>Enviar</Text>
                                </TouchableOpacity>
                            </View> */}
                   
                    
            </View>



        );
    }


    onClick=(index)=>{
        const temp = this.state.data.slice()
        temp[index].value = !temp[index].value
        this.setState({data: temp})
    }



    toggleExpand=()=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({expanded : !this.state.expanded})
    }


} 



const styles = StyleSheet.create({
    checktext: {
        fontSize: 16,
        marginLeft: 10,
        width:'80%'
    },
    checkitem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    boxitem: {
        flexDirection:"row", 
        alignItems:'center'
    },
    checkbox: {
        borderColor: '#E8E8E8',
        borderRadius: 25,
        borderWidth:1,
        backgroundColor: '#FFF',
        marginTop: 10
    },
    checklist: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        width:'100%',
        height:54,
        alignItems:'center',
        paddingLeft:35,
        paddingRight:35,
        fontSize: 12,
    },
    title:{
        fontSize: 16,
        fontWeight:'bold',
        color: '#111'
    },
    itemActive:{
        fontSize: 12,
        color: '#62C454'
    },
    itemInActive:{
        fontSize: 12,
        color: '#111'
    },
    btnActive:{
        borderColor: '#62C454',
    },
    btnInActive:{
        borderColor: '#111',
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        //backgroundColor: '#E6BD56',
        color: '#BE8800'
    },
    childRow:{
        flexDirection: 'row',
        justifyContent:'space-between',
        //backgroundColor: Colors.GRAY,
    },
    parentHr:{
        height:1,
        //color: Colors.WHITE,
        width:'100%'
    },
    childHr:{
        height:1,
        backgroundColor:'#111',
        width:'100%',
    },
    colorActive:{
       // borderColor: Colors.GREEN,
    },
    colorInActive:{
        //borderColor: Colors.DARKGRAY,
    }
    
});