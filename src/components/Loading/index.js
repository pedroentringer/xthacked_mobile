import React from 'react';
import LottieView from 'lottie-react-native';
import {Container, Card} from './styles.js';

const animation = require('../../assets/159-servishero-loading.json');

export default function Loading() {
  return (
    <Container>
      <Card>
        <LottieView source={animation} autoPlay loop style={{width: 60}} />
      </Card>
    </Container>
  );
}
