import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

import PropTypes from 'prop-types';

import Icon from './Icon';

import styles from './styles';

const ListItem = ({
  text,
  onPress,
  selected,
  visible = true,
  checkmark = true,
  customIcon = null,
  iconBackground,
}) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
      <View style={styles.row}>
        <Text style={styles.text}>{text}</Text>
        {selected ? (
          <Icon
            visible={visible}
            checkmark={checkmark}
            iconBackground={iconBackground}
          />
        ) : null}
        {customIcon}
      </View>
    </TouchableHighlight>
  );
};

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  visible: PropTypes.bool,
  checkmark: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string,
};

export default ListItem;
