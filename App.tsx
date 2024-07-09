import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import ProductListScreen from './src/screens/ProductListScreen';
import CartScreen from './src/screens/CartScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import UserProfileScreen from './src/screens/UserProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
  </Stack.Navigator>
);

const ProductStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="ProductList" component={ProductListScreen} />
    <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
  </Stack.Navigator>
);

const CartStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Cart" component={CartScreen} />
    <Stack.Screen name="Checkout" component={CheckoutScreen} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="UserProfile" component={UserProfileScreen} />
  </Stack.Navigator>
);

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Products" component={ProductStack} />
        <Tab.Screen name="Cart" component={CartStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
