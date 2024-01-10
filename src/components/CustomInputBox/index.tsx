import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {forwardRef} from 'react';
import {colors, images, vh, vw} from '../../constants';
import {
  isNullUndefined,
  nFixedLines,
  normalizeFirstSpace,
  normalizeSpaces,
  removeEmojis,
} from '../../utils/CommonFunction';
interface Props {
  contentContainerStyle?: any;
  onChangeText?: any;
  autoCapitalize?: any;
  secureTextEntry?: any;
  keyboardType?: any;
  placeholder?: string;
  value?: any;
  onSubmitEditing?: any;
  ref?: any;
  returnKeyType?: any;
  blurOnSubmit?: boolean;
  majorContainer?: ViewStyle;
  title?: any;
  image?: any;
  text?: any;
  maxLength?: any;
  multiline?: any;
  textInputStyle?: any;
  isMandatory?: boolean;
  onFocus?: Function;
  editable?: any;
  selectTextOnFocus?: any;
  renderExtra?: any;
  onBlur?: any;
  isrenderLeft?: Function;
  customInputBox?: any;
  isrenderRight?: Function;
  errorMessage?: string;
  autoCorrect?: boolean;
  errorMessageView?: ViewStyle;
  onPress?: Function;
  headingStyle?: ViewStyle;
  disabled?: boolean;
  autoFocus?: boolean;
  onCancel?: () => void;
  cancelImage?: any;
  onKeyPress?: any;
  isrenderLeftImg?: any;
  isrenderRightImg?: any;
  rightImgStyle?: any;
  disabledColor?: any;
}
const CustomInputBox = (props: Props, ref: any) => {
  const [toggleShow, setToggleShow] = React.useState(false);
  const [secureTextEntry, setSecureTextEntry] = React.useState(
    props.secureTextEntry,
  );

  const handleToggleText = () => {
    setToggleShow(!toggleShow);
    setSecureTextEntry(!secureTextEntry);
  };
  const renderPasswordToggle = () => (
    <TouchableOpacity
      onPress={handleToggleText}
      style={styles.passwordIconContainer}>
      <Image
        source={toggleShow ? images.eyeOpen : images.eyeClose}
        style={styles.passwordToggle}
        resizeMode={'contain'}
      />
    </TouchableOpacity>
  );
  return (
    <View style={[props.majorContainer, styles.majorContainer]}>
      {props.title && (
        <Text style={[styles.title, props.headingStyle]}>
          {props.title}
          {props.isMandatory && (
            <Text style={{color: colors.lightGrey, fontSize: vw(15)}}>*</Text>
          )}
        </Text>
      )}
      <TouchableOpacity
        activeOpacity={1}
        style={{
          ...styles.inputBoxView,
          ...props.contentContainerStyle,
          backgroundColor: props.disabled ? colors.whiteSmoke_ : colors.white,
          borderColor: isNullUndefined(props.errorMessage)
            ? colors.borderColor
            : colors.red,
        }}
        onPress={() => {
          ref?.current.focus();
          props.onPress && props.onPress();
        }}
        disabled={props.disabled}>
        {props.isrenderLeftImg && <Image source={props.isrenderLeftImg} />}
        {props.isrenderLeft && props.isrenderLeft()}
        <TextInput
          ref={ref}
          style={{
            ...styles.textInput,
            ...props.textInputStyle,
            alignSelf: props.multiline && 'flex-start',
            paddingTop: props.multiline && vh(5),
          }}
          placeholder={props.placeholder}
          keyboardType={props.keyboardType}
          value={props.value}
          onChangeText={text =>
            props.onChangeText(
              normalizeSpaces(removeEmojis(normalizeFirstSpace(text))),
            )
          }
          autoFocus={props.autoFocus}
          maxLength={props.maxLength}
          multiline={props.multiline}
          returnKeyType={props.returnKeyType}
          onSubmitEditing={() => props.onSubmitEditing()}
          autoCorrect={props.autoCorrect}
          editable={props.editable}
          placeholderTextColor={colors.borderColor}
          onBlur={props.onBlur}
          onKeyPress={e => props.onKeyPress && props.onKeyPress(e)}
          onFocus={() => props.onFocus && props.onFocus()}
          autoCapitalize={props.autoCapitalize || false}
          selectionColor={colors.primaryColor}
          secureTextEntry={secureTextEntry}
        />
        {props.isrenderRightImg && (
          <Image source={props.isrenderRightImg} style={props.rightImgStyle} />
        )}
        {props.isrenderRight && props.isrenderRight()}
        {props.secureTextEntry && renderPasswordToggle()}
      </TouchableOpacity>

      {typeof props.errorMessage !== 'undefined' ? (
        <View style={{...styles.errorMessageView, ...props.errorMessageView}}>
          {props.errorMessage !== '' && (
            <>
              <Image
                source={images.warning}
                style={{width: vw(20), height: vw(20)}}
                resizeMode={'contain'}
              />
              <Text style={styles.errorMessage} {...nFixedLines(2)}>
                {props.errorMessage}
              </Text>
            </>
          )}
        </View>
      ) : null}
    </View>
  );
};

export default forwardRef(CustomInputBox);

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    paddingVertical: vh(0),
    fontSize: vw(14),
    textAlign: 'left',
    color: colors.lightBlack,
  },
  majorContainer: {
    alignSelf: 'center',
  },
  inputBoxView: {
    flexDirection: 'row',
    borderRadius: vw(12),
    width: vw(332),
    height: vh(45),
    justifyContent: 'center',
    marginTop: vh(8),
    alignSelf: 'center',
    borderWidth: vw(1),
    alignItems: 'center',
    paddingHorizontal: vw(16),
    padding: vh(5),
  },
  errorMessage: {
    color: colors.red,
    marginLeft: vw(6),
    fontSize: vw(12),
  },
  errorMessageView: {
    width: '85%',
    alignSelf: 'flex-start',
    marginTop: vh(5),
    flexDirection: 'row',
    alignItems: 'center',
    height: vh(20),
    marginBottom: vh(5),
  },
  title: {
    color: colors.lightGrey,
    fontSize: vw(14),
  },
  cancelImage: {
    width: vw(14),
    height: vw(14),
    tintColor: colors.black,
    marginRight: vw(15),
  },
  passwordIconContainer: {
    height: vw(25),
    width: vw(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordToggle: {width: vw(25), height: vw(25)},
});
