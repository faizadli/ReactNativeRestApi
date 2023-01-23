import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Belajar from './src/learn_hooks/Belajar';
import BelajarUseState from './src/learn_hooks/BelajarUseState';
import BelajarUseContext from './src/learn_hooks/BelajarUseContext';
import BelajarBasket from './src/learn_hooks/BelajarBasket';
import BelajarFancyAlerts from './src/learn_hooks/BelajarFancyAlerts';

import AppContext, { AppProvider } from "./src/learn_hooks/AppContext";
import { View, Text } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Belajar" component={Belajar} options={{ title: "Basic Hooks" }}/>
          <Stack.Screen name="BelajarUseState" component={BelajarUseState} options={{ title: "useState" }}/>
          <Stack.Screen name="BelajarUseContext" component={BelajarUseContext} options={{ title: "useContext" }}/>
          <Stack.Screen name="BelajarBasket" component={BelajarBasket} options={({ route }) => ({ title: `Total Quantity : ${route.params.qty}`})} />
          <Stack.Screen name="BelajarFancyAlerts" component={BelajarFancyAlerts} options={{ title: "FancyAlerts" }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  )
}

export default App;
