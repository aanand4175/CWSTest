import {StyleSheet} from 'react-native';
import {colors, vh, vw} from '../constants';

export const styles = StyleSheet.create({
  tabBarContainer: {
    borderTopColor: colors.lightWhite,
    borderTopWidth: vw(0.5),
    backgroundColor: colors.white2,
    flexShrink: 0,
    paddingVertical: vw(8),
  },
  tabBarLabelStyle: {
    fontSize: vw(13),
    lineHeight: vh(23),
    letterSpacing: vw(0.3),
  },
  tabIconStyle: {
    width: vw(26),
    height: vh(26),
    resizeMode: 'contain',
  },
  focustabIconStyle: {
    width: vw(20),
    height: vh(20),
    resizeMode: 'contain',
  },
  focusContainer: {
    width: vw(40),
    height: vw(40),
    borderRadius: vw(20),
    backgroundColor: colors.orange1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
