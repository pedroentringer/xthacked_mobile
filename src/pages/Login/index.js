import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {Types as UserTypes} from '../../store/user/actions';

import {
  Container,
  Content,
  Section,
  Logo,
  Description,
  InputArea,
  Input,
  Button,
  ButtonText,
} from './styles';

import logomarca from '../../assets/logomarca.png';

import Alert from '../../components/Alert';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [email, setEmail] = useState('');

  const handleLogin = async () => {
    try {
      const user = {
        name: 'Pedro',
      };
      dispatch({type: UserTypes.ADD, user});
      setEmail('asd');
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
      <Content colors={['#24a8df', '#02528e']}>
        <Container>
          <Logo source={logomarca} />
          <Section>
            <InputArea>
              <Input
                placeholder="E-mail"
                placeholderTextColor="#ffffff"
                keyboardType="email"
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
