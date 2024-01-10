import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {Header, NavigationType} from '../../components/Header';
import {colors, screensName, strings, vh, vw} from '../../constants';
import {useAppSelector} from '../../hooks';
import CustomSeperator from '../../components/CustomSeperator';
import CustomButton from '../../components/CustomButton';
import Router from '../../navigator/routes';
interface Props {
  navigation: NavigationType;
}
const Profile = (props: Props) => {
  const {navigation} = props;

  useLayoutEffect(() => {
    Header.setNavigation(navigation, 'Profile', undefined, () => {});
    navigation.BackButtonPress = () => {};
  }, []);
  const {userData, loginUser} = useAppSelector(state => state.Auth);
  const renderHorizontalData = (key: string, value: string, style?: any) => {
    return (
      <View style={styles.horizontalContainer}>
        <Text numberOfLines={1} style={styles.horizontalKeyText}>
          {key}
        </Text>

        <Text numberOfLines={1} style={[styles.horizontalValueText, style]}>
          {value}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {renderHorizontalData('Name:', userData[0].name)}
      {renderHorizontalData('Email:', userData[0].email)}
      <CustomSeperator />
      <CustomButton
        buttonText={strings.logOut}
        contentContainerStyle={{}}
        isDefaultRImg={false}
        handleAction={() => {
          navigation.navigate('CustomAlert', {
            message: strings.logoutMessage,
            okText: strings.ok,
            double: true,
            okFunction: () => {
              Router.resetNew(navigation, 'onboarding');
            },
            cancelFunction: () => {},
          });
        }}
      />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: vw(20),
    color: colors.black,
  },

  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: vh(30),
    alignItems: 'center',
    paddingHorizontal: vw(20),
  },
  horizontalKeyText: {
    maxWidth: vw(163),
    color: colors.grey,
    fontSize: vw(12),
    letterSpacing: vw(0.3),
    lineHeight: vh(23),
  },
  horizontalValueText: {
    textAlign: 'right',
    width: vw(220),
    color: colors.lightBlack,
    fontSize: vw(14),
  },
});
