import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #000;
`;

export const Content = styled.View`
  flex: 1;
  padding: 40px;
  align-items: center;
  justify-content: space-between;
`;

export const Section = styled.View`
  align-self: stretch;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Logo = styled.View`
  align-items: center;
  justify-content: center;
  padding: 50px 0px 0px 0px;
`;

export const Title = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: 20px;
  color: #ffffff;
`;

export const Description = styled.Text`
  font-family: 'Montserrat-Regular';
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
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  align-self: stretch;
  padding: 20px;
  border-radius: 200px;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 12px;
  color: #3d77f8;
`;
