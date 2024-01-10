import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {Header, NavigationType} from '../../components/Header';
import {colors, vw} from '../../constants';
interface Props {
  navigation: NavigationType;
}
const Setting = (props: Props) => {
  const {navigation} = props;

  useLayoutEffect(() => {
    Header.setNavigation(navigation, 'Setting', undefined, () => {});
    navigation.BackButtonPress = () => {};
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Setting</Text>
    </View>
  );
};

export default Setting;

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
