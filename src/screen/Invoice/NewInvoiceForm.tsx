import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {colors, screensName, strings, vh, vw} from '../../constants';
import {Header, NavigationType} from '../../components/Header';
import CustomInputBox from '../../components/CustomInputBox';
import CustomDropDown from '../../components/CustomDropDown';
import CustomButton from '../../components/CustomButton';
import CustomSeperator from '../../components/CustomSeperator';
interface Props {
  navigation: NavigationType;
}
const NewInvoiceForm = (props: Props) => {
  const {navigation} = props;
  const input1_ref = React.useRef();
  const input2_ref = React.useRef();
  const input3_ref = React.useRef();
  const input4_ref = React.useRef();
  useLayoutEffect(() => {
    Header.setNavigation(navigation, 'New Invoice');
    navigation.BackButtonPress = () => {
      navigation.goBack();
    };
  }, []);
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
    <SafeAreaView style={styles.continer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: vw(20)}}>
        <CustomInputBox
          title={'#'}
          placeholder={'000000'}
          ref={input1_ref}
          value={'1'}
          onChangeText={(val: string) => {}}
          autoCapitalize={'none'}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          errorMessage={''}
          returnKeyType={'done'}
          contentContainerStyle={{marginBottom: vw(-10)}}
        />
        <CustomDropDown
          tittle={'Product:'}
          placeholder={'Select Product'}
          onPress={() => {}}
          inputText={''}
          errorMessage={''}
          contentContainerStyle={{marginBottom: vh(-10)}}
        />
        <CustomDropDown
          tittle={'Qty:'}
          placeholder={'Select Qty'}
          onPress={() => {}}
          inputText={''}
          errorMessage={''}
        />
        <CustomInputBox
          title={'Unit Price:'}
          placeholder={'Unit Price'}
          ref={input2_ref}
          value={''}
          onChangeText={(val: string) => {}}
          autoCapitalize={'none'}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          errorMessage={''}
          returnKeyType={'done'}
          contentContainerStyle={{marginBottom: vw(-10)}}
        />
        <CustomInputBox
          title={'Tax'}
          placeholder={'SGST'}
          ref={input3_ref}
          value={''}
          onChangeText={(val: string) => {}}
          autoCapitalize={'none'}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          errorMessage={''}
          returnKeyType={'done'}
          contentContainerStyle={{marginBottom: vw(-10)}}
        />
        <CustomInputBox
          title={'Amount'}
          placeholder={'0'}
          ref={input4_ref}
          value={'1'}
          onChangeText={(val: string) => {}}
          autoCapitalize={'none'}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          errorMessage={''}
          returnKeyType={'done'}
          contentContainerStyle={{marginBottom: vw(-10)}}
        />
        <CustomSeperator />
        {renderHorizontalData('Sub Total:', '$ 00.00')}
        {renderHorizontalData('Discount:', '$ 00.00')}
        {renderHorizontalData('Tax:', '$ 00.00')}
        {renderHorizontalData('Total:', '$ 00.00')}
      </ScrollView>
      <View style={styles.bttnFlex}>
        <CustomButton
          buttonText={strings.next}
          handleAction={() => {
            navigation.navigate(screensName.NewInvoicePreview);
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

export default NewInvoiceForm;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: colors.white,
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
