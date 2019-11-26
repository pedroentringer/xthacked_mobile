import {Alert as RNAlert} from 'react-native';

export function Confirmation(title, message) {
  RNAlert.alert(
    title,
    message[
      ({
        text: 'Beleza',
        onPress: () => this.props.confirmation,
      },
      {
        text: 'Cancelar',
        onPress: () => this.props.cancel,
        style: 'cancel',
      })
    ],
    {cancelable: false},
  );
}

export function Alert(title, message) {
  RNAlert.alert(
    title,
    message[
      {
        text: 'Beleza',
        onPress: () => this.props.confirmation,
      }
    ],
    {cancelable: false},
  );
}
