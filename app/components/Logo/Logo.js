/* eslint-disable react-hooks/exhaustive-deps */
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  Keyboard,
  Animated,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

// class Logo extends Component {
const Logo = props => {
  const [imageContainerSize, setImageContainerSize] = useState(
    new Animated.Value(styles.$largeContainerSize),
  );
  const [imageSize, setImageSize] = useState(
    new Animated.Value(styles.$largeImageSize),
  );

  const ANIMATION_DURATION = 300;
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', onKeyboardWillShow);
    Keyboard.addListener('keyboardDidHide', onKeyboardWillHide);
    return () => {
      Keyboard.removeListener('keyboardWillHide', () => {});
      Keyboard.removeListener('keyboardWillShow', () => {});
    };
  }, []);
  // componentDidMount() {
  //   this.keyboardShowListener = Keyboard.addListener(
  //     'keyboardDidShow',
  //     this.onKeyboardWillShow,
  //   );
  //   this.keyboardHideListener = Keyboard.addListener(
  //     'keyboardDidHide',
  //     this.onKeyboardWillHide,
  //   );
  // }
  // componentWillUnmount() {
  //   this.keyboardHideListener.remove();
  //   this.keyboardShowListener.remove();
  // }

  const onKeyboardWillShow = () => {
    Animated.parallel([
      Animated.timing(imageContainerSize, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(imageSize, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };
  const onKeyboardWillHide = () => {
    Animated.parallel([
      Animated.timing(imageContainerSize, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(imageSize, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  const imageContainerStyle = [
    styles.imageContainer,
    {width: imageContainerSize, height: imageContainerSize},
  ];

  const imageStyle = [
    styles.image,
    {width: imageSize, height: imageSize},
    props.tintColor ? {tintColor: props.tintColor} : null,
  ];

  // render() {
  return (
    <View style={styles.container}>
      <Animated.View style={imageContainerStyle}>
        <ImageBackground
          style={styles.backgroundImage}
          resizeMode="contain"
          source={require('../../../assets/images/background.png')}>
          <Animated.Image
            style={imageStyle}
            // style={imageStyle}
            resizeMode="contain"
            source={require('../../../assets/images/logo.png')}
          />
        </ImageBackground>
      </Animated.View>

      <Text style={styles.text}>Currency Converter</Text>
    </View>
  );
};

Logo.propTypes = {
  tintColor: PropTypes.string,
};
export default Logo;
