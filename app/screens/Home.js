/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {StatusBar, KeyboardAvoidingView} from 'react-native';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Container} from '../components/Container';
import {Logo} from '../components/Logo';
import {InputWithButton} from '../components/TextInput';
import {ClearButton} from '../components/Buttons';
import {LastConverted} from '../components/Text';
import {Header} from '../components/Header';

import {connectAlert} from '../components/Alert';

import {
  changeCurrencyAmount,
  swapCurrency,
  getInitialConversion,
} from '../actions/currencies';

const Home = props => {
  useEffect(() => {
    props.dispatch(getInitialConversion());
  }, []);

  useEffect(() => {
    if (props.currencyError) {
      props.alertWithType('error', 'Error', props.currencyError.message);
    }
  }, [props.currencyError]);

  const handleBaseCurrencyButton = () => {
    props.navigation.navigate('CurrencyList', {
      title: 'Base Currency',
      type: 'base',
    });
  };

  const handleQuoteCurrencyButton = () => {
    props.navigation.navigate('CurrencyList', {
      title: 'Quote Currency',
      type: 'quote',
    });
  };

  const handleReverseCurrency = () => {
    props.dispatch(swapCurrency());
  };

  const handleChangeText = amount => {
    // let parsedAmount;
    // if (amount === '') {
    //   parsedAmount = '';
    // } else {
    //   parsedAmount = parseFloat(amount);
    //   if (Number.isNaN(parsedAmount)) {
    //     parsedAmount = 0;
    //   }
    // }
    props.dispatch(changeCurrencyAmount(amount));
  };

  const handleOptionsPress = () => {
    props.navigation.navigate('Options', {title: 'Quote Currency'});
  };

  const getQuotePrice = () => {
    let quotePrice;
    if (props.isFetching) {
      quotePrice = 'Loading';
      return quotePrice;
    } else if (Number.isNaN(parseFloat(props.amount))) {
      quotePrice = 0;
      return quotePrice.toString();
    } else {
      quotePrice = (parseFloat(props.amount) * props.conversionRate).toFixed(2);
      return quotePrice.toString();
    }
  };

  return (
    <Container backgroundColor={props.primaryColor}>
      <StatusBar barStyle={'light-content'} translucent />
      <Header onPress={handleOptionsPress} />
      <KeyboardAvoidingView>
        <Logo tintColor={props.primaryColor} />
        <InputWithButton
          buttonText={props.baseCurrency}
          onPress={handleBaseCurrencyButton}
          defaultValue={props.amount.toString()}
          keyboardType="numeric"
          onChangeText={handleChangeText}
          textColor={props.primaryColor}
        />
        <InputWithButton
          buttonText={props.quoteCurrency}
          onPress={handleQuoteCurrencyButton}
          editable={false}
          value={getQuotePrice()}
          textColor={props.primaryColor}
        />
        <LastConverted
          fromCurrency={props.baseCurrency}
          toCurrency={props.quoteCurrency}
          convRate={props.conversionRate}
          date={props.lastConvertedDate}
        />
        <ClearButton
          text="Reverse Currencies"
          onPress={handleReverseCurrency}
        />
      </KeyboardAvoidingView>
    </Container>
  );
};

Home.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  baseCurrency: PropTypes.string,
  quoteCurrency: PropTypes.string,
  conversionRate: PropTypes.number,
  amount: PropTypes.string,
  isFetching: PropTypes.bool,
  lastConvertedDate: PropTypes.object,
  primaryColor: PropTypes.string,
  alertWithType: PropTypes.func,
};

const mapStateToProps = state => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};
  const amount = state.currencies.amount;

  return {
    baseCurrency,
    quoteCurrency,
    conversionRate: rates[quoteCurrency] || 0,
    amount,
    isFetching: conversionSelector.isFetching,
    lastConvertedDate: conversionSelector.date
      ? new Date(conversionSelector.date)
      : new Date(),
    currencyError: state.currencies.error,
    primaryColor: state.themes.primaryColor,
  };
};

export default connect(mapStateToProps)(connectAlert(Home));
