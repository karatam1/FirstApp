import React from 'react';
import { View, Button } from 'react-native'

const About = ({navigation}: any) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title = "Go back to Home Page"
          onPress={()=>navigation.navigate('Home')}
          />
      </View>
    );
  };

  export default About;