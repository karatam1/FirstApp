import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home'
import About from './src/screens/About'
import Login from './src/screens/Login'
import Results from './src/screens/Results'

function App():React.JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Text> 
          Testing this works, Hopefully
        </Text>
      </View>
    </SafeAreaView>
  );
}

// ----------------------TESTING OUT A NEW VERSION----------------------------------
const Stack = createNativeStackNavigator();

function App2():React.JSX.Element {
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen
          name = "Login"
          component = {Login}
          options={{ title: 'FirstApp'}}
        />
        <Stack.Screen
          name = "Home"
          component = {Home}
          options={{ title: 'Overview'}}
        />
        <Stack.Screen
          name = "About"
          component = {About}
        />
        <Stack.Screen
          name = "Results"
          component = {Results}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App2;