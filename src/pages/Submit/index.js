import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
  Filters,
  Filter,
  FilterText,
} from './styles';

import nerd from '../../assets/nerd.png';

const Submit = ({navigation}) => {
  const [category, setCategory] = useState('course');
  const [file, setFile] = useState({});
  const handleCategory = category => {
    setCategory(category);
  };

  const handleImagePicket = () => {
    const options = {
      title: 'Selecione seu arquivo',
      mediaType: 'mixed',
      storageOptions: {
        skipBackup: true,
      },
    };
    ImagePicker.showImagePicker(options, response => {
      if (!response.didCancel && !response.error) {
        setFile(response);
      }
    });
  };

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
            nossa comunidade!
          </Text>
          <Text style={{marginTop: 10}}>
            Pra isso você só precisa preencher esse formulário, beleza?
          </Text>
          <Content>
            <Section>
              <Title>Qual o tipo do seu conteudo?</Title>
              <Filters>
                <Filter onPress={() => handleCategory('course')}>
                  {category == 'course' ? (
                    <AntDesign
                      name={'checkcircle'}
                      size={20}
                      color={'#24D540'}
                      solid
                    />
                  ) : (
                    <AntDesign
                      name={'checkcircleo'}
                      size={20}
                      color={'#C8C8C8'}
                      solid
                    />
                  )}
                  <FilterText>Cursos</FilterText>
                </Filter>
                <Filter onPress={() => handleCategory('question')}>
                  {category == 'question' ? (
                    <AntDesign
                      name={'checkcircle'}
                      size={20}
                      color={'#24D540'}
                      solid
                    />
                  ) : (
                    <AntDesign
                      name={'checkcircleo'}
                      size={20}
                      color={'#C8C8C8'}
                      solid
                    />
                  )}
                  <FilterText>Dúvidas</FilterText>
                </Filter>
              </Filters>
            </Section>
            <Section>
              <Title>Titulo</Title>
              <InputArea>
                <Input
                  placeholder="Digite seu titulo aqui"
                  placeholderTextColor="#777777"
                  returnKeyType="send"
                />
              </InputArea>
            </Section>
            <Section>
              <Title>Descrição</Title>
              <InputArea>
                {category == 'course' ? (
                  <Input
                    placeholder="Digite a descrição do seu conteudo aqui"
                    placeholderTextColor="#777777"
                    returnKeyType="send"
                    multiline={true}
                    numberOfLines={3}
                  />
                ) : (
                  <Input
                    placeholder="Compartilhe sua dúvida aqui"
                    placeholderTextColor="#777777"
                    returnKeyType="send"
                    multiline={true}
                    numberOfLines={3}
                  />
                )}
              </InputArea>
            </Section>
            <Section>
              <Title>Video ou Foto</Title>
              <Text>
                Este envio é opcional, mas seria legal ter ele para complementar
                ainda mais seu conteudo.
              </Text>
              {file.fileName && <Text>Arquivo: {file.fileName}</Text>}
              <ButtonComment onPress={() => handleImagePicket()}>
                <ButtonCommentText>Adicionar Arquivo</ButtonCommentText>
              </ButtonComment>
            </Section>
            <ButtonComment>
              <ButtonCommentText>Enviar Comentário</ButtonCommentText>
            </ButtonComment>
          </Content>
        </Section>
      </Container>
    </>
  );
};

export default Submit;
