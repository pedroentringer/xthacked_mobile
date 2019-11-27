import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-self: stretch;
  background-color: #ffffff;
  padding: 16px;
`;

export const Content = styled.ScrollView`
  flex: 1;
  align-self: stretch;
  margin-top: 20px;
`;

export const Image = styled.Image``;

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

export const Text = styled.Text`
  color: #777777;
  font-size: 14px;
`;

export const Section = styled.View`
  padding: 10px 0px;
  flex: 1;
`;

export const Tags = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5px;
`;

export const Tag = styled.Text`
  padding: 8px 10px;
  border-radius: 6px;
  background-color: #ededed;
  margin: 5px;
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

export const Bars = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const Bar = styled.View`
  height: 5px;
  border-radius: 5px;
  background-color: #24d540;
`;

export const Comment = styled.Text`
  color: #777777;
  font-size: 14px;
  margin-top: 10px;
  text-align: justify;
`;

export const SectionComment = styled.View`
  padding: 10px;
  background-color: #f7f7f7;
  border-radius: 8px;
  margin: 5px 0px 5px 0px;
`;

export const InputArea = styled.KeyboardAvoidingView`
  align-self: stretch;
  border-radius: 10px;
  background-color: #fafafa;
  border: 1px solid #cdcdcd;
  margin-top: 10px;
`;

export const Input = styled.TextInput`
  color: #777777;
`;

export const ButtonComment = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  justify-content: center;
  align-items: center;
  background-color: #1480b9;
  border-radius: 6px;
  padding: 15px 0px;
  margin-top: 10px;
`;

export const ButtonCommentText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;
