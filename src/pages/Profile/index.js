import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {Types as UserTypes} from '../../store/user/actions';

import {
  Container,
  Content,
  Logo,
  Card,
  CardContent,
  CardHeader,
  TextBold,
  Picture,
  Image,
  CardHeaderContent,
  Text,
  Section,
  Button,
  ButtonText,
  Main,
} from './styles';

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
          <Main>
            <Card>
              <CardHeader>
                <Picture>
                  <Image
                    source={{
                      uri:
                        'https://facebook.github.io/react-native/img/tiny_logo.png',
                    }}
                  />
                </Picture>
                <CardHeaderContent>
                  <TextBold>{user.name}</TextBold>
                  <Text>{user.email}</Text>
                </CardHeaderContent>
              </CardHeader>
              <CardContent>
                <Section>
                  <TextBold>Endereço</TextBold>
                  <Text>{user.address}</Text>
                </Section>
                <Section>
                  <TextBold>Cidade - Estado</TextBold>
                  <Text>
                    {user.city} - {user.state}
                  </Text>
                </Section>
                <Section>
                  <TextBold>Escola</TextBold>
                  <Text>Escola Municipal de São Paulo</Text>
                </Section>
                <Section>
                  <TextBold>Professor Anfitrião</TextBold>
                  <Text>Pedro Entringer</Text>
                </Section>
              </CardContent>
            </Card>
          </Main>
          <Button onPress={handleLogout}>
            <ButtonText>SAIR</ButtonText>
          </Button>
        </Container>
      </Content>
    </>
  );
};

export default Profile;
