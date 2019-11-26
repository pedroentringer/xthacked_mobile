import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {Types as UserTypes} from '../../store/user/actions';

import {Container, Content, Logo} from './styles';

import logomarca from '../../assets/logomarca.png';

const Info = ({navigation}) => {
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
      <Content colors={['#24a8df', '#02528e']}>
        <Container>
          <Logo source={logomarca} />
        </Container>
      </Content>
    </>
  );
};

export default Info;
