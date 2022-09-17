import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { View, Button, Text, StyleSheet, Image } from "react-native";
const Leagues = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.center}>
      <Text>This is the Leagues screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate("Home")} // We added an onPress event which would navigate to the About screen
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

export default Leagues;
