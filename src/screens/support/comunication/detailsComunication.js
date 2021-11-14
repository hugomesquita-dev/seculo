import React, { useEffect, useState, useRef } from 'react';
import { View, 
        Text, 
        TouchableOpacity, 
        Dimensions, 
        KeyboardAvoidingView,
        TouchableWithoutFeedback,
        Keyboard,
        ActivityIndicator,
        ScrollView,
        StyleSheet, 
        Image,
        TextInput,
        Linking
     } from 'react-native';
import { connect } from 'react-redux';
import Header from '../../../components/ui/header'
import HeaderSelectUser from '../../../components/ui/header-select-user';
import HeaderAuthenticated from '../../../components/ui/header-authenticated';
import api from '../../../config/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
    } from "react-native-responsive-dimensions";
// import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();

let { width, height } = Dimensions.get("window");
let extImage = ['png','jpg','jpeg','gif'];
let extArquivo = ['pdf','doc','docx','xls'];
let user, student;

const init = async function (a, b) {
    user = JSON.parse(await AsyncStorage.getItem('@seculo/user'));
    student = JSON.parse(await AsyncStorage.getItem('@seculo/student'));
}
init();

const detailsComunication = ({route, navigation}) => {

    const { titulo, conteudo, anexo, tipo_notificacao, flg_acao_atividade, id_notificacao } = route.params;
    const [conversa, setConversa] = useState([]);
    const [input_msg, setInput_MSG] = useState();    
    const [loading, setLoading] = useState(true);
    const inputRef = useRef(null);
    
    // alert(mensagem);
    
    // const customShare = async () =>{
    //     const shareOptions = {
    //         message: 'Texto',
    //         url: 'https://seculomanaus.com.br/componentes/portal/arquivos/banner-seculo.png'
    //     }
    
    //     try{
    //         const shareResponse =  await Share.open(shareOptions);
    //     }catch(error){
    //         console.log("Error"+error);
    //     }
    // }

    


    useEffect(() => {
        api
        .post('notificacao/lstNotificacaoMensagem/', {
            p_id_notificacao: id_notificacao
        }).then((res) => {
            setLoading(false);
            setConversa(res.data);
        })

       
    },[loading]) 


    //inserir na tabela app_notificacao_chat
    const sendNotificacaoConversa = (id_notificacao) => {
        
       
        //para fazer o insert na tabela chat dando referência ao id da notificação
        setLoading(true);
        if(input_msg){
            // alert('ID NOTIFICAÇÃO: '+id_notificacao);
            // alert('CPF: '+user.USU_LOGIN);
            // alert('RA: '+student.RA); //capturar o RA via storage
            // alert('CONVERSA: '+input_msg);
            
            api
            .post('notificacao/sendNotificacaoConversa/', {
                p_id_notificacao: id_notificacao,
                p_cd_usuario_origem: user.USU_LOGIN,
                p_cd_usuario_aluno: student.RA,
                p_cd_usuario_destino: "00000000004",
                p_mensagem: input_msg 
            }).then((res) => {
                setLoading(false);
                alert(res.data[0].mensagem);
                //setConversa(res.data);    
            })

        }else{
            alert('Por favor, Digite sua Dúvida');
            inputRef.current.focus();
        }
    }

    //insere na tabela  app_notificacao_evento
    const sendNotificacaoEvento = (resposta, id_notificacao) => {
        alert(resposta);
        alert(id_notificacao)
        // api
        //   .post('notificacao/confNotificacao/', {
        //     p_cd_usuario: user.USU_LOGIN,
        //     p_id_notificacao: id,
        //     p_status_confirmacao: resposta,
        //   })
        //   .then((res) => {
    
        //       alert("Resposta ao comunicado enviada.");
            
        //   })
        //   .catch((err) => {
        //   });
    }
    
    // const SeculoReply = () => {
    //     return(
    //         <View style={styles.boxChatLeft}>
    //             <View style={styles.boxChatConversa}>
    //                 <Text style={styles.boxChatConversaText}>Coordenação</Text>
    //                 <Text>Olá, gostaria de uma informação...</Text>
    //             </View>
    //         </View>
    //     );
    // }

    return(
        <View style={{height: height}}>
                {/* <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: '#F1F1F2', marginBottom:65}}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
            <ScrollView style={{ flex: 1, backgroundColor: '#F1F1F2'}}>
                <View>
                    <Header navigation={navigation}/>
                    <HeaderAuthenticated />
                    <View style={{paddingHorizontal: 10, marginTop: 20}}>
                        <HeaderSelectUser />
                    </View>

                    <View style={styles.container}>
                        {/* se existir anexo */}
                        
                        {anexo && tipo_notificacao == 'COMUNICADO' &&
                        <View style={{flex:1, flexDirection: 'column'}}>
                            <Text style={[styles.title, styles.boxLeft]}>{titulo}</Text>
                            <Text style={styles.content}>{conteudo}</Text>
                            {/* <Text>{extImage[0]}</Text> */}

                            {/* se existir anexo do tipo imagem */}
                            {extImage.indexOf(anexo.split(".")[1]) > -1 && 
                            <Image 
                                source={{uri: 'https://seculomanaus.com.br/componentes/portal/arquivos/'+anexo}}
                                style={{width: '100%', height: 400, flex:1}} 
                                resizeMode={'cover'}
                            />
                            }

                            
                            {/* se existir anexo do tipo arquivo */}
                            {(extArquivo.indexOf(anexo.split(".")[1]) > -1) && 
                            <View>
                                
                            <TouchableOpacity 
                                style={styles.button} 
                                onPress={() => {Linking.openURL('https://seculomanaus.com.br/componentes/portal/arquivos/'+anexo);}}>
                                <Text style={styles.buttonText}> Baixar</Text>
                            </TouchableOpacity>
                            </View>
                            }              
                        </View>}


                        {anexo == null && (tipo_notificacao == 'COMUNICADO' || tipo_notificacao == null) &&
                        <View style={{flex:1, flexDirection: 'column'}}>
                            <Text style={[styles.title, styles.boxLeft]}>{titulo}</Text>
                            <Text style={styles.content}>{conteudo}</Text>
                           
                        </View>}

                        
                        {/* se existir notificação do tipo atividade */}
                        {tipo_notificacao == 'ATIVIDADE' && 
                            <View>
                                <Text style={[styles.title, styles.boxLeft]}>{titulo}</Text>
                                {flg_acao_atividade == 'CONCLUIDO' &&  <Text style={[styles.btn, styles.btnGreen]}><Text style={[styles.btnText, styles.btnTextGreen]}>{flg_acao_atividade}</Text> <Icon name="check" size={25}  style={styles.btnTextGreen}/></Text>}
                                {flg_acao_atividade == 'FAZER' && <Text style={[styles.btn, styles.btnBlue]}><Text style={[styles.btnText, styles.btnTextBlue]}>{flg_acao_atividade}</Text> <Icon name="exclamation" size={25}  style={styles.btnTextBlue}/></Text>}
                                {flg_acao_atividade == 'REFAZER' && <Text style={[styles.btn, styles.btnRed]}><Text style={[styles.btnText, styles.btnTextRed]}>{flg_acao_atividade}</Text> <Icon name="retweet" size={25}  style={styles.btnTextRed}/></Text>}
                                <Text style={styles.content}>{conteudo}</Text>        
                                <View style={styles.line}></View>
                                {loading && <ActivityIndicator size="large" color="#4674B7" />}
                                {conversa.length == 0 && <Text style={{color:'#5b5b5b',fontSize: responsiveFontSize(2), marginTop: 5, marginBottom:2, textAlign:'center', fontWeight: 'bold'}}>Inicie uma Conversa com a Coordenação</Text>}

                                {conversa.map(item => 
                                    <View style={item.FEED_BACK_SETOR == 'N' ? styles.boxChatLeft : styles.boxChatRight}>
                                        <View style={styles.boxChatConversa}>
                                            <Text style={styles.boxChatConversaTitle}>
                                            {item.FEED_BACK_SETOR == 'N' ? <Icon name="user" size={20} /> : <Icon name="customerservice" size={20}/>}  
                                                <Text style={{marginLeft:30}}>{item.SETOR}</Text>
                                                
                                            </Text>
                                            <Text style={styles.boxChatConversaText}>{item.MENSAGEM}</Text>
                                            <Text style={styles.contentDate}>{item.DATAHORA}</Text>
                                        </View>
                                    </View>)}
                                
                                   


                                
                                <TextInput 
                                    multiline={true}
                                    numberOfLines={10}
                                    style={styles.contentInput}
                                    placeholder="Digite sua Dúvida"
                                    value={input_msg}
                                    onChangeText={(texto)=>setInput_MSG(texto)}
                                    ref={inputRef}
                                    />
                            
                                <TouchableOpacity style={styles.button}
                                onPress={() => sendNotificacaoConversa(id_notificacao)}>
                                    <Text style={styles.buttonText}> Enviar</Text>
                                </TouchableOpacity>
                                
                            </View>
                        }



                        {/* se existir notificação do tipo evento */}
                        {tipo_notificacao == 'EVENTO' && 
                        
                            <View>
                                <Text style={[styles.title, styles.boxLeft]}>{titulo}</Text>
                                <Text style={styles.content}>{conteudo}</Text>
                                {/* se existir anexo do tipo imagem */}
                                {anexo && extImage.indexOf(anexo.split(".")[1]) > -1 && 
                                <Image 
                                    source={{uri: 'https://seculomanaus.com.br/componentes/portal/arquivos/'+anexo}}
                                    style={{width: width, height: height, flex:1}} 
                                />
                                }

                                {/* se existir anexo do tipo arquivo */}
                                {anexo && extArquivo.indexOf(anexo.split(".")[1]) > -1 && 
                                <TouchableOpacity style={{backgroundColor:'blue'}}>
                                    <Text style={{color:'#FFF', textAlign:'center'}}> Baixar</Text>
                                </TouchableOpacity>
                                }                               
                               
                               
                                {/* <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    backgroundColor: '#e1e1e1',
                                    width: '50%',
                                    justifyContent: 'center',
                                    paddingVertical: 10,
                                    borderRadius: 10,
                                    borderWidth: 1,
                                    borderColor: '#ccc',
                                }}>
                                    <TouchableOpacity onPress={() => responderNotificacao("S", 2)}>
                                        <Text>SIM</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => responderNotificacao("N", 2)}
                                        style={{
                                        marginLeft: 10,
                                        borderLeftWidth: 1,
                                        paddingLeft: 10,
                                        }}>
                                        <Text>NÃO</Text>
                                    </TouchableOpacity>

                                </View> */}

                                <View style={styles.content}>
                                    <View style={styles.boxBtnGreen}>
                                        <TouchableOpacity
                                            onPress={() => sendNotificacaoEvento('S',id_notificacao)}>
                                            <Text style={[styles.btntext, styles.btnTextGreen]}>SIM</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.boxBtnRed}>
                                        <TouchableOpacity 
                                            onPress={() => sendNotificacaoEvento('N',id_notificacao)}>
                                            <Text style={[styles.btntext, styles.btntextRed]}>NÃO</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>



                            </View>
                        }
                        




                        

                    </View>

                    <TouchableOpacity 
                            style={styles.buttonBack} 
                            onPress={() => navigation.goBack()}
                        >
                        <Text style={{color:'#4F74B2', 
                                     justifyContent: 'center', 
                                     alignItems: 'center', 
                                     fontSize:14, 
                                     fontWeight: 'bold', 
                                     textAlign: 'center'}}>Voltar</Text>
                        </TouchableOpacity> 
                </View>
            </ScrollView>
            {/* </TouchableWithoutFeedback>
            </KeyboardAvoidingView> */}

            {/* 
            <View>
                <Image
                style={{
                    width: '100%',
                    position: "absolute",
                    top: -70
                }}
                source={require('../../../assets/images/bar.png')}
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
                        navigation.navigate('Dashboard')
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
                        navigation.navigate('Dashboard')
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
                        navigation.navigate('Dashboard')
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


const styles = StyleSheet.create({
    boxChatRight:{
        flexDirection: 'row-reverse', 
        marginTop: 10
    },
    boxChatLeft:{
        flexDirection: 'row', 
        marginTop: 10 
    },
    boxChat:{
        flexDirection: 'row', 
        marginTop: 10 
    },
    boxChatConversa:{
        borderColor: '#E8E8E8',
        borderWidth: 1,
        padding: 20,
        borderRadius: 10,
    },
    boxChatConversaTitle: {
        color: '#4674B7', 
        fontWeight: 'bold', 
        marginBottom: 3
    },
    boxChatConversaText:{
        color: '#111111', 
        fontSize: responsiveFontSize(2),
    },
    title:{ 
        color: '#4674B7',
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2),
    },
    shared:{
        fontSize:12
    },
    boxLeft:{
        flex:2, 
        height:50, 
        alignItems:'flex-start',
        justifyContent:'center',
        paddingLeft:10,
        paddingTop: 10
    },
    boxRight:{
        flex:1,  
        height:50, 
        alignItems:'flex-end',
        justifyContent:'center',
        paddingRight:10
    },
    content:{
        fontSize:responsiveFontSize(2),
        margin:10,
        paddingHorizontal:20,
        flexDirection: "row",
        alignContent: "center",
        textAlign: "center",
        justifyContent: "center",
    },
    line:{
        width: '100%',
        height: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#eeeeee'
    },
    container:{
        marginHorizontal:20,
        marginVertical:15,
        padding:10,
        borderWidth:1,
        borderColor:'#E8E8E8',
        backgroundColor:'#FFFFFF',
        borderRadius:10 
    },
    buttonBack: {
        borderRadius:10,
        marginBottom:65,
        paddingVertical:20,
        marginHorizontal:20

    },
    btn:{
        textAlign: 'right'
    },
    btnGreen:{
        borderColor: '#2d9500',
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
        color:'#4F74B2',
        fontSize: responsiveFontSize(1.8)
    },
    btnTextGreen: {
        color:'#2d9500', 
        fontWeight: 'bold'
    },
    btnTextBlue: {
        color: '#4674B7',
        fontWeight: 'bold'
    },
    btnTextRed: {
        color: '#EA4335',
        fontWeight: 'bold'
    },
    contentInput: {
        height: 100,
        paddingVertical:10,
        paddingHorizontal:10,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 10,
        textAlignVertical: 'top',
        fontSize: responsiveFontSize(1.8),
        marginVertical:10
    },
    contentDate: {
        textAlign: 'right', 
        fontWeight: 'bold', 
        color:'#6C6C6C', 
        marginTop:10
    },
    button:{
        backgroundColor: '#4F74B2',
        color:'#FFFFFF',
        borderRadius:10,
        paddingHorizontal: 10,
        paddingVertical:10
    },
    buttonText: {
        color:'#FFF', 
        justifyContent: 'center', 
        alignItems: 'center', 
        fontSize:responsiveFontSize(1.8),
        fontWeight: 'bold', 
        textAlign: 'center',
    },
    boxBtnGreen: {
        backgroundColor: '#d0ffdc',
        borderWidth:1,
        borderColor:'#38761d',
        padding: 15,
        borderRadius:10,
        marginRight:15,
        width:'45%'
      },
      boxBtnRed: {
        backgroundColor: '#ffd0cc',
        borderWidth: 1,
        borderColor: '#EA4335',
        padding: 15,
        borderRadius:10,
        marginLeft:15,
        width:'45%'
      },
});

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}
export default connect(mapStateToProps)(detailsComunication);