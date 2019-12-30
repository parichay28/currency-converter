import React from 'react';
import {View, Text, TouchableHighlight, TextInput} from 'react-native';

import PropTypes from 'prop-types';
import color from 'color';

import styles from './styles';

const InputWithButton = props => {
  const {buttonText, onPress, editable = true, textColor} = props;

  const containerStyle = [styles.container];
  if (!editable) {
    containerStyle.push(styles.containerDisabled);
  }

  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier,
  );

  const buttonTextStyles = [styles.buttonText];
  if (textColor) {
    buttonTextStyles.push({color: textColor});
  }

  return (
    <View style={containerStyle}>
      <TouchableHighlight
        underlayColor={underlayColor}
        onPress={onPress}
        style={styles.buttonContainer}>
        <Text style={buttonTextStyles}>{buttonText}</Text>
      </TouchableHighlight>

      <View style={styles.border} />

      <TextInput style={styles.input} {...props} />
    </View>
  );
};

InputWithButton.propTypes = {
  buttonText: PropTypes.string,
  onPress: PropTypes.func,
  defaultValue: PropTypes.string,
  keyboardType: PropTypes.string,
  onChangeText: PropTypes.func,
  textColor: PropTypes.string,
  editable: PropTypes.bool,
  value: PropTypes.string,
};

export default InputWithButton;
