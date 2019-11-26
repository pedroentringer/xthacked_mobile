import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
`;

export const Content = styled(LinearGradient)`
  flex: 1;
`;

export const Section = styled.View`
  align-self: stretch;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 100px 0;
`;

export const LogoContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.Image`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #ffffff;
`;

export const Description = styled.Text`
  font-size: 12px;
  color: #ffffff;
`;

export const InputArea = styled.KeyboardAvoidingView`
  align-self: stretch;
  justify-content: center;
  border-radius: 200px;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.29);
`;

export const Input = styled.TextInput`
  color: #ffffff;
  text-align: center;
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  align-self: stretch;
  padding: 16px;
  border-radius: 200px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  border: 1px solid #ffffff;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #ffffff;
`;
