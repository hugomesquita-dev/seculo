import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

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
