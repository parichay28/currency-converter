import React from 'react';
import {Text} from 'react-native';

import PropTypes from 'prop-types';
import moment from 'moment';

import styles from './styles';

const LastConverted = ({fromCurrency, convRate, toCurrency, date}) => {
  return (
    <Text style={styles.smallText}>{`${1 +
      ' ' +
      fromCurrency +
      ' = ' +
      convRate +
      ' ' +
      toCurrency +
      ' as of ' +
      moment(date).format('MMMM D, YYYY')}`}</Text>
  );
};

LastConverted.propTypes = {
  date: PropTypes.object,
  fromCurrency: PropTypes.string,
  toCurrency: PropTypes.string,
  convRate: PropTypes.number,
};

export default LastConverted;
