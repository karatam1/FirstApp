import React from 'react';
import { SafeAreaView, View, Button } from 'react-native'

const Home = ({navigation}:any) => {
    return (
      <SafeAreaView>
        <Button
          title = "Go to About Page"
          onPress={()=>navigation.navigate('About')}
          />
      </SafeAreaView>
    );
  };

  export default Home;