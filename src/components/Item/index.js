import React from 'react';
import {View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  Container,
  BoxVideo,
  Main,
  AvatarContent,
  Avatar,
  Details,
  Title,
  User,
} from './styles';

export default function List({post}) {
  return (
    <Container>
      <BoxVideo />
      <Main>
        <AvatarContent>
          <Avatar />
        </AvatarContent>
        <Details>
          <Title>{post.title}</Title>
          <User>{post.user.name}</User>
        </Details>
      </Main>
      <Main>
        <Details>
          <FontAwesome5 name={'thumbs-up'} size={20} color={'#24D540'} solid />
        </Details>
      </Main>
    </Container>
  );
}
