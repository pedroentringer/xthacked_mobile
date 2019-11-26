import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

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

import {SvgUri} from 'react-native-svg';
import logomarca from '../../assets/logo-cor.svg';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [cod, setCod] = useState('');

  const handleLogin = async () => {
    try {
      const user = {
        name: 'Pedro',
      };
      dispatch({type: UserTypes.ADD, user});
      setCod('asd');
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
              <SvgUri width="100%" height="100%" xml={logomarca} />
              <Title>
                Titulo - {cod} - {user.name}
              </Title>
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
            <Description>XTHACKED</Description>
          </>
        </Content>
      </Container>
    </>
  );
};

export default Login;
