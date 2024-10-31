import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './login/login';
import SignupPage from './login/signup';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} options={{ title: '로그인' }} />
        <Stack.Screen name="Signup" component={SignupPage} options={{ title: '회원가입' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
