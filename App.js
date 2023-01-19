import { View, Text, TouchableOpacity } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Home from './src/Home';
// import About from './src/About';
// import Contact from './src/Contact';
import Product from './src/exam/Product';
import Basket from './src/exam/Basket';
import AppContext, { AppProvider } from "./src/exam/AppContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Product') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'Basket') {
                iconName = focused ? 'basket' : 'basket-outline';
              } else if (route.name === 'Contact') {
                iconName = focused ? 'call' : 'call-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              position: 'absolute',
              left: 20,
              right: 20,
              bottom: 20,
              borderRadius: 12,
              backgroundColor: '#121212',
              height: 65,
            },
            tabBarShowLabel: false
          })}
        >
          <Tab.Screen name="Product" component={Product} />
          <Tab.Screen name="Basket" component={Basket} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}