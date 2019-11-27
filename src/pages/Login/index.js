import React, {useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';

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
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const {data} = await api.get(`/users/?email=${email}`);
      const user = data[0];
      setLoading(false);
      dispatch({type: UserTypes.ADD, user});
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
          <Description>XTHACKED</Description>
        </Container>
      </Content>
    </>
  );
};

export default Login;
