import React, {Component} from 'react';
import {ActivityIndicator, StatusBar, ScrollView, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
import Loading from '../../../components/core/loading';

import {login} from '../../../redux/authentication/actions';
import {getStudents} from '../../../redux/students/actions';

import api from '../../../config/api';

import LogoImage from '../../../assets/images/logo.png';

import {
  Container,
  Content,
  LogoContent,
  Logo,
  TextLogo,
  Form,
  FormGroup,
  FormControl,
  FormGroupInput,
  FormInput,
  FormInputText,
  AccountActions,
  AccountActionsText,
  HelperContent,
} from './styles';

class SigninPage extends Component {

  state = {
    user: '',
    password: '',
  };

  userActionLogin = async () => {

    this.setState({showTheThing: true})
    await this.props.dispatch(login(this.state));

   // await this.props.dispatch(getStudents());

    this.setState({showTheThing: false})
  };

  render() {

    return (
      <ScrollView
        contentContainerStyle={{
          flex: 1,
        }}>
        <StatusBar backgroundColor="#011349" barStyle="light-content" />
        <Container
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          colors={['#002DA3', '#011349']}>
          <Content>
            <LogoContent>
              <Logo source={LogoImage} resizeMode="contain" />
              <TextLogo>BEM-VINDO À ESCOLA DO FUTURO</TextLogo>
            </LogoContent>

            { this.state.showTheThing && <ActivityIndicator size="large" color="#ffffff" /> }

          
            <Form>
              <FormGroup>
                <FormControl
                  value={this.state.user}
                  onChangeText={(user) => this.setState({user})}
                  placeholder="Digite a sua matrícula ou CPF"
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  secureTextEntry={true}
                  value={this.state.password}
                  onChangeText={(password) => this.setState({password})}
                  placeholder="Digite a sua senha"
                />
              </FormGroup>
              <FormGroupInput>
                <FormInput onPress={this.userActionLogin}>
                  <FormInputText>ENTRAR</FormInputText>
                </FormInput>
              </FormGroupInput>
              <FormGroupInput>
              </FormGroupInput>
            </Form>
          </Content>
          <HelperContent>
            <FormGroupInput>
              <AccountActions>
                <AccountActionsText>PRECISA DE AJUDA?</AccountActionsText>
              </AccountActions>
            </FormGroupInput>
          </HelperContent>
          <Image
            style={{
              width: '100%',
            }}
            source={require('../../../assets/images/bar.png')}
            resizeMode="contain"
          />
        </Container>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    students: state.students,
  };
};

export default connect(mapStateToProps)(SigninPage);
