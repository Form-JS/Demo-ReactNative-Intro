import { Text, View, Button } from 'react-native';
import React from 'react';
import TitleText from '../../../components/title-text/title-text';
import MainStyle from '../../../main-style';
import { useNavigation } from '@react-navigation/native';

const AboutIndex = () => {

    const navigation = useNavigation();

    const handleClickGalery = () => {
        console.log('Click Galery');
        navigation.navigate('about/galery');
    };

    return (
        <View style={MainStyle.Screen}>
            <TitleText content='A Propos' />
            <Text>Zaza Vanderquack &amp; Della Duck</Text>
            <Button
                title='Voir la galerie'
                onPress={handleClickGalery}
            />
        </View>
    );
};

export default AboutIndex;