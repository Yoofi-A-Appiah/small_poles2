import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "../app.navigation";
import StackNavigator from "../stores/stacknavigator";
import BottomNavigator from "../bottomNavigator";
import MaterialTabs from "../materialBottomTabs";
import loginStyle from "../../styles/loginStyle";
import Svg, { Image, Ellipse, ClipPath } from "react-native-svg";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  withDelay,
  withSequence,
  withSpring,
} from "react-native-reanimated";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import AppStyles from "../../styles/AppStyles";
import { initializedBase } from "../../initFirebase";
const auth = getAuth(initializedBase);

const ResetPassword = ({ route, navigation }) => {
  let [email, setEmail] = React.useState("");
  let [errorMessage, setErrorMessage] = React.useState("");
  const formButtonSize = useSharedValue(1);
  const formButtonAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: formButtonSize.value,
        },
      ],
    };
  });
  let resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        navigation.popToTop();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <View style={loginStyle.bottomContainer}>
      <Animated.View style={loginStyle.formContainer}>
        <Text style={loginStyle.inFormText}>RESET PASSWORD</Text>
        <Text style={AppStyles.errorMessage}>{errorMessage}</Text>
        <TextInput
          placeholder="Enter your email"
          placeholderTextColor={"black"}
          style={loginStyle.text_input}
          value={email}
          onChangeText={setEmail}
        />

        <Animated.View
          style={[loginStyle.form_button, formButtonAnimationStyle]}
        >
          <Pressable
            onPress={() => {
              formButtonSize.value = withSequence(
                withSpring(1.5),
                withSpring(1)
              );
              resetPassword(email);
            }}
          >
            <Text style={loginStyle.buttonText}>Reset Password</Text>
          </Pressable>
        </Animated.View>
      </Animated.View>
    </View>
  );
};
export default ResetPassword;
