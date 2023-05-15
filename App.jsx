import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from "./src/Screens/Splash"
import Login from './src/Screens/Login';
import Intro from './src/Screens/Intro';
import HomeScreen from './src/Screens/HomeScreen';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash}  options={{ headerShown: false }} />
        <Stack.Screen name="Intro" component={Intro}   options={{ headerShown: false }} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}} />
    
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})