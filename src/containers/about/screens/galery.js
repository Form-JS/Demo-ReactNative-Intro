import React from 'react';
import { View, Image, ScrollView } from 'react-native';

import ZazaImage from '../images/zaza_vanderquack.png';
import DellaImage from '../images/della_duck.png';
import MainStyle from '../../../main-style';

const AboutGalery = () => {


    return (
        <View style={MainStyle.Screen}>
            <ScrollView>
                <Image source={ZazaImage} style={{ width: 500, height: 400, }} />
                <Image source={DellaImage} style={{ width: 500, height: 400 }} />
            </ScrollView>
        </View>
    );
};

export default AboutGalery;