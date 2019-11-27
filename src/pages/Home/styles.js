import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {FlatList} from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-self: stretch;
  align-items: center;
`;

export const Content = styled(LinearGradient)`
  flex: 1;
  align-self: stretch;
  align-items: center;
  padding: 30px 30px 0px 30px;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  align-items: center;
  justify-content: center;
`;

export const Filters = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Filter = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: #ffffff;
  border-radius: 200px;
  margin: 20px 10px;
`;

export const FilterText = styled.Text`
  font-size: 12px;
  margin-left: 8px;
`;

export const VideoList = styled(FlatList)`
  align-self: stretch;
  flex: 1;
`;
