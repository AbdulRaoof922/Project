
import React, { useEffect } from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const Splash = ({ navigation }) => {

  useEffect(() => {
    // Perform any setup tasks here
    setTimeout(() => {
      navigation.navigate('Intro');
    }, 3000); // simulate a 3-second delay before navigating to the next screen
  }, []);

  return (
    <View style={mystyles.container}>
      <View style={mystyles.centralview}>
        <Text style={mystyles.firsttext}>Quotes</Text>
        <Text style={mystyles.secondtext}>Hub</Text>

      </View>
      <View style={mystyles.bottomview}>
        <Text style={mystyles.tagline}>All you  want to post on Quotes</Text>

      </View>
    </View>

  );
};

export default Splash;
const mystyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  centralview: {
    flexDirection: "row"
  },
  firsttext: {
    fontSize: 30,
    fontWeight: "800",
    color: "black"
  },
  secondtext: {
    fontSize: 20,
    color: "red"
  },
  bottomview: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  tagline: {
    color: "red" ,
    fontStyle:"italic"
  }

})
