import EStyleSheet from 'react-native-extended-stylesheet';
import {StatusBar} from 'react-native';

const styles = EStyleSheet.create({
  container: {
    // borderWidth: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    '@media ios': {
      paddingTop: 40,
    },
    '@media android': {
      paddingTop: StatusBar.currentHeight,
    },
  },
  button: {
    // borderWidth: 1,
    alignSelf: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  icon: {
    // borderWidth: 1,
    width: 18,
  },
});

export default styles;
