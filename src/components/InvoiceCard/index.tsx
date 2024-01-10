import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, images, vh, vw} from '../../constants';
interface Props {
  data: any;
  container?: any;
}
const InvoiceCard = (props: Props) => {
  const {name, email, date1, date2, cost} = props.data;
  return (
    <View style={[styles.container, props.container]}>
      <View
        style={{
          width: vw(25),
          height: vw(25),
          borderRadius: vw(12.5),
          backgroundColor: colors.aquaBlue,
          marginLeft: vh(10),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={images.user} style={{width: vw(15), height: vw(15)}} />
      </View>
      <View style={{marginLeft: vw(15)}}>
        <Text style={{fontSize: vw(10)}}>{name}</Text>
        <Text style={{fontSize: vw(10)}}>{email}</Text>
      </View>
      <View style={{marginLeft: vw(15)}}>
        <View
          style={{
            width: vw(80),
            backgroundColor: colors.orange,
            alignItems: 'center',
            borderRadius: vw(10),
          }}>
          <Text>{date1}</Text>
        </View>
        <View
          style={{
            width: vw(80),
            backgroundColor: colors.orange,
            alignItems: 'center',
            borderRadius: vw(10),
            marginTop: vh(2),
          }}>
          <Text>{date2}</Text>
        </View>
      </View>
      <Text style={{marginLeft: vw(10)}}>{`$ ${cost}`}</Text>
      <Image
        source={images.dots}
        style={{width: vw(15), height: vh(15), marginLeft: vw(10)}}
      />
    </View>
  );
};

export default InvoiceCard;

const styles = StyleSheet.create({
  container: {
    width: vw(335),
    height: vh(45),
    backgroundColor: colors.orange1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: vw(10),
    borderBottomColor: colors.green,
    borderBottomWidth: vw(1),
  },
});
