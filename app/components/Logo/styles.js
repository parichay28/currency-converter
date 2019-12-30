import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const ScreenHeight = Dimensions.get('window').height / 100;
const ScreenWidth = Dimensions.get('window').width / 100;

export default EStyleSheet.create({
  $largeContainerSize: ScreenWidth * 50,
  $largeImageSize: ScreenWidth * 25,

  $smallContainerSize: ScreenWidth * 25,
  $smallImageSize: ScreenWidth * 12.5,

  container: {
    // borderWidth: 1,
    alignItems: 'center',
  },
  imageContainer: {
    // borderWidth: 1,
    width: '$largeContainerSize',
    height: '$largeContainerSize',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    alignSelf: 'stretch',
  },
  image: {
    // borderWidth: 1,
    width: '$largeImageSize',
    height: '$largeImageSize',
  },
  text: {
    // borderWidth: 1,
    marginTop: ScreenHeight * 3,
    fontWeight: '500',
    fontSize: ScreenHeight * 3,
    color: '$white',
  },
});
