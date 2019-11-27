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

const Info = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const handleLogout = async () => {
    dispatch({type: UserTypes.REMOVE});
  };

  return (
    <>
      <Content colors={['#24a8df', '#02528e']}>
        <Container>
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
                    Incentivar o jovem estudante do Ensino Médio a iniciar uma
                    busca por conhecimentos sobre tecnologia e principalmente
                    sobre programação.
                  </Text>
                </Section>
                <Section>
                  <TextBold>Objetivo da Equipe</TextBold>
                  <Text>
                    Participar do desafio imersivo liberado com muita emoção
                    pela equipe da RocketSeat em seu primeiro evento, sendo ele
                    o RocketSeat Experience 2019.
                  </Text>
                  <Text style={{marginTop: 10}}>
                    Praticar e aprender ainda mais sobre o conteudo absorvido no
                    evento, fazer novas amizades e principalmente nos divertir
                    criando o projeto.
                  </Text>
                </Section>
              </CardContent>
            </Card>
          </Main>
        </Container>
      </Content>
    </>
  );
};

export default Info;
