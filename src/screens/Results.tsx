import React from 'react';
import { View, Button, Text } from 'react-native'

function Results ({route, navigation}: any){

    const { name }= route.name;

    console.log("was called in results");

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Welcome {name} </Text>
        <Button
          title = "Go back to Login Page"
          onPress={()=>navigation.navigate('Login')}
          />
      </View>
    );
};

  export default Results;