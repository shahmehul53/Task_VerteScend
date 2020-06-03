//define routes here for react-navigation
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './scenes/LoginScreen';
import SignUpScreen from './scenes/SignUpScreen';
import HomeScreen from './scenes/HomeScreen';
import ViewScreen from './scenes/ViewScreen';
import ViewUser from './scenes/ViewUser';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />

        <Stack.Screen name="ViewAll" component={ViewScreen} />
        <Stack.Screen name="ViewUser" component={ViewUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
