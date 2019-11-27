import React, {useState} from 'react';
import {StatusBar} from 'react-native';

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
  UserName,
  Section,
} from './styles';

const Viewer = ({navigation}) => {
  const navigationPost = navigation.getParam('post');
  return (
    <>
      <StatusBar
        backgroundColor="#fafafa"
        translucent={false}
        barStyle="dark-content"
      />
      <Container>
        <Content>
          <>
            <Video />
            <Main>
              <User>
                <AvatarContent>
                  <Avatar />
                </AvatarContent>
                <Details>
                  <Title>{navigationPost.title}</Title>
                  <UserName>{navigationPost.user.name}</UserName>
                </Details>
              </User>
              <Section style={{marginTop: 10}}>
                <Title>Descrição</Title>
                <UserName>{navigationPost.description}</UserName>
              </Section>
              <Section>
                <Title>Tags</Title>
                <UserName>Aqui entram as tags</UserName>
              </Section>
            </Main>
          </>
        </Content>
      </Container>
    </>
  );
};

export default Viewer;
