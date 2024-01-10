import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {colors, screensName, strings, vh, vw} from '../../constants';
import {Header, NavigationType} from '../../components/Header';
import InvoiceCard from '../../components/InvoiceCard';
import {INVOICE_DATA} from './Invoice';
import CustomButton from '../../components/CustomButton';
import CustomSeperator from '../../components/CustomSeperator';
interface Props {
  navigation: NavigationType;
}
const NewInvoicePreview = (props: Props) => {
  const {navigation} = props;
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
        <InvoiceCard
          container={{backgroundColor: colors.white, marginLeft: vw(20)}}
          data={INVOICE_DATA[0]}
        />
        <CustomButton
          buttonText="Add"
          contentContainerStyle={{
            width: vw(80),
            alignSelf: 'flex-end',
            backgroundColor: colors.orange1,
            height: vh(45),
            marginRight: vh(20),
          }}
          handleAction={() => {}}
          isDefaultRImg={false}
        />
        <CustomSeperator
          containerStyle={{marginTop: vh(20), marginBottom: vh(30)}}
        />
        {renderHorizontalData('Sub Total:', '$ 00.00')}
        {renderHorizontalData('Discount:', '$ 00.00')}
        {renderHorizontalData('Total:', '$ 00.00')}
        <CustomButton
          buttonText="Add Note & terms"
          contentContainerStyle={{
            backgroundColor: colors.orange1,
            height: vh(45),
            marginTop: vh(40),
            marginBottom: vh(40),
          }}
          handleAction={() => {}}
          isDefaultRImg={false}
        />
        <CustomSeperator
          containerStyle={{marginTop: vh(20), marginBottom: vh(30)}}
        />
        {renderHorizontalData('Company:', 'Company Name')}
        {renderHorizontalData('Phone:', '8825314845')}
      </ScrollView>
      <View style={styles.bttnFlex}>
        <CustomButton
          buttonText={strings.save}
          handleAction={() => {
            navigation.navigate(screensName.InvoiceGenerate);
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

export default NewInvoicePreview;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: vh(20),
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
