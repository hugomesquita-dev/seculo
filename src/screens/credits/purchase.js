import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native';

import { Container } from './styles';

import Header from '../../components/ui/header';
import HeaderAuthenticated from '../../components/ui/header-authenticated';
import Select from '../../components/core/select';
import Input from '../../components/core/input';
import InputNumber from '../../components/core/input-number';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WebView } from 'react-native-webview';

let user

const init = async function (a, b) {
  user = JSON.parse(await AsyncStorage.getItem('@seculo/user'));
}
init();

class PurchaseCredits extends React.Component {
  // state = {
  //   quantity: 0,
  //   price: 'R$0,00',
  // };

  // handleSumQuantity = () => {
  //   this.setState({
  //     quantity: this.state.quantity + 1,
  //   });
  // };

  // handleSubQuantity = () => {
  //   if (this.state.quantity >= 1) {
  //     this.setState({
  //       quantity: this.state.quantity - 1,
  //     });
  //   }
  // };

  // changePrice = (price) => {
  //   this.setState({price});
  // };


  renderLoadingView() {
    return (
      <ActivityIndicator size="large" color="#4674B7" />
    );
  }

  render() {

    const URL = "https://seculomanaus.com.br/componentes/portal/pagamento/inicio?Context=[CodSistema=S;CodUsuario=" + user.USU_LOGIN + ";]";
    return (

      <ScrollView
        contentContainerStyle={{
          flex: 1,
        }}>
        <View style={{ flex: 1, backgroundColor: '#F1F1F2' }}>
          <Header navigation={this.props.navigation} />
          <View style={{ flex: 1 }}>
            
            <WebView
              source={{ uri: URL }}
              renderLoading={this.renderLoadingView} startInLoadingState={true}
            />
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              zIndex: 100,
              width: '100%',
            }}>

          </View>
        </View>
      </ScrollView>

      // <Container>
      //   <Header navigation={this.props.navigation} />
      //   <HeaderAuthenticated />
      //   <View
      //     style={{
      //       marginVertical: 15,
      //     }}>
      //     <Text
      //       style={{
      //         textAlign: 'center',
      //         color: '#4674b7',
      //         fontWeight: 'bold',
      //         fontSize: 16,
      //       }}>
      //       COMPRAR CRÉDITO
      //     </Text>
      //   </View>
      //   <View
      //     style={{
      //       marginHorizontal: 40,
      //     }}>
      //     <View style={{marginBottom: 20}}>
      //       <InputNumber
      //         placeholder="Selecione a quantidade"
      //         quantity={this.state.quantity}
      //         handleSumQuantity={this.handleSumQuantity}
      //         handleSubQuantity={this.handleSubQuantity}
      //       />

      //       <Input
      //         placeholder="Digite o valor"
      //         changePrice={this.changePrice}
      //         price={this.state.price}
      //       />
      //     </View>
      //     <View
      //       style={{
      //         backgroundColor: '#4674b7',
      //         borderRadius: 10,
      //         marginBottom: 5,
      //       }}>

      //     </View>
      //     <View style={{backgroundColor: '#4674b7', borderRadius: 10}}>
      //       <TouchableOpacity
      //         style={{
      //           paddingVertical: 15,
      //         }}
      //         onPress={() =>
      //           this.props.navigation.navigate('PaymentCredits', {
      //             quantity: this.state.quantity,
      //           })
      //         }>
      //         <Text style={{textAlign: 'center', color: '#fff'}}>
      //           EFETUAR PAGAMENTO
      //         </Text>
      //       </TouchableOpacity>
      //     </View>
      //   </View>
      // </Container>
    );
  }
}

export default PurchaseCredits;
