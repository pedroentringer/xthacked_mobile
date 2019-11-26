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

import logomarca from '../../assets/logomarca.png';

import BackGroundC from '../../components/BackGroundC';

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
      <BackGroundC />
      <Container>
        <Content colors={['#24a8df', '#02528e']}>
          <Logo source={logomarca} />
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
        </Content>
      </Container>
    </>
  );
};

export default Login;
