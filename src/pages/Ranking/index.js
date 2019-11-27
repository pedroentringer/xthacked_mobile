import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  Content,
  Video,
  Main,
  User,
  AvatarContent,
  Avatar,
  Details,
  Title,
  Text,
  Section,
  SectionComment,
  Tags,
  Tag,
  Buttons,
  Button,
  ButtonText,
  Bars,
  Bar,
  Comment,
  InputArea,
  Input,
  ButtonComment,
  ButtonCommentText,
  Image,
} from './styles';

import nerd from '../../assets/nerd.png';

const Ranking = ({navigation}) => {
  return (
    <Container>
      <Section>
        <Image source={nerd} />
        <Title>Ranking Nerd</Title>
        <Text>
          Se liga nessa galera viciada em criar ótimos conteudos para o seu
          aprendizado.
        </Text>
        <Content>
          <Section>
            <User>
              <AvatarContent>
                <Avatar />
              </AvatarContent>
              <Details>
                <Title>Pedro Entringer</Title>
                <Text>30.230 Pontos</Text>
              </Details>
            </User>
          </Section>
          <Section>
            <User>
              <AvatarContent>
                <Avatar />
              </AvatarContent>
              <Details>
                <Title>Pedro Entringer</Title>
                <Text>30.230 Pontos</Text>
              </Details>
            </User>
          </Section>
        </Content>
      </Section>
    </Container>
  );
};

export default Ranking;
