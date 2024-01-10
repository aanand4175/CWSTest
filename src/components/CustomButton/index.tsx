import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  Image,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {colors, images, vh, vw} from '../../constants';

type Props = {
  contentContainerStyle?: ViewStyle;
  buttonText: string;
  showLoader?: boolean;
  isDisabled?: boolean;
  textStyle?: TextStyle;
  handleAction: Function;
  rightimage?: any;
  leftimage?: any;
  RImageStyle?: any;
  LImageStyle?: any;
  isDefaultRImg?: boolean;
  isLoading?: boolean;
};

export default function CustomButton(props: Props) {
  const isDisabled = props.isDisabled || props.showLoader;
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: props.isLoading
            ? colors.lightBlue
            : colors.primaryColor,
        },
        props.contentContainerStyle,
      ]}
      onPress={() => props.handleAction()}
      disabled={isDisabled}
      activeOpacity={0.6}>
      {props.leftimage && (
        <Image
          source={props.leftimage}
          resizeMode={'contain'}
          style={props.LImageStyle}
        />
      )}
      <Text style={[styles.buttonText, props.textStyle]}>
        {props.buttonText}
      </Text>
      {props.rightimage && (
        <Image
          source={props.rightimage}
          resizeMode={'contain'}
          style={props.RImageStyle}
        />
      )}
      {!props.isDefaultRImg ? (
        <View />
      ) : props.isLoading ? (
        <View style={styles.loaderView}>
          <ActivityIndicator animating={props.isLoading} />
        </View>
      ) : (
        <Image
          source={images.button_nextlogo}
          resizeMode={'contain'}
          style={{width: vw(30), height: vh(30)}}
        />
      )}
    </TouchableOpacity>
  );
}

CustomButton.defaultProps = {
  textStyle: {},
  customStyle: {},
  showLoader: false,
  isDisabled: false,
  isDefaultRImg: true,
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: vw(16),
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: colors.white,
    flex: 1,
    textAlign: 'center',
  },
  container: {
    width: vw(271),
    height: vh(58),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: vw(12),
    marginTop: vh(20),
    paddingHorizontal: vw(10),
    backgroundColor: colors.primaryColor,
  },
  loaderView: {
    width: vw(30),
    height: vw(30),
    borderRadius: vw(15),
    backgroundColor: colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
