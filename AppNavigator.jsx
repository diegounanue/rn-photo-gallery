// Create a file named AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import CameraScreen from './Components/CameraScreen/CameraScreen';
import PreviewScreen from './Components/PreviewScreen/PreviewScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Preview" component={PreviewScreen} />
      </Stack.Navigator>
  );
}

export default AppNavigator;
