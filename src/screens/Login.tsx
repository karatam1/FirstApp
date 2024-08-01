import React, { useState } from "react";
import { SafeAreaView, Text, View, TextInput, Button, StyleSheet } from "react-native";
import TextInputButton from "../components/TextInputButton";
import TestComponent from "../components/TestComponent";
import { renderNode } from "react-native-elements/dist/helpers";


function LoginScreen ({navigation}:any){

    // hooks
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    // components
    const handleUsernameChange = (input:string) => {
        setUsername(input.toLowerCase());
    };

    const handlePasswordChange = (input:string) => {
        setPassword(input);
    };

    const dismissMessage = () => {
        setMessage('');
    }

    const clearMessage = () =>
    {
        handleUsernameChange('');
        handlePasswordChange('');
    }

    const process = () => {
        // Your logic here
        // api calls to verify if the username was correct would go here
        if ((username === 'ajaykaratam') && (password === 'Gongura123')) {
            console.log("attempting to change screen");
            navigation.navigate('Results', { name: username });
        } else {
            setMessage("Incorrect username and password");
            console.log('Message set: function call failed', {username, password});
        }
      };

    // main
    return (
     <SafeAreaView style = { safeAreaViewStyles }> 
        <View style={buttonStyles.container}>
            <TextInput 
                placeholder="Username" 
                style={ textInputStyles }
                value={username}
                onChangeText = {handleUsernameChange}
            />
            <TextInput 
                placeholder="Password" 
                style={ textInputStyles }
                value={password}
                onChangeText ={handlePasswordChange}
                secureTextEntry
            />
            <View style = {buttonStyles.position}>
                <Button
                    onPress={process}
                    title="Verify"
                />
                <Button
                    onPress={clearMessage}
                    title="Clear"
                />
            </View>
            {message !== '' && (
                <View style = {buttonStyles.container}>
                    <Text>{message}</Text>
                    <Button
                        onPress={dismissMessage}
                        title="Dismiss"
                    />
                </View>
            )}
        </View>
      </SafeAreaView>
    );
}

// styles here

const safeAreaViewStyles = {
    flex: 1,
    justifyContext: 'center',
    padding: 10,
};

const loginTextStyles = {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    color: '#333',
    marginBottom: 30,
}

const textInputStyles = {
    paddingVertical: 0,
    fontSize: 30,
}

const buttonStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
    },
    position:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }

  });

export default LoginScreen;