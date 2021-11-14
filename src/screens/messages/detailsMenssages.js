import React from 'react';
import { View, 
         Text,
         TextInput,
         ScrollView,
         TouchableOpacity,
         StyleSheet
} from 'react-native';
import Header from '../../components/ui/header'
import HeaderAuthenticated from '../../components/ui/header-authenticated';
import Icon from 'react-native-vector-icons/AntDesign';
import {
responsiveHeight,
responsiveWidth,
responsiveFontSize
} from "react-native-responsive-dimensions";
Icon.loadFont();

const sendMensagem = () => {
    alert("Enviado");
}

const detailsMenssages = ({route, navigation}) => {
    const {titulo, observacao, flg_status, dt_entrega} = route.params;
    return(
        <ScrollView>
            <Header navigation={navigation} />
            <HeaderAuthenticated />
            <View style={styles.box}>
                <View style={{flex:2, flexDirection: 'row'}}>
                    <View style={{flex:2, paddingLeft: 5}}>
                        <Text style={styles.boxTitle}>{titulo}</Text>
                        <Text style={styles.contentDate}>{dt_entrega}</Text>
                    </View>
                    
                    <View style={{flex:0.9}}>
                        {flg_status == 'CONCLUIDO' && <Text style={[styles.btn, styles.btnGreen]}><Text style={[styles.btnText, styles.btnTextGreen]}>{flg_status}</Text> <Icon name="check" size={25}  style={styles.btnTextGreen}/></Text>}
                        {flg_status == 'FAZER' && <Text style={[styles.btn, styles.btnBlue]}><Text style={[styles.btnText, styles.btnTextBlue]}>{flg_status}</Text> <Icon name="exclamation" size={25}  style={styles.btnTextBlue}/></Text>}
                        {flg_status == 'REFAZER' && <Text style={[styles.btn, styles.btnRed]}><Text style={[styles.btnText, styles.btnTextRed]}>{flg_status}</Text> <Icon name="retweet" size={25}  style={styles.btnTextRed}/></Text>}
                    </View>
                </View>

                <View style={{width: '100%'}}>
                    <Text style={styles.boxContent}>{observacao}</Text>
                    {flg_status == 'REFAZER' && 
                    <View>
                        <Text style={{}}>FeedBack do Pai, Texto Texto Texto</Text>
                        <TextInput 
                        multiline={true}
                        numberOfLines={10}
                        style={styles.contentInput}/>
                

                        <View style={{marginTop: 20}}>
                            <TouchableOpacity 
                                onPress={() => sendMensagem()}
                                style={styles.button}>
                                <Text style={styles.buttonText}>Enviar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    }

                </View>

            </View> 



            <View style={{marginHorizontal:20}}>
                <TouchableOpacity 
                    style={styles.buttonBack} 
                    onPress={() => navigation.goBack()}
                >
                <Text style={styles.buttonBackText}>Voltar</Text>
                </TouchableOpacity>
            </View>
  
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    box: {
        borderWidth: 1,
        borderColor: '#E8E8E8',
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 20,
        margin: 20
    },
    boxTitle: {
        color: '#4674B7',
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2)
    },
    boxContent: { 
        // margin: 10,
        marginVertical:10,
        fontSize: responsiveFontSize(1.8),
        textTransform: 'uppercase',
        lineHeight:25,
        paddingBottom:20
    },
    contentDate:{
        color:'#6C6C6C',
        fontWeight: 'bold',
        fontSize: responsiveFontSize(1.5),
        marginVertical:10
    },
    contentTitle: {
        textAlign: 'center', 
        fontSize:32, 
        color:'#111', 
        fontWeight:'bold'
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
        fontSize: responsiveFontSize(1.2)
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
    contentInput: {
        height: 100,
        paddingVertical:10,
        paddingHorizontal:10,
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 10,
        textAlignVertical: 'top',
        fontSize: responsiveFontSize(1.8),
        marginVertical:10
    },
    button:{
        backgroundColor: '#4F74B2',
        color:'#FFFFFF',
        borderRadius:10,
        paddingHorizontal: 10,
        paddingVertical:10
    },
    buttonBack: {
        // backgroundColor: '#4F74B2',
        // borderColor:'#4F74B2',
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
    buttonBackText: {
        color:'#4F74B2', 
        justifyContent: 'center', 
        alignItems: 'center', 
        fontSize: responsiveFontSize(1.8), 
        fontWeight: 'bold', 
        textAlign: 'center',
    }
});

export default detailsMenssages;