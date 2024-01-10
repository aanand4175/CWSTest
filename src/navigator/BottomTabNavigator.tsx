import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screen/Dashboard/Dashboard';
import Invoice from '../screen/Invoice/Invoice';
import Setting from '../screen/Setting/Setting';
import Profile from '../screen/Profile/Profile';
import {Image, View} from 'react-native';
import {colors, images, vh, vw} from '../constants';
import {styles} from './navigatorStyle';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewInvoice from '../screen/Invoice/NewInvoice';
import NewInvoiceForm from '../screen/Invoice/NewInvoiceForm';
import NewInvoicePreview from '../screen/Invoice/NewInvoicePreview';
import InvoiceGenerate from '../screen/Invoice/InvoiceGenerate';

const Tab = createBottomTabNavigator();
const InvoiceTab = createNativeStackNavigator();
const invoice = () => {
  return (
    <InvoiceTab.Navigator>
      <InvoiceTab.Screen
        name="Invoice"
        component={Invoice}
        options={{headerShown: false}}
      />
      <InvoiceTab.Screen
        name="NewInvoice"
        component={NewInvoice}
        options={{headerShown: false}}
      />
      <InvoiceTab.Screen
        name="NewInvoiceForm"
        component={NewInvoiceForm}
        options={{headerShown: false}}
      />
      <InvoiceTab.Screen
        name="NewInvoicePreview"
        component={NewInvoicePreview}
        options={{headerShown: false}}
      />
      <InvoiceTab.Screen
        name="InvoiceGenerate"
        component={InvoiceGenerate}
        options={{headerShown: false}}
      />
    </InvoiceTab.Navigator>
  );
};
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: vh(70),
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.focusContainer}>
                <Image
                  source={images.dashboard}
                  style={[styles.focustabIconStyle]}
                />
              </View>
            ) : (
              <Image
                source={images.dashboard}
                style={[
                  styles.tabIconStyle,
                  {tintColor: focused ? colors.orange : colors.lightBlack},
                ]}
              />
            ),
        }}
      />
      <Tab.Screen
        name="invoice"
        component={invoice}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.focusContainer}>
                <Image
                  source={images.invoice}
                  style={[styles.focustabIconStyle]}
                />
              </View>
            ) : (
              <Image
                source={images.invoice}
                style={[
                  styles.tabIconStyle,
                  {tintColor: focused ? colors.orange : colors.lightBlack},
                ]}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.focusContainer}>
                <Image
                  source={images.setting}
                  style={[styles.focustabIconStyle]}
                />
              </View>
            ) : (
              <Image
                source={images.setting}
                style={[
                  styles.tabIconStyle,
                  {tintColor: focused ? colors.orange : colors.lightBlack},
                ]}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.focusContainer}>
                <Image
                  source={images.user}
                  style={[styles.focustabIconStyle]}
                />
              </View>
            ) : (
              <Image
                source={images.user}
                style={[
                  styles.tabIconStyle,
                  {tintColor: focused ? colors.orange : colors.lightBlack},
                ]}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
