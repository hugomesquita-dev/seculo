import React, {Component} from 'react';
import {Text, 
    View, 
    TouchableOpacity, 
    StyleSheet} from 'react-native';
import api from '../../config/api';
import CheckBox from '@react-native-community/checkbox';
import {connect} from 'react-redux';


class Alert extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            alertaStatus: "A",
            valorTitulo: "",
            //Values: ["Aluno Teste", "Teste da Silva"],
            Values: [],
            Data: []
        }
    }
    
    componentDidMount = () => {
        // let Values =  this.state.Values
        // let Alunos = []
        // for(let i=0; i<Values.length; i++){
        //     Alunos.push({
        //         id: i,
        //         value: Values[i],
        //         checked: false
        //     })
        // }

        // this.setState({
        //     Data:Alunos
        // })


        api
        .post('/matricula/lstAlerta/', {
            p_cpf_responsavel: this.props.auth.user.USU_LOGIN
        })
        .then((res) => {
            if(res.data.length == 0){
                this.setState({
                    alertaStatus: "I"
                });
            }else{
                
                //console.log(res.data.map((item) => item.NM_ALUNO));
                this.setState({
                    alertaStatus: res.data[0].STATUS,
                    valorTitulo: res.data[0].DESCRICAO,
                    Values: res.data.map((item) => item.NM_ALUNO)
                })


                // this.state.alunos = [
                //     {
                //         ...this.state.alunos[0],
                //         nome: 'Luizinho',
                //         checked: false
                //     },
                //     {
                //         ...this.state.alunos[1],
                //         nome: 'Zezinho',
                //         checked: false 
                //     }
                // ]

                // res.data.map((aluno, index) => {
                //     this.state.alunos = [
                //         {
                //             ...this.state.alunos[index],
                //             nome: aluno.NM_ALUNO,
                //             checked: false
                //         }
                //     ]                    


                //     //tempArr.push(this.state.alunos);
                //     //console.log("valor"+ index);
                //     //console.log("nome"+aluno.NM_ALUNO);
                // });

                //console.log("dados: "+this.state.alunos[0]);
                

                // res.data.map((aluno) => {
                //     this.state.alunos.push(aluno.NM_ALUNO);   
                // });
                // this.setState({
                //     temp: tempArr
                // });

                //console.log(this.state.temp[0][0].nome);

                //console.log(tempArr[0][0].nome);
            }
        });
    }

    renderCheckboxes(){
        return this.state.Data.map((item, key) => {
            return(
                <TouchableOpacity 
                onPress={() => {this.onchecked(key)}}
                key={key}>
                    {item.checked == true 
                    ? (<CheckBox/>)
                    : (<CheckBox disabled={false} />)}
                    <Text>{item.value}</Text>
                </TouchableOpacity>
            )
        })
    }

    onchecked(key) {
        let Alunos = this.state.Data
        let index = Alunos.findIndex(x=>x.id===key)
        Alunos[index].checked = !Alunos[index].checked
        this.setState({Data:Alunos})
    }

    getSelectedDados = () => {
        let Alunos = this.state.Data
        var keys = this.state.Data.map((t) => t.id)
        var checks = this.state.Data.map((t) => t.checked)
        let Selected = []
        for(let i=0; i<checks.length; i++){
            if(checks[i]==true){
                Selected.push(Alunos[keys[i]].value);
            }
        }
        alert(Selected);
        //alert(Alunos[0].value);
    }
    // componentDidUpdate = () => {
    //     api
    //     .post('/matricula/lstAlerta/', {
    //         p_cpf_responsavel: this.props.auth.user.USU_LOGIN
    //     })
    //     .then((res) => {
    //         if(res.data.length == 0){
    //             this.setState({
    //                 alertaStatus: "I"
    //             });
    //         }else{
    //             this.setState({
    //                 alertaStatus: res.data[0].STATUS,
    //                 valorTitulo: res.data[0].DESCRICAO
    //             })
    //         }
    //     });
    // }

    render(){
        return(
            <>
            {this.state.alertaStatus == 'A' && 
            <View style={styles.boxHeader}>
                {/* {this.renderCheckboxes()} */}
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('detailsAlert', {titulo: this.state.valorTitulo, alunos: this.state.Values})}>  
                <Text style={styles.boxHeaderTitle}>
                {this.state.valorTitulo}
                
                </Text>
                </TouchableOpacity> 
            </View>  
            }

            <TouchableOpacity
            onPress={() => this.getSelectedDados()}>
            <Text>Enviar</Text>
            </TouchableOpacity>
                            
            </>   
            
        );
    }
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
      fontWeight: 'bold'
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
    }
});

const mapStateToProps = (state) => ({
    auth: state.auth,
    students: state.students,
  });
  
export default connect(mapStateToProps)(Alert);
  