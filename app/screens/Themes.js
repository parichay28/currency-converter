import React from 'react';
import {View, Text, ScrollView, StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ListItem, Separator} from '../components/List';

import {changePrimaryColor} from '../actions/themes';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $green: '$primaryGreen',
  $orange: '$primaryOrange',
  $purple: '$primaryPurple',
});

const Themes = props => {
  const handleThemePress = color => {
    props.dispatch(changePrimaryColor(color));
    props.navigation.goBack();
  };
  return (
    <ScrollView>
      <StatusBar barStyle="default" translucent={false} />
      <ListItem
        text="Blue"
        onPress={() => handleThemePress(styles.$blue)}
        selected
        checkmark={false}
        iconBackground={styles.$blue}
      />
      <Separator />

      <ListItem
        text="Green"
        onPress={() => handleThemePress(styles.$green)}
        selected
        checkmark={false}
        iconBackground={styles.$green}
      />
      <Separator />

      <ListItem
        text="Orange"
        onPress={() => handleThemePress(styles.$orange)}
        selected
        checkmark={false}
        iconBackground={styles.$orange}
      />
      <Separator />

      <ListItem
        text="Purple"
        onPress={() => handleThemePress(styles.$purple)}
        selected
        checkmark={false}
        iconBackground={styles.$purple}
      />
    </ScrollView>
  );
};

Themes.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
};

// const mapStateToProps = (state) => {
//   return
// }

export default connect()(Themes);
