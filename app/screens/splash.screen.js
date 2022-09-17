import React, { Component } from "react";
import { View, Button, Text, StyleSheet, Image } from "react-native";
const Splash = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the Splash screen</Text>
      <Button
        title="Go to About Screen"
        //onPress={() => navigation.navigate("About")} // We added an onPress event which would navigate to the About screen
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Splash;
