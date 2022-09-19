import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { initializedBase } from "../../initFirebase";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Text } from "react-native-paper";
const auth = getAuth(initializedBase);
const SignOut = () => {
  let logout = () => {
    signOut(auth).then(() => {
      navigation.popToTop();
    });
  };
  return (
    <Icon.Button
      style={{
        flexDirection: "column",
        color: "white",
        fontWeight: "600",
      }}
      name="logout"
      size={30}
      backgroundColor={"grey"}
      borderRadius={5}
      onPress={logout}
    >
      <Text style={{ color: "white" }}>Logout</Text>
    </Icon.Button>
  );
};

export default SignOut;
