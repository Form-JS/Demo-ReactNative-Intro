import { View, Text } from 'react-native';
import React from 'react';
import MainStyle from '../../main-style';
import TitleText from '../../components/title-text/title-text';

const Home = () => {

    return (
        <View style={MainStyle.Screen}>
            <TitleText content='Accueil' />
            <Text>Benoit !</Text>
        </View>
    );
};

export default Home;