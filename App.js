
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";


import {createStackNavigator} from "@react-navigation/stack";
import Categories from './src/pages/Categories';
import Meals from './src/pages/Meals';
import Detail from './src/pages/Detail';

const Stack = createStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{
            headerShown: false,}} name="Categories" component={Categories} />
          <Stack.Screen name="Meals" component={Meals}/>
          <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>
      </NavigationContainer>

  );
}