import React from 'react';
import { 
    View,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import Header from '../../components/ui/header';
import { WebView } from 'react-native-webview';
import { connect } from 'react-redux';

class Registration extends React.Component{
    renderLoadingView() {
        return (
          <ActivityIndicator size="large" color="#4674B7" />
        );
    }
    
    render(){
        cdUsuario = this.props.auth.user.USU_LOGIN;
        URL = 'https://seculomanaus.com.br/rematricula/';
    

        return(
            <ScrollView contentContainerStyle={{flex:1}}>
                <View style={{flex:1, backgroundColor: '#F1f1f2'}}>
                    <Header navigation={this.props.navigation} />
                    <View style={{flex:1}}>
                        <WebView 
                            source={{uri: URL}}
                            renderLoading={this.renderLoadingView}
                            startInLoadingState={true}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}



const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
  export default connect(mapStateToProps)(Registration);