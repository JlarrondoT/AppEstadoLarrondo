import React from 'react';
import {Platform, View} from 'react-native';
import {createNativeStackNavigator, NativeStackNavigationOptions} from '@react-navigation/native-stack';
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from '../screens/home/index';
import Category from '../screens/category/index';
import Product from '../screens/product/index';
import {colors} from '../constants/themes';
import Cart from "../screens/cart";
import IonicIcons from 'react-native-vector-icons/Ionicons';

const TabStack = createBottomTabNavigator();
const BuyingStackNavigation = createNativeStackNavigator();
const CartStackNavigation = createNativeStackNavigator();

const screenOpt = {
    headerStyle: {
        backgroundColor:
            Platform.OS === 'android'
                ? colors.primaryColor
                : colors.accentColor,
    },
    headerTintColor:
        Platform.OS === 'android' ? 'white' : colors.primaryColor,
    headerTitleStyle: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 17,
    },
} as NativeStackNavigationOptions;

const BuyingStack = () => {
    return (
        <BuyingStackNavigation.Navigator
            initialRouteName="Home"
            screenOptions={ screenOpt }>
            <BuyingStackNavigation.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
            />
            <BuyingStackNavigation.Screen name='Category'
                                          component={Category}
            />
            <BuyingStackNavigation.Screen name='Product' component={Product} />
        </BuyingStackNavigation.Navigator>
        )

}
const CartStack = () => {
    return (
        <CartStackNavigation.Navigator
            initialRouteName="Cart"
            screenOptions={ screenOpt }>
            <CartStackNavigation.Screen name='Cart' component={Cart} />
        </CartStackNavigation.Navigator>
    )
}

const MainNavigator = () => {
  return (
      <TabStack.Navigator>
          <TabStack.Screen
              name='Buying'
              component={BuyingStack}
              options={{
                  tabBarIcon: ({focused}) => {
                      return <IonicIcons name={focused ? 'home' : 'home-outline' } size={20}  />
                  },
                  title: 'Shop',
              }}/>
          <TabStack.Screen name='Cart' component={CartStack} options={{
              tabBarIcon: ({focused}) => {
                  return <IonicIcons name={focused ? 'cart' : 'cart-outline' } size={20}  />
              },
              title: 'Cart',
          }}/>
      </TabStack.Navigator>
  );
};

export default MainNavigator;
