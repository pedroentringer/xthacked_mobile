import React, {useEffect, useState} from 'react';
import {Container, Content, Logo, VideoList} from './styles';

import {useSelector, useDispatch} from 'react-redux';

import Item from '../../components/Item';
import logomarca from '../../assets/logomarca-branca-mini.png';

// useEffect(() => {
//   //consulta na API e atualiza store
// }, []);

const Home = ({navigation}) => {
  const [category, setCategory] = useState('course');
  const posts = useSelector(state => state.post);
  const dispatch = useDispatch();
  return (
    <Content colors={['#24a8df', '#02528e']}>
      <Container>
        <Logo source={logomarca} />
        <VideoList
          data={posts}
          horizontal={false}
          bounces={false}
          renderItem={item => <Item post={item.item} />}
          keyExtractor={post => post.id.toString()}
        />
      </Container>
    </Content>
  );
};

export default Home;
