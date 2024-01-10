import React, {useEffect} from 'react';
import {Alert, LogBox, SafeAreaView, StyleSheet} from 'react-native';
import Router from '../../navigator/routes';
import {useAppSelector} from '../../hooks';

import {colors} from '../../constants';
import {NavigationType} from '../../components/Header';
import {isNullUndefined} from '../../utils/CommonFunction';

interface Props {
  navigation: NavigationType;
}
export const SplashScreen = (props: Props) => {
  const {navigation} = props;
  const {loginUser} = useAppSelector(state => state.Auth);
  console.log(loginUser);
  useEffect(() => {
    LogBox.ignoreAllLogs(true);
    if (isNullUndefined(loginUser)) {
      Router.resetNew(navigation, 'onboarding');
    } else {
      Router.resetNew(navigation, 'BottomTab');
    }
  }, [navigation, loginUser]);
  return <SafeAreaView style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
