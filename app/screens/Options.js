import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Platform,
  Linking,
} from 'react-native';

import PropTypes from 'prop-types';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {connectAlert} from '../components/Alert';

import {ListItem, Separator} from '../components/List';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

const Options = props => {
  const handleThemesPress = () => {
    props.navigation.navigate('Themes', {title: 'Themes'});
  };

  const handleSitePress = () => {
    Linking.openURL('https://api.frankfurter.app').catch(() =>
      props.alertWithType('error', 'Oh Snap! The link is down :('),
    );
  };
  return (
    <ScrollView>
      <StatusBar barStyle="default" translucent={false} />
      <ListItem
        text="Themes"
        onPress={handleThemesPress}
        customIcon={
          <IonIcon
            name={`${ICON_PREFIX}-arrow-forward`}
            color={ICON_COLOR}
            size={ICON_SIZE}
          />
        }
      />
      <Separator />
      <ListItem
        text="Frankfurter APIs"
        onPress={handleSitePress}
        customIcon={
          <IonIcon
            name={`${ICON_PREFIX}-link`}
            color={ICON_COLOR}
            size={ICON_SIZE}
          />
        }
      />
    </ScrollView>
  );
};

Options.propTypes = {
  navigation: PropTypes.object,
};

export default connectAlert(Options);
