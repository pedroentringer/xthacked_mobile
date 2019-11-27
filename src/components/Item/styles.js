import styled from 'styled-components/native';

export const Container = styled.View`
  align-self: stretch;
  height: auto;
  background-color: #fafafa;
  margin: 8px 0px;
  border-radius: 10px;
  padding: 8px;
`;
export const BoxVideo = styled.TouchableOpacity`
  align-self: stretch;
  background-color: #ededed;
  height: 200px;
  border-radius: 10px;
`;

export const Main = styled.View`
  flex-direction: row;
  padding: 10px 0px;
`;

export const AvatarContent = styled.View`
  width: 60px;
  height: 60px;
  background-color: #333;
  border-radius: 30px;
`;

export const Avatar = styled.Image``;

export const Details = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: 8px;
`;

export const Title = styled.Text`
  color: #3b3b3b;
  font-size: 16px;
  font-weight: bold;
`;

export const User = styled.Text`
  color: #777777;
  font-size: 12px;
`;

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 8px;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-left: 8px;
`;
