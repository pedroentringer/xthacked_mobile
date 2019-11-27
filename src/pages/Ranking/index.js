import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  Content,
  User,
  AvatarContent,
  Avatar,
  Details,
  Title,
  Text,
  Section,
  Image,
} from './styles';

import api from '../../services/api';
import nerd from '../../assets/nerd.png';
import Loading from '../../components/Loading';

const Ranking = ({navigation}) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getDados() {
      setLoading(true);
      const {data} = await api.get('ranking');
      setUsers(data);
      setLoading(false);
    }
    getDados();
  }, []);

  return (
    <>
      {loading && <Loading />}
      <Container>
        <Section>
          <Image source={nerd} />
          <Title>Ranking Nerd</Title>
          <Text>
            Se liga nessa galera viciada em criar ótimos conteudos para o seu
            aprendizado.
          </Text>
          <Content>
            {users.map((user, index) => {
              console.tron.log(user);
              return (
                <Section key={index}>
                  <User>
                    <AvatarContent>
                      <Avatar />
                    </AvatarContent>
                    <Details>
                      <Title>{user.user.name}</Title>
                      <Text>{user.points} Pontos</Text>
                    </Details>
                  </User>
                </Section>
              );
            })}
          </Content>
        </Section>
      </Container>
    </>
  );
};

export default Ranking;
