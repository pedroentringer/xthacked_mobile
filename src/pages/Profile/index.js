import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {Types as UserTypes} from '../../store/user/actions';

import {Container, Content, Logo} from './styles';

import logomarca from '../../assets/logomarca-branca-mini.png';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const handleLogout = async () => {
    dispatch({type: UserTypes.REMOVE});
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

export default Profile;
