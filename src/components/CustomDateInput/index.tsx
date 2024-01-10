import moment from 'moment';
import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TextStyle,
  StyleSheet,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Style from './style';
import {colors, images, vh, vw} from '../../constants';

/**
 * custom imports
 */

type Props = {
  label?: string;
  value?: string;
  fieldName?: any;
  container?: Object;
  majorContainer?: any;
  placeholder?: string;
  onChangeText: Function;
  titleStyle?: TextStyle | Array<TextStyle>;
  hasError?: string;
  isMandatory?: boolean;
  isDisable?: boolean;
  minDate?: any;
  maxDate?: any;
  dateFormat?: string;
  onPress?: Function;
  renderExtra?: Function;
  errorStyle?: any;
};

const CustomDateInput = (props: Props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
    props.onPress && props.onPress();
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setDatePickerVisibility(false);

    props.onChangeText(moment(date).format(props.dateFormat));
  };
  const {container} = props;
  return (
    <View style={props.majorContainer}>
      <Text style={[Style.textInputLabel, props.titleStyle]}>
        {props.label}

        {props.isMandatory && (
          <Text style={{color: colors.lightGrey, fontSize: vw(15)}}>{'*'}</Text>
        )}
      </Text>
      <TouchableOpacity
        activeOpacity={1}
        onPress={showDatePicker}
        disabled={props.isDisable}
        style={{
          ...Style.container,
          ...container,
          backgroundColor: props.isDisable ? colors.whiteSmoke_ : colors.white,
          borderColor: props.hasError !== '' ? colors.red : colors.borderColor,
        }}>
        <Text
          numberOfLines={1}
          style={[
            Style.textInput,
            {
              color:
                props.value === '' ? colors.placeHolderColor : colors.black,
            },
          ]}>
          {props.value === '' ? props.placeholder : props.value}
        </Text>

        <View style={Style.passwordIconContainer}>
          <Image source={images.calendar_light} />
        </View>
      </TouchableOpacity>
      {props.renderExtra && props.renderExtra()}
      {typeof props.hasError !== 'undefined' ? (
        <View style={[styles.errorStyle, props.errorStyle]}>
          {props.hasError !== '' && (
            <>
              <Image
                source={images.warning}
                style={styles.warningImage}
                resizeMode={'contain'}
              />
              <Text style={styles.errorText}>{props.hasError}</Text>
            </>
          )}
        </View>
      ) : null}
      <DateTimePickerModal
        testID="datePicker"
        isVisible={isDatePickerVisible}
        mode={props.fieldName}
        date={
          props.value === ''
            ? new Date()
            : new Date(moment(props.value, props.dateFormat))
        }
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        maximumDate={props.maxDate}
        minimumDate={props.minDate}
        isDarkModeEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    width: vw(310),

    fontSize: vw(13),
    color: colors.red,
    textAlign: 'left',
    left: vw(5),
  },
  errorStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: vh(25),
    paddingHorizontal: vw(20),
  },
  warningImage: {width: vw(25), height: vh(25)},
});

CustomDateInput.defaultProps = {
  container: {},
  placeholder: '',
  majorContainer: {},
  dateFormat: 'DD-MMM-YYYY HH:mm',
};

export default CustomDateInput;
