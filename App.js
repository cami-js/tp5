import React from 'react';
import { StyleSheet, ImageBackground, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeView, Personajes } from './src/views';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
          <Stack.Screen name="home" component={HomeView} />
          <Stack.Screen name="personajes" component={Personajes} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'relative',
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});