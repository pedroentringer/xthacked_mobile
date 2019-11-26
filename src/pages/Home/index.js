import React from 'react';
import {Container, Content, Logo, VideoList} from './styles';

import Item from '../../components/Item';
import logomarca from '../../assets/logomarca.png';

const Home = ({navigation}) => {
  return (
    <Content colors={['#24a8df', '#02528e']}>
      <Container>
        <Logo source={logomarca} />
        <VideoList
          data={['1', '2']}
          horizontal={false}
          bounces={false}
          renderItem={({item, index}) => <Item item={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </Container>
    </Content>
  );
};

export default Home;
