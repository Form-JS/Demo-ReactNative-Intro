import { View, Button, Text, TextInput, FlatList } from 'react-native';
import React, { useState, useRef } from 'react';
import MainStyle from '../../main-style';
import TitleText from '../../components/title-text/title-text';
import uuid from 'react-native-uuid';

const Demo = () => {

    const [messageInput, setMessageInput] = useState('');
    const [messages, setMessages] = useState([]);

    const messageInputRef = useRef();

    const handleAddMessage = () => {
        setMessages(msgs => [...msgs, { id: uuid.v4(), message: messageInput }]);
        setMessageInput('');
        messageInputRef.current.focus();
    };

    const renderItem = ({ item }) => (
        <Text>{item.message}</Text>
    );

    return (
        <View style={MainStyle.Screen}>
            <TitleText content='Demo' />

            <TextInput
                value={messageInput}
                onChangeText={value => setMessageInput(value)}
                ref={messageInputRef}
                underlineColorAndroid='#F00'
            />
            <Button title='Ajouter' onPress={handleAddMessage} disabled={messageInput === ''} />

            <FlatList
                data={messages}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default Demo;