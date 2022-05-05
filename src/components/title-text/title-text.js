import { Text, StyleSheet } from 'react-native';
import React from 'react';

const style = StyleSheet.create({
    Title: {
        fontSize: 30,
        color: '#F00',
        textAlign: 'center',
        textTransform: 'capitalize'
    }
});

const TitleText = ({ content }) => (
    <Text style={style.Title}>{content}</Text>
);

export default TitleText;