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
`;

export const Card = styled.View`
  background-color: #fff;
  padding: 10px;
  border-radius: 6px;
  elevation: 2;
  padding: 5px;
  justify-content: center;
  align-items: center;
`;
