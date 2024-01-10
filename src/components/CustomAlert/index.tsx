/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {isNullUndefined} from '../../utils/CommonFunction';
import {colors, strings, vh, vw} from '../../constants';
import {NavigationType} from '../Header';
import {useAndroidBackButton} from '../../hooks/behaviour';

interface Props {
  navigation: NavigationType;
  route: any;
}

const CustomAlert = (props: Props) => {
  const {navigation} = props;
  const {
    title,
    message,
    okText,
    cancelText,
    cancelFunction,
    okFunction,
    double,
    isFailed,
  } = props.route.params;

  const goBack = () => {
    navigation?.pop();
  };

  let backAction = () => {
    goBack();
    return true;
  };
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      BackHandler.addEventListener('hardwareBackPress', backAction);
    });
    const _unsubscribe = navigation.addListener('blur', () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    });
  }, []);

  useAndroidBackButton(() => {
    navigation.goBack();
  }, []);

  if (double) {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.mainContainer}>
          <Text
            style={{
              ...styles.titleText,
              marginTop: !isNullUndefined(title) ? vh(24) : vh(0),
            }}>
            {title}
          </Text>
          <Text style={styles.messageText}> {message} </Text>
          <View style={styles.separator} />
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                navigation?.pop();
                cancelFunction();
              }}
              activeOpacity={0.6}
              style={styles.buttonView}>
              <Text style={styles.cancelButtonText}>
                {cancelText || strings.cancel}
              </Text>
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity
              onPress={() => {
                navigation?.pop();
                okFunction();
              }}
              activeOpacity={0.6}
              style={styles.buttonView}>
              <Text style={styles.okButtonText}> {okText || strings.ok} </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.mainContainer}>
          <Text
            style={{
              ...styles.titleText,
              marginTop: !isNullUndefined(title) ? vh(24) : vh(0),
            }}>
            {title}
          </Text>

          <Text style={styles.messageText}> {message} </Text>
          <View style={styles.separator} />
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
              okFunction();
            }}
            activeOpacity={0.6}
            style={styles.buttonView}>
            <Text style={styles.okButtonText}> {okText || strings.ok} </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.borderColor,
  },
  mainContainer: {
    width: vw(305),
    backgroundColor: colors.white,
    borderRadius: vw(8),
  },
  titleText: {
    fontSize: vw(14),
    color: colors.black,
    textAlign: 'center',
    alignSelf: 'center',
  },
  messageText: {
    fontSize: vw(12),
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 20,
    color: colors.black80per,
    width: vw(273),
    alignSelf: 'center',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: colors.chinese_silver,
    opacity: 0.6,
  },
  line: {
    backgroundColor: colors.chinese_silver,
    marginTop: 5,
    width: 1,
    height: 35,
    opacity: 0.6,
  },
  row: {
    flexDirection: 'row',
  },
  buttonView: {
    width: vw(152.5),
    height: 44,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: vw(14),
    color: colors.black,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  okButtonText: {
    fontSize: vw(16),
    color: colors.red3,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});

export default CustomAlert;
