import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-self: stretch;
  align-items: center;
`;

export const Content = styled(LinearGradient)`
  flex: 1;
  align-self: stretch;
  align-items: center;

  justify-content: space-between;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  padding: 30px;
`;

export const Logo = styled.Image`
  align-items: center;
  justify-content: center;
`;

export const Main = styled.View`
  align-self: stretch;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Card = styled.View`
  align-self: stretch;
  background-color: #ffffff;
  border-radius: 6px;
  margin: 30px 0;
`;

export const CardContent = styled.View`
  padding: 16px;
`;

export const CardHeader = styled.View`
  align-self: stretch;
  background-color: #ededed;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding: 16px;
  flex-direction: row;
`;

export const CardHeaderContent = styled.View`
  padding: 12px;
`;

export const Picture = styled.View`
  width: 60px;
  height: 60px;
  background-color: #333;
  border-radius: 30px;
`;

export const Image = styled.Image``;

export const TextBold = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #3b3b3b;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #3b3b3b;
`;

export const Section = styled.View`
  padding: 12px 0px;
`;
