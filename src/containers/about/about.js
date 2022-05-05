import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';

import AboutIndex from './screens';
import AboutGalery from './screens/galery';

const AboutStack = createStackNavigator();



const About = () => {

    return (
        <AboutStack.Navigator initialRouteName='about/index' screenOptions={{
            ...TransitionPresets.SlideFromRightIOS,
            gestureEnabled: true,
            gestureDirection: 'horizontal'
        }}>
            <AboutStack.Screen name='about/index' component={AboutIndex} options={{ headerShown: false }} />
            <AboutStack.Screen name='about/galery' component={AboutGalery} options={{ headerTitle: 'Galery' }} />
        </AboutStack.Navigator>
    );
};

export default About;