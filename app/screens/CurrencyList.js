import React from 'react';
import {View, FlatList, StatusBar} from 'react-native';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import currencies from '../data/currencies';

import {ListItem, Separator} from '../components/List';

import {changeBaseCurrency, changeQuoteCurrency} from '../actions/currencies';

const CurrencyList = props => {
  const type = props.navigation.getParam('type', 'nil');

  const handlePress = currency => {
    if (type === 'base') {
      props.dispatch(changeBaseCurrency(currency));
    } else if (type === 'quote') {
      props.dispatch(changeQuoteCurrency(currency));
    }
    props.navigation.goBack(null);
  };

  const renderItem = ({item}) => (
    <ListItem
      text={item}
      selected={
        item === (type === 'base' ? props.baseCurrency : props.quoteCurrency)
      }
      onPress={() => {
        handlePress(item);
      }}
      iconBackground={props.primaryColor}
    />
  );

  const keyExtractor = item => item;

  return (
    <View>
      <StatusBar barStyle="default" translucent={false} />
      <FlatList
        data={currencies}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

CurrencyList.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  baseCurrency: PropTypes.string,
  quoteCurrency: PropTypes.string,
  primaryColor: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency,
    primaryColor: state.themes.primaryColor,
  };
};

export default connect(mapStateToProps)(CurrencyList);
