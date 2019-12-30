import {Dimensions, StyleSheet} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const screenWidth = Dimensions.get('window').width / 100;
const screenHeight = Dimensions.get('window').height / 100;

const INPUT_HEIGHT = screenHeight * 7;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
  $buttonBackgroundColorBase: '$white',
  $buttonBackgroundColorModifier: 0.1,

  container: {
    // borderWidth: 1,
    backgroundColor: '$white',
    width: '90%',
    height: INPUT_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: screenHeight * 1.5,
    borderRadius: BORDER_RADIUS,
  },
  containerDisabled: {
    backgroundColor: '$lightGray',
  },
  buttonContainer: {
    // borderWidth: 1,
    height: INPUT_HEIGHT,
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
    backgroundColor: '$white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    // borderWidth: 1,
    fontWeight: '500',
    fontSize: 20,
    paddingHorizontal: screenWidth * 4,
    color: '$primaryBlue',
  },
  border: {
    // borderWidth: 1,
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '$border',
  },
  input: {
    // borderWidth: 1,
    height: INPUT_HEIGHT,
    flex: 1,
    color: '$inputText',
    paddingHorizontal: screenWidth * 2,
  },
});
