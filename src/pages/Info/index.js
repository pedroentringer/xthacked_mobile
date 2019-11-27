import React, {useState} from 'react';
import {StatusBar, Linking, TouchableOpacity, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
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
  Scroll,
  Main,
} from './styles';

import logomarca from '../../assets/logomarca-branca-mini.png';

const Info = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const handleLogout = async () => {
    dispatch({type: UserTypes.REMOVE});
  };

  const openMylink = link => {
    Alert.alert(
      'Linkedin',
      'Você está sendo direcionado para Linkedin, deseja continuar?',
      [
        {
          text: 'SIM',
          onPress: () =>
            Linking.openURL(`${link}`).catch(err =>
              console.error('An error occurred', err),
            ),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
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
          <Scroll>
            <Logo source={logomarca} />
            <Main>
              <Card>
                <CardHeader>
                  <CardHeaderContent>
                    <TextBold>Sobre o Projeto</TextBold>
                    <Text>Desenvolvido com muito carinho</Text>
                  </CardHeaderContent>
                </CardHeader>
                <CardContent>
                  <Section>
                    <TextBold>Objetivo</TextBold>
                    <Text>
                      Incentivar de forma moderna e sem perder o foco os jovens
                      a adquirir conhecimento sobre tecnologia.
                    </Text>
                  </Section>
                  <Section>
                    <TextBold>Como tudo começou?</TextBold>
                    <Text>
                      Durante o RocketSeat Experience 2019 em São Paulo o
                      primeiro evento da RocketSeat desse porte. No dia
                      26/11/2019 (Segundo dia de evendo), todos os participantes
                      foram convidados a montar times e participar do Hackathon
                      organizado Shawee. Claro! Aceitamos o desafio! Nesse
                      evento trocamos conhecimento, fizemos network e criamos
                      amigos. Melhor coisa foi se divertir desenvolvendo o
                      projeto.
                    </Text>
                  </Section>
                  <Section>
                    <TextBold>Sobre o Time</TextBold>
                    <TouchableOpacity
                      style={{marginTop: 10}}
                      onPress={() =>
                        openMylink('https://www.linkedin.com/in/pedroentringer')
                      }>
                      <FontAwesome5
                        name={'linkedin'}
                        size={30}
                        color={'rgba(36, 168, 223, 1)'}
                        solid
                      />
                      <Text>
                        Pedro Entringer - Desenvolvedor FullStack, amante de
                        novas tecnologias e desafios intrigantes.
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{marginTop: 10}}
                      onPress={() =>
                        openMylink('https://www.linkedin.com/in/mmalafaia')
                      }>
                      <FontAwesome5
                        name={'linkedin'}
                        size={30}
                        color={'rgba(36, 168, 223, 1)'}
                        solid
                      />
                      <Text>
                        Manoel Malafaia - Desenvolvedor com mais de 20 anos de
                        experiência, migrando agora para Fullstack.
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{marginTop: 10}}
                      onPress={() =>
                        openMylink(
                          'https://www.linkedin.com/in/philipe-siqueira-3971b441',
                        )
                      }>
                      <FontAwesome5
                        name={'linkedin'}
                        size={30}
                        color={'rgba(36, 168, 223, 1)'}
                        solid
                      />
                      <Text>
                        Philipe Siqueira - Scrum Master, Desenvolvedor FullStack
                        a 2 anos. Atualmente focando em tecnologias JavaScrip.
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{marginTop: 10}}
                      onPress={() =>
                        openMylink('https://www.linkedin.com/in/didierpg')
                      }>
                      <FontAwesome5
                        name={'linkedin'}
                        size={30}
                        color={'rgba(36, 168, 223, 1)'}
                        solid
                      />
                      <Text>
                        Didier Ferreira - Programador backend com Java e PHP há
                        7 anos, agora almejando o fullalstack com tecnologias
                        Javascript
                      </Text>
                    </TouchableOpacity>
                  </Section>
                </CardContent>
              </Card>
            </Main>
          </Scroll>
        </Container>
      </Content>
    </>
  );
};

export default Info;
