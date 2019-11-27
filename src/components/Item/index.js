import React from 'react';
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
  Buttons,
  Button,
  ButtonText,
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
        <Buttons>
          <Button>
            <FontAwesome5
              name={'thumbs-up'}
              size={20}
              color={'#24D540'}
              solid
            />
            <ButtonText style={{color: '#24D540'}}>3.230</ButtonText>
          </Button>
          <Button>
            <FontAwesome5
              name={'thumbs-down'}
              size={20}
              color={'#D52424'}
              solid
            />
            <ButtonText style={{color: '#D52424'}}>3.230</ButtonText>
          </Button>
        </Buttons>
      </Main>
    </Container>
  );
}
