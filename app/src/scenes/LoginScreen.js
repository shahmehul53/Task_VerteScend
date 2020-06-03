import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
