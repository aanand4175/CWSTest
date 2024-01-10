import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {isNullUndefined, nFixedLines} from '../../utils/CommonFunction';
import {colors, images, vh, vw} from '../../constants';

interface props {
  tittle?: string;
  isMandatory?: boolean;
  onPress: any;
  inputText?: string;
  tittleStyle?: ViewStyle;
  image?: any;
  contentContainerStyle?: ViewStyle;
  isDisabled?: boolean;
  placeholder: string;
  activeOpacity?: any;
  errorMessage?: string;
  onPressCross?: any;
  itemTitleStyle?: any;
  onPressCrossStyle?: any;
  placeholderStyle?: any;
  crossStyle?: any;
  downArrowStyle?: any;
  renderMultipleInput?: Function;
  dataLength?: Number;
  renderExtra?: Function;
  errorContainer?: any;
}

const CustomDropDown = (props: props) => {
  return (
    <>
      {props.tittle && (
        <Text
          style={{...styles.tittleText, ...props.tittleStyle}}
          numberOfLines={1}>
          {props.tittle}
          {props.isMandatory && (
            <Text style={{color: colors.lightGrey, fontSize: vw(15)}}>*</Text>
          )}
        </Text>
      )}
      <TouchableOpacity
        activeOpacity={props.activeOpacity || 0.8}
        style={
          props.isDisabled
            ? {
                ...styles.inputStyle,
                ...props.contentContainerStyle,
                backgroundColor: colors.whiteSmoke,
                borderColor:
                  props.errorMessage !== '' ? colors.red : colors.borderColor,
              }
            : {
                ...styles.inputStyle,
                ...props.contentContainerStyle,
                borderColor:
                  props.errorMessage !== '' ? colors.red : colors.borderColor,
              }
        }
        disabled={props.isDisabled}
        onPress={() => props.onPress()}>
        {props.renderMultipleInput ? (
          props.dataLength === 0 ? (
            <Text
              {...nFixedLines(1)}
              style={{
                ...styles.itemTitle,
                ...props.placeholderStyle,
                color: colors.placeHolderColor,
              }}>
              {props.placeholder}
            </Text>
          ) : (
            props.renderMultipleInput()
          )
        ) : isNullUndefined(props.inputText) ? (
          <Text
            {...nFixedLines(1)}
            style={{
              ...styles.itemTitle,
              ...props.placeholderStyle,
              color: colors.placeHolderColor,
            }}>
            {props.placeholder}
          </Text>
        ) : (
          <Text
            {...nFixedLines(1)}
            style={{...styles.itemTitle, ...props.itemTitleStyle}}>
            {props.inputText}
          </Text>
        )}
        <TouchableOpacity
          onPress={
            props.isDisabled === false ||
            isNullUndefined(props.isDisabled) === false
              ? props.onPressCross
              : props.onPressCross
          }
          style={{...props.onPressCrossStyle}}>
          {props.image ? (
            <Image source={props.image} style={props.crossStyle} />
          ) : (
            <Image
              source={images.downArrow}
              resizeMode="contain"
              style={{...props.downArrowStyle}}
            />
          )}
        </TouchableOpacity>
      </TouchableOpacity>
      {props.renderExtra && props.renderExtra()}
      {typeof props.errorMessage !== 'undefined' ? (
        <View style={[styles.errorContainer, props.errorContainer]}>
          {props.errorMessage !== '' && (
            <>
              <Image
                source={images.warning}
                style={{width: vw(20), height: vh(20)}}
                resizeMode={'contain'}
              />
              <Text {...nFixedLines(2)} style={styles.errorText}>
                {props.errorMessage}
              </Text>
            </>
          )}
        </View>
      ) : null}
    </>
  );
};
const styles = StyleSheet.create({
  inputStyle: {
    width: vw(332),
    height: vh(45),
    borderWidth: vw(1),
    backgroundColor: colors.white,
    borderRadius: vw(10),
    alignSelf: 'center',
    marginTop: vh(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: vw(13),
  },
  itemTitle: {
    fontSize: vw(13),
    color: colors.black,
    marginTop: vh(2),
    width: vw(285),
  },
  errorText: {
    width: vw(310),
    fontSize: vw(13),
    color: colors.red,
    textAlign: 'left',
    left: vw(5),
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: vh(25),
    paddingHorizontal: vw(20),
  },
  tittleText: {
    width: vw(332),
    color: colors.lightGrey,
    fontSize: vw(14),
    alignSelf: 'center',
    marginTop: vh(10),
  },
});
export default CustomDropDown;
