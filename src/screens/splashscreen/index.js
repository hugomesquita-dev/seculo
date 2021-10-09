import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

import {verification} from '../../redux/authentication/actions';
import {getStudents} from '../../redux/students/actions';

import LogoImage from '../../assets/images/logo.png';

import {Container, LogoContent, Logo, TextLogo} from './styles';

class Splashscreen extends Component {
  componentDidMount = async () => {
    // await this.props.dispatch(getStudents());
    await this.props.dispatch(verification());
  };

  render() {
    return (
      <Container
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
        colors={['#002DA3', '#011349']}>
        <LogoContent>
          <Logo source={LogoImage} resizeMode="contain" />
          <TextLogo>BEM-VINDO À ESCOLA DO FUTURO</TextLogo>
        </LogoContent>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Splashscreen);
