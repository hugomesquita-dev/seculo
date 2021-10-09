import React from 'react';
import { View, 
        Text, 
        TouchableOpacity, 
        Dimensions, 
        ScrollView,
        StyleSheet, 
        Image } from 'react-native';
import { connect } from 'react-redux';
import Header from '../../../components/ui/header'
import HeaderAuthenticated from '../../../components/ui/header-authenticated';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();

let { width, height } = Dimensions.get("window");
const detailsComunication = ({route, navigation}) => {

    const { titulo, conteudo } = route.params;
    return(
        <View style={{height: height}}>
            <ScrollView style={{ flex: 1, backgroundColor: '#F1F1F2', marginBottom:65}}>
                <View>
                    <Header navigation={navigation}/>
                    <HeaderAuthenticated />

                    <View style={styles.container}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.boxLeft}>
                                <Text style={styles.title}> {titulo} </Text>
                            </View>
                            <View style={styles.boxRight}> 
                                {/* <Text><Icon name="sharealt" size={30} color="#4F74B2" /></Text> */}
                            </View>
                        </View>
                        

                        <View style={{flex:1, flexDirection: 'column'}}>
                            <Text style={styles.content}>{conteudo}</Text>
                        </View>

                        <TouchableOpacity 
                            style={styles.buttonBack} 
                            onPress={() => navigation.goBack()}
                        >
                        <Text style={{color:'#FFFFFF', 
                                     justifyContent: 'center', 
                                     alignItems: 'center', 
                                     fontSize:14, 
                                     fontWeight: 'bold', 
                                     textAlign: 'center'}}>Voltar</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>


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
    title:{
        color:'#1A2541',
        fontWeight: 'bold',
        fontSize: 16,
       
    },
    shared:{
        fontSize:12
    },
    boxLeft:{
        flex:2, 
        height:50, 
        alignItems:'flex-start',
        justifyContent:'center',
        paddingLeft:10
    },
    boxRight:{
        flex:1,  
        height:50, 
        alignItems:'flex-end',
        justifyContent:'center',
        paddingRight:10
    },
    content:{
        fontSize:14,
        marginVertical:20,
        paddingHorizontal:10
    },
    container:{
        marginHorizontal:15,
        marginVertical:15,
        padding:10,
        borderWidth:1,
        borderColor:'#E8E8E8',
        backgroundColor:'#FFFFFF',
        borderRadius:10 
    },
    buttonBack: {
        backgroundColor: '#4F74B2',
        color:'#FFFFFF',
        borderRadius:10,
        paddingHorizontal: 10,
        paddingVertical:10
    }
});

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}
export default connect(mapStateToProps)(detailsComunication);