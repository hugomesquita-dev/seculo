import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

import api from '../../config/api';

import Header from '../../components/ui/header';
import HeaderAuthenticated from '../../components/ui/header-authenticated';
import HeaderSelectUser from '../../components/ui/header-select-user';


class Messages extends React.Component {
    state = {
        loading: false
    }
    render(){
        return(
            <ScrollView>
                <View>
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
                        <View style={styles.box}>
                            <TouchableOpacity>
                                <Text style={styles.boxTitle}>Atividade N1 Geografia</Text>
                                <Text style={styles.boxContent}>Realizar a Atividade de Geografia</Text>
                            </TouchableOpacity>
                        </View>
                        


                    </View>



                </View>
            </ScrollView>
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
        marginBottom: 10,
        alignItems:'center'
    },
    boxTitle: {
        textAlign: 'center',
        color: '#4674B7',
        fontWeight: 'bold',
    },
    boxContent: {
        textAlign: 'justify', 
        marginVertical: 10
    }
});

const mapStateToProps = (state) => ({
    auth: state.auth,
    students: state.students,
});

export default connect(mapStateToProps)(Messages);

