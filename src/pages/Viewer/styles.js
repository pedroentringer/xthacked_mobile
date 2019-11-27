import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-self: stretch;
  background-color: #ffffff;
`;

export const Content = styled.ScrollView`
  flex: 1;
  align-self: stretch;
`;

export const Video = styled.View`
  background-color: #ededed;
  align-self: stretch;
  height: 250px;
`;

export const Main = styled.View`
  padding: 16px;
`;

export const User = styled.View`
  flex-direction: row;
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
  margin-left: 16px;
`;

export const Title = styled.Text`
  color: #3b3b3b;
  font-size: 20px;
  font-weight: bold;
`;

export const UserName = styled.Text`
  color: #777777;
  font-size: 14px;
`;

export const Section = styled.View`
  padding: 10px 0px;
`;
