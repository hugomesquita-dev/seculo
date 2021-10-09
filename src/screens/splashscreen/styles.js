import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
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
