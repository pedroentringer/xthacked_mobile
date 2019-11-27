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
} from './styles';

const Viewer = ({navigation}) => {
  const navigationPost = navigation.getParam('post');
  navigationPost.likes = 10;
  navigationPost.dislikes = 5;
  navigationPost.comments = 10;

  const percent = {
    likes:
      (navigationPost.likes /
        (navigationPost.likes + navigationPost.dislikes)) *
      100,
    dislikes:
      (navigationPost.dislikes /
        (navigationPost.likes + navigationPost.dislikes)) *
      100,
  };
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
                  <Text>{navigationPost.user.name}</Text>
                </Details>
                <Section>
                  <FontAwesome5
                    name={'comments'}
                    size={20}
                    color={'#C8C8C8'}
                    solid
                  />
                  <ButtonText style={{color: '#C8C8C8'}}>
                    {navigationPost.comments}
                  </ButtonText>
                </Section>
              </User>
              <Section style={{marginTop: 10}}>
                <Buttons>
                  <Button>
                    <FontAwesome5
                      name={'thumbs-up'}
                      size={20}
                      color={'#24D540'}
                      solid
                    />
                    <ButtonText style={{color: '#24D540'}}>
                      {navigationPost.likes}
                    </ButtonText>
                  </Button>
                  <Button>
                    <FontAwesome5
                      name={'thumbs-down'}
                      size={20}
                      color={'#D52424'}
                      solid
                    />
                    <ButtonText style={{color: '#D52424'}}>
                      {navigationPost.dislikes}
                    </ButtonText>
                  </Button>
                </Buttons>

                <Bars>
                  <Bar
                    style={{
                      width: `${percent.likes}%`,
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  />
                  <Bar
                    style={{
                      width: `${percent.dislikes}%`,
                      backgroundColor: '#D52424',
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    }}
                  />
                </Bars>
              </Section>
              <Section>
                <Title>Descrição</Title>
                <Text>{navigationPost.description}</Text>
              </Section>
              <Section>
                <Title>Tags</Title>
                <Tags>
                  <Tag>Node.js</Tag>
                  <Tag>React Native</Tag>
                  <Tag>React.js</Tag>
                  <Tag>Adonis.js</Tag>
                  <Tag>Express</Tag>
                  <Tag>Socket.io</Tag>
                </Tags>
              </Section>
              <Section>
                <Title>Comentários</Title>
                <SectionComment>
                  <User>
                    <AvatarContent>
                      <Avatar />
                    </AvatarContent>
                    <Details>
                      <Title>{navigationPost.title}</Title>
                      <Text>{navigationPost.user.name}</Text>
                    </Details>
                  </User>
                  <Comment>
                    Que video sensacional, me ajudou bastante no estágio.
                  </Comment>
                  <Buttons
                    style={{justifyContent: 'flex-start', marginTop: 10}}>
                    <Button>
                      <FontAwesome5
                        name={'thumbs-up'}
                        size={20}
                        color={'#24D540'}
                        solid
                      />
                      <ButtonText style={{color: '#24D540'}}>
                        {navigationPost.likes}
                      </ButtonText>
                    </Button>
                    <Button>
                      <FontAwesome5
                        name={'thumbs-down'}
                        size={20}
                        color={'#D52424'}
                        solid
                      />
                      <ButtonText style={{color: '#D52424'}}>
                        {navigationPost.dislikes}
                      </ButtonText>
                    </Button>
                  </Buttons>
                </SectionComment>
              </Section>
              <Section>
                <Title>Inserir um Comentário</Title>
                <InputArea>
                  <Input
                    placeholder="Digite seu comentário aqui"
                    placeholderTextColor="#777777"
                    multiline={true}
                    numberOfLines={4}
                    returnKeyType="send"
                  />
                </InputArea>
                <ButtonComment>
                  <ButtonCommentText>Adicionar Comentário</ButtonCommentText>
                </ButtonComment>
              </Section>
            </Main>
          </>
        </Content>
      </Container>
    </>
  );
};

export default Viewer;
