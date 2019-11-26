import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import api from '../../services/api';

import {Types as UserTypes} from '../../store/user/actions';

import {
  Container,
  Content,
  Section,
  Logo,
  Title,
  Description,
  InputArea,
  Input,
  Button,
  ButtonText,
} from './styles';

const dispatch = useDispatch();
const user = useSelector(state => state.user);

const Login = ({navigation}) => {
  const [cod, setCod] = useState('');

  const handleLogin = async () => {
    try {
      const response = await api.get(`login/${cod}`);
      const {dados} = response.data;
      dispatch({type: UserTypes.ADD(), payload: dados});
    } catch (err) {
      console.tron.log(err.message);
    }
  };

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <Container>
        <Content>
          <>
            <Logo>
              <Title>iConex Entrega</Title>
              <Description>Acesse sua conta</Description>
            </Logo>
            <Section>
              <InputArea>
                <Input
                  placeholder="Código de Acesso"
                  placeholderTextColor="#ffffff"
                  keyboardType="number-pad"
                  value={cod}
                  onChangeText={setCod}
                  onSubmitEditing={handleLogin}
                />
              </InputArea>
              <Button onPress={handleLogin}>
                <ButtonText>Entrar</ButtonText>
              </Button>
            </Section>
            <Description>www.iconexlog.com.br</Description>
          </>
        </Content>
      </Container>
    </>
  );
};

export default Login;
