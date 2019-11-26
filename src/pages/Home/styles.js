import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {FlatList} from 'react-native';
export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled(LinearGradient)`
  flex: 1;
  padding: 40px;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  align-items: center;
  justify-content: center;
`;

export const VideoList = styled(FlatList)`
  width: 100%;
`;