import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    // borderWidth: 1,
    alignItems: 'center',
  },
  wrapper: {
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 15,
    marginRight: 11,
    // borderWidth: 1,
  },
  text: {
    // borderWidth: 1,
    color: '$white',
    fontSize: 14,
    fontWeight: '300',
    paddingVertical: 20,
  },
});
