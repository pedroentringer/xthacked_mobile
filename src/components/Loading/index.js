import React from 'react';
import LottieView from 'lottie-react-native';
import {Container, Card, Text} from './styles.js';

const animation = require('../../assets/4887-book.json');

export default function Loading() {
  return (
    <Container>
      <Card>
        <LottieView source={animation} autoPlay loop style={{width: 200}} />
        <Text>Espera ai</Text>
        <Text>Estamos buscando</Text>
        <Text>...</Text>
      </Card>
    </Container>
  );
}
