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

const Submit = ({navigation}) => {
  return (
    <>
      <StatusBar
        backgroundColor="#fafafa"
        translucent={false}
        barStyle="dark-content"
      />
      <Container>
        <Section>
          <Title>Que legal, vamos compartilhar!!!</Title>
          <Text>
            Aqui você pode enviar suas dúvidas, ou enviar conteudos para ajudar
            nossa comunidade, beleza?
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
    </>
  );
};

export default Submit;
