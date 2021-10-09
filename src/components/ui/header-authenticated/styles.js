import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${(props) => props.color};
  padding: 12px 0;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
`;
