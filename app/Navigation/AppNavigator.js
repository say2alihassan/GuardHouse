import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Components/Home';
import Head from '../Components/Main';
import ImageUpload from '../Components/ImageUpload';
import Countryinput from '../Components/Countryinput';
import DatePick from '../Components/DatePick';
const Stack = createNativeStackNavigator();
function AppStack() {
  return (
    <Stack.Navigator initialRouteName="home" headerMode={'none'}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="imageUpload" component={imageUpload} />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  const App = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <App.Navigator>
        <App.Screen
          name="Head"
          component={Head}
          options={{
            headerShown: false,
          }}
        />
        <App.Screen name="Home" component={Home} />
        <App.Screen name="Countryinput" component={Countryinput} />
        <App.Screen name="DatePick" component={DatePick} />
        <App.Screen name="ImageUpload" component={ImageUpload} />
      </App.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;

const styles = StyleSheet.create({});
