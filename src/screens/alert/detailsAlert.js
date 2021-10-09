import React, { useState, useEffect } from 'react';
import { View, 
        Text, 
        TouchableOpacity, 
        Dimensions, 
        ScrollView,
        StyleSheet, 
        Image } from 'react-native';
import { connect } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import Header from '../../components/ui/header'
import HeaderAuthenticated from '../../components/ui/header-authenticated';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();


const detailsAlert = ({route, navigation}) => {
    //const [isSelected, setSelection] = useState(false);
    

    const {titulo, alunos} = route.params;

    const allAlunos = alunos;
    //const [Dados, setDados] = useState([{},{},{}]);
  
    let initialState = []

    for(let i=0; i<alunos.length; i++){
        initialState.push({
            id: i,
            nome: alunos[i],
            checked: false        
        });
    }
    const [Dados, setDados] = useState(initialState);

    useEffect(() => {
        if(allAlunos.length > 0) {
            //const initialState = allAlunos.map((obj, key) => ok.push({id: key, value: obj[key], checked: false}));
            //const initialState1 = allAlunos.map((obj,i) => initialState.push({value: alunos[i], id: i}));
            
            //console.log(JSON.stringify(Dados[1].nome));
            
            
            // for(let i=0; i<alunos.length; i++){
            //     initialState.push({
            //         id: i,
            //         nome: alunos[i],
            //         checked: false        
            //     });
            // }
           
            // setDados(initialState)
        }
    }, [allAlunos])

    //console.log("oooo"+JSON.stringify(Dados[0].nome));

    
    //JSON.stringify(Dados)
    //console.log("result1: "+JSON.stringify(Dados));
    //console.log("------"+Dados[1].nome);

    
    // let AlunosList = [];    
    // for(let i=0; i<alunos.length; i++){
    //     //console.log(alunos[i]);
    //     AlunosList.push({
    //         id: i,
    //         value: alunos[i],
    //         checked: false        
    //     });


    //     // console.log("okoko"+AlunosList[i].value);
    // }


    // useEffect(() => {
    //     setDados(Dados => [...Dados, AlunosList])
    // }, [AlunosList])


    // renderDados = () => {
    //     setDados([...Dados, AlunosList])
    // }



    renderCheckboxes = () => {
    
        return Dados.map((item, key) =>{
            return(
                <TouchableOpacity 
                onPress={() => {this.onchecked(key)}}
                key={key}>
                    {item.checked == true
                    ? (<CheckBox />)
                    : (<CheckBox disabled={false}/>)}
                    <Text>{item.nome}</Text>
                </TouchableOpacity>
            )
        })
    }

    onchecked = (key) => {
        //let Alunos = AlunosList
        let index = Dados.findIndex(x=>x.id===key)
        Dados[index].checked = !Dados[index].checked
        //alert(Alunos[0].value);
        //alert(Dados[index].checked);
        setDados(Dados);
        // this.setState({Data:Alunos})
        //alert(Dados);
    }
    
    getSelectedDados = () => {
        //let Alunos = this.state.Data
        var keys = Dados.map((t) => t.id)
        var checks = Dados.map((t) => t.checked)
        let Selected = []
        for(let i=0; i<checks.length; i++){
            if(checks[i]==true){
                Selected.push(Dados[keys[i]].nome);
            }
        }
        alert(Selected);
        //alert(Alunos[0].value);
    }
   

    return(
        <View>
            <ScrollView>
                <View>
                    <Header navigation={navigation} />
                    <HeaderAuthenticated />
                    <View style={styles.boxHeader}>
                        <Text style={styles.boxHeaderTitle}>{titulo}</Text>
                        {this.renderCheckboxes()}
                        
                        {/* {alunos.map((aluno) =>  */}
                         {/* <View style={styles.checkitem}> */}
                            {/* <TouchableOpacity
                                 style={styles.boxitem}> */}
                            {/* <CheckBox 
                                value={aluno} 
                                onValueChange={()=>{this.onchecked(key)}}
                                // disabled={false}
                                //boxType={'square'}
                                // hideBox={true}
                                // tintColors={'#9E663C'}
                                 // onCheckColor={'#6F763F'}
                                // onFillColor={'#4DABEC'}
                                // onTintColor={'#F4DCF8'}
                                // animationDuration={0.5}
                                // disabled={false}
                                // onAnimationType={'bounce'}
                                // offAnimationType={'stroke'}
                            /> */}
                            {/* <Text style={styles.checktext}>{aluno}</Text> */}
                            {/* </TouchableOpacity> */}
                        {/* </View> */}
                        {/* )} */}
                        
{/* 
                        <View style={styles.content}>
                        <TouchableOpacity style={styles.button}
                            onPress={() => this.getSelectedDados()}>
                        <Text style={styles.btntext}>Enviar</Text>
                        </TouchableOpacity>
                        </View> */}
                            
                        {/* <Text>{props.state.students.student.RA}</Text> */}
                    </View>
                    <TouchableOpacity
            onPress={() => this.getSelectedDados()}>
            <Text>Enviar</Text>
            </TouchableOpacity>


                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
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
      marginBottom:15

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
    },
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
    content: {
        marginTop:20,
        width: '100%'
        
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


const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        students: state.students,
    }
}
export default connect(mapStateToProps)(detailsAlert);

