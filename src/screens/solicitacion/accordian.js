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
            titulo: props.title,
            expanded: false,
            selectedDados: []
        }

        if(Platform.OS === 'android'){
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
 

    // onchecked = (id) => {
    //     const dados = this.state.valores;
    //     const index = dados.findIndex(x => x.id === id);
    //     dados[index].checked = !dados[index].checked;
    //     this.setState(dados);
    // }

    // getSelectedDados = () => {
    //     var keys = this.state.valores.map((t) => t.key)
    //     var checks = this.state.valores.map((t) => t.checked)
    //     let Selected = []
    //     for(let i=0; i<checks.length; i++){
    //         if(checks[i]==true){
    //             Selected.push(keys[i]);
    //         }
    //     }
    //     alert(Selected);
    // }



    render(){
        
        console.log("------------"+JSON.stringify(this.state.data))
        // console.log("++++++++++++"+this.state.titulo)
        return(
            <View style={styles.checkbox}>
               
                   <Text>{this.state.titulo}</Text>
                  

                

                {/* <TouchableOpacity style={[styles.row]} onPress={()=>this.toggleExpand()}>
                    <Text style={[styles.title]}><Icon name="bars" size={20}  color="#111"/> {this.props.title}</Text>
                </TouchableOpacity>
                 */}
                    
            </View>
            


        );
    }


    // onClick=(index)=>{
    //     const temp = this.state.data.slice()
    //     temp[index].value = !temp[index].value
    //     this.setState({data: temp})
    // }



    // toggleExpand=()=>{
    //     LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    //     this.setState({expanded : !this.state.expanded})
    // }


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