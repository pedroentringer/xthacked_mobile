import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Container, BoxVideo, Legenda} from './styles';

import {NavigationContext} from 'react-navigation';

export default function List(props) {
  const {item} = props;
  console.log(item);
  return (
    <Container>
      <BoxVideo>
        <Legenda>{item}</Legenda>
      </BoxVideo>
      <View>
        <FontAwesome5 name={'thumbs-up'} size={20} color={'#24D540'} solid />
      </View>
    </Container>
  );
}
