import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
`;

export const Content = styled.View`
  margin: 0 40px;
`;

export const LogoContent = styled.View`
  align-items: center;
`;

export const Logo = styled.Image`
  width: 200px;
`;

export const TextLogo = styled.Text`
  color: #ffffff;
`;

export const Form = styled.View`
  padding: ${hp('5%')}px 0 ${hp('2.5%')}px 0;
`;

export const FormGroup = styled.View``;

export const FormControl = styled.TextInput`
  padding: ${hp('1.5%')}px ${hp('2.5%')}px;
  background-color: #ffffff;
  border-radius: 25px;
  margin-bottom: 25px;
`;

export const FormGroupInput = styled.View`
  padding: 10px 0;
  justify-content: center;
  align-items: center;
`;

export const FormInput = styled.TouchableOpacity`
  border: 2px solid #e2b94b;
  padding: 10px 30px;
  border-radius: 20px;
`;

export const FormInputText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const AccountActions = styled.TouchableOpacity`
  margin-top: ${hp('2.5%')}px;
`;

export const AccountActionsText = styled.Text`
  color: #fff;
`;

export const HelperContent = styled.View``;
