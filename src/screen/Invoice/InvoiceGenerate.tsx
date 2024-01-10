import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {colors, images, screensName, strings, vh, vw} from '../../constants';
import {Header, NavigationType} from '../../components/Header';
import CustomButton from '../../components/CustomButton';
interface Props {
  navigation: NavigationType;
}
const InvoiceGenerate = (props: Props) => {
  const {navigation} = props;
  useLayoutEffect(() => {
    Header.setNavigation(navigation, strings.Invoice, renderRight);
    navigation.BackButtonPress = () => {
      navigation.goBack();
    };
  }, []);

  const renderRight = () => {
    return (
      <TouchableOpacity style={{}} onPress={() => {}} activeOpacity={0.8}>
        <Image source={images.dots} style={styles.dotsicon} />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.continer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: colors.black,
            fontWeight: '900',
          }}>
          {strings.Invoice}
        </Text>
      </ScrollView>
      <View style={styles.bttnFlex}>
        <CustomButton
          buttonText={strings.send}
          handleAction={() => {
            navigation.navigate(screensName.Invoice);
          }}
          contentContainerStyle={styles.lBttn}
          isDefaultRImg={false}
        />
        <CustomButton
          buttonText={strings.cancel}
          handleAction={() => {
            navigation.goBack();
          }}
          contentContainerStyle={styles.rBttn}
          isDefaultRImg={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default InvoiceGenerate;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  dotsicon: {
    width: vw(20),
    height: vh(20),
    tintColor: colors.orange1,
  },
  bttnFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: vw(250),
    alignSelf: 'center',
    paddingBottom: vw(10),
  },
  lBttn: {
    width: vw(120),
    height: vh(45),
    backgroundColor: colors.green,
  },
  rBttn: {
    width: vw(120),
    height: vh(45),
    backgroundColor: colors.black60per,
  },
});
