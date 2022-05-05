/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './src/containers/home/home';
import Demo from './src/containers/demo/demo';
import About from './src/containers/about/about';


const TabNav = createMaterialBottomTabNavigator();

const style = StyleSheet.create({
  Main: {
    flex: 1
  }
});

const App = () => {

  return (
    <SafeAreaView style={style.Main}>
      <StatusBar backgroundColor='#F00A' />
      {/* ↓ Permet d'utiliser React-Navigation */}
      <NavigationContainer>
        {/* ↓ Utilisation du bottom nav */}
        <TabNav.Navigator initialRouteName='home'>
          <TabNav.Screen name='home' component={Home} options={{
            tabBarLabel: 'Accueil',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home-flood" color={color} size={26} />
            ),
          }} />
          <TabNav.Screen name='demo' component={Demo} options={{
            tabBarLabel: 'Demo',
            tabBarIcon: ({ color }) => (
              <Feather name="feather" color={color} size={26} />
            ),
          }} />
          <TabNav.Screen name='about' component={About} options={{
            tabBarLabel: 'A propos',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="information-outline" color={color} size={26} />
            ),
          }} />
        </TabNav.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};


export default App;
