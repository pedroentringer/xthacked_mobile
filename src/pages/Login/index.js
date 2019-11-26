import React, {useState} from 'react';
import {StatusBar, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {Types as UserTypes} from '../../store/user/actions';
import api from '../../services/api';

import {
  Container,
  Content,
  Section,
  LogoContent,
  Logo,
  Description,
  InputArea,
  Input,
  Button,
  ButtonText,
} from './styles';

import Loading from '../../components/Loading';
import logomarca from '../../assets/logomarca-branca.png';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      console.tron.log('buscando user /users?email=${email}');
      const {data} = await api.get(`/users?email=${email}`);
      dispatch({type: UserTypes.ADD, data});
    } catch (err) {
      setLoading(false);
      Alert.alert(
        'Erro ao Entrar',
        'Algo deu errado ao fazer o login, tente novamente.',
        [{text: 'Entendi'}],
        {cancelable: false},
      );
    }
  };

  return (
    <>
      {loading && <Loading />}
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <Content colors={['#24a8df', '#02528e']}>
        <Container>
          <LogoContent>
            <Logo source={logomarca} />
          </LogoContent>
          <Section>
            <InputArea>
              <Input
                placeholder="E-mail"
                placeholderTextColor="#ffffff"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                onSubmitEditing={handleLogin}
              />
            </InputArea>
            <Button onPress={handleLogin}>
              <ButtonText>Entrar</ButtonText>
            </Button>
          </Section>
          <Description>XTHACKED - {user.name}</Description>
        </Container>
      </Content>
    </>
  );
};

export default Login;
