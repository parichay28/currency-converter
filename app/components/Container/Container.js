import React from 'react';
import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
const dismissKeyboard = () => {
  Keyboard.dismiss();
};

const Container = ({children, backgroundColor}) => {
  const containerStyles = [styles.container];
  if (backgroundColor) {
    containerStyles.push({backgroundColor});
  }
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={containerStyles}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

Container.propTypes = {
  children: PropTypes.any,
  backgroundColor: PropTypes.string,
};

export default Container;
