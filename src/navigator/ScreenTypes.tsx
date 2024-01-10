import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

/**
 * Stack Navigator types.
 */
export type RootStackParamList = {
  BottomTab: undefined;
  onboarding: undefined;
};

/**
 * RootStack all registered screens.
 */
export type Screens = 'BottomTab' | 'onboarding';

/**
 * Generic navigation props interface for all screens.
 */
type ScreensRouteProp = RouteProp<RootStackParamList, Screens>;
type ScreensNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  Screens
>;

export interface GenericNavigationProps {
  route?: ScreensRouteProp | undefined;
  navigation: ScreensNavigationProp;
}

export interface GenericNavigationPropOnly {
  navigation: ScreensNavigationProp;
}

export interface GenericRoutePropOnly {
  route: ScreensRouteProp;
}
