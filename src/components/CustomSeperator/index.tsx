import {StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import {colors, vh, vw} from '../../constants';
interface Props {
  containerStyle?: ViewStyle;
}
const CustomSeperator = (props: Props) => {
  const {containerStyle} = props;
  return <View style={[styles.container, containerStyle]} />;
};

export default CustomSeperator;

const styles = StyleSheet.create({
  container: {
    marginVertical: vh(5),
    backgroundColor: colors.red,
    height: vh(1),
    alignSelf: 'center',
    width: vw(335),
  },
});
