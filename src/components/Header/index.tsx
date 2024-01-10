import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {colors, images, vh, vw} from '../../constants';

export interface NavigationType
  extends NativeStackNavigationProp<ParamListBase> {
  BackButtonPress: Function;
  onDownloadPress: Function;
  onSharePress: Function;
}
export interface RouteType {
  key: any;
  name: any;
  params: any;
  path: any;
}
export const Header = {
  // @desc - Header for whole application
  setNavigation: (
    navigation: NavigationType,
    title: string | undefined,
    renderRight?: Function,
    renderLeft?: Function,
    bottomText?: string | undefined,
    headerTextContainer?: ViewStyle | undefined,
    extraHeaderText?: string | undefined,
    extraHeaderTextStyle?: TextStyle | undefined,
  ) => {
    navigation.setOptions({
      headerTitle: () =>
        title ? (
          <View style={[styles.headerTextView, headerTextContainer]}>
            <Text numberOfLines={1} style={styles.titleText}>
              {title}
              {extraHeaderText && (
                <Text style={extraHeaderTextStyle}>{extraHeaderText}</Text>
              )}
            </Text>
            {bottomText && (
              <Text numberOfLines={1} style={styles.bottomText}>
                {bottomText}
              </Text>
            )}
          </View>
        ) : (
          <View />
        ),
      headerRight: () => (renderRight ? renderRight() : <View />),
      headerLeft: () =>
        renderLeft ? (
          renderLeft()
        ) : (
          <TouchableOpacity
            style={{
              marginLeft: vw(10),
              width: vw(35),
              height: vh(35),
              borderRadius: vw(10),
              backgroundColor: colors.green,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            hitSlop={{left: vw(25), right: vw(25), bottom: vw(25), top: vw(25)}}
            onPress={() => navigation.BackButtonPress()}>
            <Image source={images.arrow_left_light} style={styles.backButton} />
          </TouchableOpacity>
        ),
      headerStyle: {
        backgroundColor: colors.white,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowColor: colors.white,
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 5,
        borderBottomWidth: 0.5,
      },
      headerTitleAlign: 'center',
      headerTintColor: colors.white,
      headerBackVisible: false,
      headerShown: true,
    });
  },
};

const styles = StyleSheet.create({
  titleText: {
    textAlign: 'center',
    fontSize: vw(18),
    color: colors.lightBlack,
    letterSpacing: vw(0.3),
  },
  backButton: {
    width: vw(30),
    height: vw(30),
    resizeMode: 'contain',
  },
  bottomText: {
    textAlign: 'center',
    fontSize: vw(13),
    color: colors.grey,
  },
  headerTextView: {width: vw(210)},
});
