import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTabNavigator';
import Sigin from '../screen/Onboarding/Sigin';
import Registration from '../screen/Onboarding/Registration';
import {SplashScreen} from '../screen/SplashScreen';
import {screensName} from '../constants';
import CustomAlert from '../components/CustomAlert';

const Stack = createNativeStackNavigator();
const OnboadingStack = createNativeStackNavigator();

const onboarding = () => {
  return (
    <OnboadingStack.Navigator>
      <OnboadingStack.Screen
        name="Registration"
        component={Registration}
        options={{headerShown: false}}
      />
      <OnboadingStack.Screen
        name="Signin"
        component={Sigin}
        options={{headerShown: false}}
      />
    </OnboadingStack.Navigator>
  );
};
const Rootnavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="onboarding"
            component={onboarding}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BottomTab"
            component={BottomTab}
            options={{headerShown: false}}
          />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            headerShown: false,
            presentation: 'transparentModal',
          }}>
          <Stack.Screen
            name={screensName.CustomAlert}
            component={CustomAlert}
            options={{
              animation: 'slide_from_bottom',
              headerShown: false,
              headerShadowVisible: false,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Rootnavigator;
