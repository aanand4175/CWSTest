import {
  FlatList,
  Image,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {Header, NavigationType} from '../../components/Header';
import {colors, images, screensName, strings, vh, vw} from '../../constants';
import CustomInputBox from '../../components/CustomInputBox';
import CustomButton from '../../components/CustomButton';
import InvoiceCard from '../../components/InvoiceCard';
interface Props {
  navigation: NavigationType;
}
const Invoice = (props: Props) => {
  const {navigation} = props;
  const input1_ref = React.useRef();
  useLayoutEffect(() => {
    Header.setNavigation(navigation, strings.Invoice, renderRight);
    navigation.BackButtonPress = () => {};
  }, []);

  const renderRight = () => {
    return (
      <TouchableOpacity
        style={styles.filterBttn}
        onPress={() => {}}
        activeOpacity={0.8}>
        <Image source={images.filter} style={styles.filterIcon} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperBttnView}>
        <CustomInputBox
          title={''}
          placeholder={strings.placeholderSearch}
          ref={input1_ref}
          value={''}
          onChangeText={(val: string) => {}}
          autoCapitalize={'none'}
          returnKeyType={'done'}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          errorMessage={''}
          contentContainerStyle={styles.searchContainer}
          isrenderLeft={() => {
            return <Image source={images.search} style={styles.search} />;
          }}
        />
        <CustomButton
          handleAction={() => {
            navigation.navigate(screensName.NewInvoice);
          }}
          contentContainerStyle={styles.newInvoice}
          buttonText={strings.newInvoice}
          isDefaultRImg={false}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: vw(20)}}>
        <View style={styles.midContainer}>
          <View style={styles.midContainerHeading}>
            <Text style={styles.headingText}>{strings.client}</Text>
            <Text style={styles.headingText}>{strings.amount}</Text>
          </View>

          <FlatList
            data={INVOICE_DATA}
            renderItem={({item}) => {
              return <InvoiceCard data={item} />;
            }}
          />
        </View>
      </ScrollView>
      <View style={styles.lowerBttnView}>
        <CustomButton
          buttonText={strings.export}
          contentContainerStyle={styles.exportBttn}
          handleAction={() => {}}
          isDefaultRImg={false}
          leftimage={images.export}
          LImageStyle={styles.exportImg}
        />
        <CustomButton
          buttonText={strings.Invoice}
          contentContainerStyle={styles.invoice}
          handleAction={() => {}}
          isDefaultRImg={false}
          leftimage={images.plus}
          LImageStyle={styles.plus}
        />
      </View>
    </SafeAreaView>
  );
};

export default Invoice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  filterBttn: {
    marginRight: vw(10),
    width: vw(35),
    height: vw(35),
    borderRadius: vw(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.orange1,
  },
  filterIcon: {
    width: vw(15),
    height: vh(15),
    tintColor: colors.white,
  },
  searchContainer: {
    width: vw(200),
    marginTop: vh(20),
  },
  newInvoice: {
    width: vw(125),
    backgroundColor: colors.green,
    height: vh(45),
    marginTop: vh(-10),
  },
  upperBttnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: vw(335),
    alignSelf: 'center',
    alignItems: 'center',
  },
  midContainer: {
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
  midContainerHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: vw(50),
    backgroundColor: colors.green,
    borderTopRightRadius: vw(10),
    borderTopLeftRadius: vw(10),
    height: vh(40),
    alignItems: 'center',
  },
  headingText: {fontSize: vw(16), fontWeight: '900', color: colors.white},
  lowerBttnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: vw(335),
    alignSelf: 'center',
    alignItems: 'center',
    paddingBottom: vw(20),
  },
  search: {width: vw(25), height: vw(25)},
  exportBttn: {
    width: vw(110),
    height: vh(45),
    backgroundColor: colors.orange,
  },
  exportImg: {width: vw(15), height: vw(15), tintColor: colors.white},
  invoice: {
    width: vw(110),
    height: vh(45),
    backgroundColor: colors.green,
  },
  plus: {
    width: vw(15),
    height: vw(15),
    tintColor: colors.white,
  },
});

export const INVOICE_DATA = [
  {
    id: 1,
    name: 'Client Name',
    email: 'test@gmail.com',
    date1: '28-12-2023',
    date2: '28-12-2023',
    cost: '16759.00',
  },
  {
    id: 2,
    name: 'Client Name',
    email: 'test@gmail.com',
    date1: '28-12-2023',
    date2: '28-12-2023',
    cost: '16759.00',
  },
  {
    id: 3,
    name: 'Client Name',
    email: 'test@gmail.com',
    date1: '28-12-2023',
    date2: '28-12-2023',
    cost: '16759.00',
  },
];
