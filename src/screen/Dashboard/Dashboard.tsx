import React, {useLayoutEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Header, NavigationType} from '../../components/Header';
import {colors, strings, vw} from '../../constants';
interface Props {
  navigation: NavigationType;
}
const Dashboard = (props: any) => {
  const {navigation} = props;
  useLayoutEffect(() => {
    Header.setNavigation(navigation, strings.Dashboard, undefined, () => {});
    navigation.BackButtonPress = () => {};
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{strings.Dashboard}</Text>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: vw(20),
    color: colors.black,
  },
});
