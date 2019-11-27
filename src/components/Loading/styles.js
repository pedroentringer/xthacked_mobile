import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: rgba(40, 40, 40, 0.8);
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999999999999999999999999;
  width: 100%;
  height: 100%;
  elevation: 5;
`;

export const Card = styled.View`
  background-color: #fff;
  border-radius: 6px;
  elevation: 2;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export const Text = styled.Text`
  color: #3b3b3b;
  font-size: 15px;
  font-weight: bold;
`;
