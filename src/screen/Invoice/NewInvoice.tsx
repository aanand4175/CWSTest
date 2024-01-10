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
import CustomButton from '../../components/CustomButton';
import CustomDropDown from '../../components/CustomDropDown';
import CustomDateInput from '../../components/CustomDateInput';
import CustomInputBox from '../../components/CustomInputBox';
interface Props {
  navigation: NavigationType;
}
const NewInvoice = (props: Props) => {
  const {navigation} = props;
  const input1_ref = React.useRef();
  const input2_ref = React.useRef();
  useLayoutEffect(() => {
    Header.setNavigation(navigation, 'New Invoice');
    navigation.BackButtonPress = () => {
      navigation.goBack();
    };
  }, []);
  return (
    <SafeAreaView style={styles.continer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: vw(20)}}>
        <CustomInputBox
          title={'Invoice #'}
          placeholder={'000000'}
          ref={input1_ref}
          value={''}
          onChangeText={(val: string) => {}}
          autoCapitalize={'none'}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          errorMessage={''}
          returnKeyType={'done'}
          contentContainerStyle={{marginBottom: vw(-20)}}
        />
        <CustomDropDown
          tittle={'Client:'}
          placeholder={'Client'}
          onPress={() => {}}
          inputText={''}
          errorMessage={''}
        />
        <CustomDateInput
          label={'Invoice Date:'}
          placeholder={'28/12/2023'}
          fieldName="date"
          onChangeText={(data: any) => {}}
          value={''}
          dateFormat={'DD-MMM-YYYY'}
          hasError={''}
        />
        <CustomDropDown
          tittle={'Discount Type:'}
          placeholder={'Select Discount Type'}
          onPress={() => {}}
          inputText={''}
          errorMessage={''}
        />
        <CustomInputBox
          title={'Discount:'}
          placeholder={'0'}
          ref={input2_ref}
          value={''}
          onChangeText={(val: string) => {
            Keyboard.dismiss();
          }}
          autoCapitalize={'none'}
          blurOnSubmit={false}
          onSubmitEditing={() => {}}
          errorMessage={''}
          returnKeyType={'next'}
          contentContainerStyle={{marginBottom: vw(-20)}}
        />
        <CustomDateInput
          label={'Due Date:'}
          placeholder={'28/12/2023'}
          fieldName="date"
          onChangeText={(data: any) => {}}
          value={''}
          dateFormat={'DD-MMM-YYYY'}
          hasError={''}
        />
        <CustomDropDown
          tittle={'Currencies:'}
          placeholder={'$ Us Dollar'}
          onPress={() => {}}
          inputText={''}
          errorMessage={''}
        />
      </ScrollView>
      <View style={styles.bttnFlex}>
        <CustomButton
          buttonText={strings.next}
          handleAction={() => {
            navigation.navigate(screensName.NewInvoiceForm);
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

export default NewInvoice;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  midContainer: {
    marginTop: vh(20),
    paddingBottom: vw(20),
    height: 'auto',
    backgroundColor: colors.white,
    width: vw(335),
    alignSelf: 'center',
    borderRadius: vw(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 2,
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
