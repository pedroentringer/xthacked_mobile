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
  const post = navigation.getParam('post');

  const percent = {
    likes: (post.likes / (post.likes + post.dislikes)) * 100,
    dislikes: (post.dislikes / (post.likes + post.dislikes)) * 100,
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
                  <Title>{post.title}</Title>
                  <Text>{post.user.name}</Text>
                </Details>
                <Section>
                  <FontAwesome5
                    name={'comments'}
                    size={20}
                    color={'#C8C8C8'}
                    solid
                  />
                  <ButtonText style={{color: '#C8C8C8'}}>
                    {post.comments.length}
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
                      {post.likes}
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
                      {post.dislikes}
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
                <Text>{post.description}</Text>
              </Section>
              <Section>
                <Title>Tags</Title>
                <Tags>
                  {post.tags.map((tag, index) => {
                    return <Tag key={index}>{tag}</Tag>;
                  })}
                </Tags>
              </Section>
              <Section>
                <Title>Comentários</Title>
                {post.comments.map(comment => {
                  return (
                    <SectionComment key={comment.id}>
                      <Title>{comment.user.name}</Title>
                      <User>
                        <AvatarContent>
                          <Avatar />
                        </AvatarContent>
                        <Details />
                      </User>
                      <Comment>{comment.comment}</Comment>
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
                            {comment.likes}
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
                            {comment.dislikes}
                          </ButtonText>
                        </Button>
                      </Buttons>
                    </SectionComment>
                  );
                })}
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
