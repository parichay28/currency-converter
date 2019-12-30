import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const Header = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image
          resizeMode="contain"
          source={require('../../../assets/images/gear.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

Header.propTypes = {
  onPress: PropTypes.func,
};

export default Header;
