import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import HomeScreen from '../features/home/HomeScreen';

const Stack = createNativeStackNavigator<AppNavigatorParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

type AppNavigatorParamList = {
  Home: undefined;
};
