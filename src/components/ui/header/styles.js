import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {Platform} from 'react-native';

export const HeaderGradient = styled(LinearGradient)`
  padding: ${Platform.OS === 'ios' ? 40 : 0}px 40px
    ${Platform.OS === 'ios' ? 10 : 0}px 40px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Logo = styled.Image`
  width: 160px;
  height: 60px;
`;

export const Content = styled.View``;
