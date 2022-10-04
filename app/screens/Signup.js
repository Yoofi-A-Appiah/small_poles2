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
  color,
} from "react-native-reanimated";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";
// import { mainAuth } from "../../initFirebase";
import { initializedBase } from "../../initFirebase";
import { firebase } from "../../initFirebase";
const auth = getAuth(initializedBase);
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

const Login_Signup = ({ navigation }) => {
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [validationMessage, setValidationMessage] = React.useState("");
  let [confirmPassword, setConfirmPassword] = React.useState("");

  let login = (email, password) => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in

          navigation.navigate("Home", { user: userCredential.user });
          // ...
        })
        .catch((error) => {
          setValidationMessage(error.code);
        });
    } else {
      setValidationMessage("Please enter email and password");
    }
  };
  let signUp = (email, password, confirmPassword) => {
    if (email !== "" && password !== "" && confirmPassword !== "") {
      if (password === confirmPassword) {
        createUserWithEmailAndPassword(auth, email, password)
          // .then((cred) => {
          //   return firebase
          //     .firestore()
          //     .collection("users")
          //     .doc(cred.user.uid)
          //     .set({
          //       team_name: email,
          //     });
          // })
          .then((userCredential) => {
            // Signed in
            // ! the upload logic is below
            // firebase
            //   .firestore()
            //   .collection("Users")
            //   .doc(userCredential.uid)
            //   .set({
            //     team_name: email,
            //   });
            // ! the upload logic ends here
            sendEmailVerification(auth.currentUser);
            navigation.navigate("FirstTimeUser", {
              user: userCredential.user,
              user_id: userCredential.uid,
            });

            // ...
          })
          .catch((error) => {
            setValidationMessage(error.code);
            // ..
          });
      }
    } else {
      setValidationMessage("Please fill all fields");
    }
  };

  let validateAndSet = (value, valueToCompare, setValue) => {
    if (value !== valueToCompare) {
      if (isRegistering) {
        setValidationMessage("Passwords do not match");
      }
    } else {
      setValidationMessage("");
    }
    setValue(value);
  };
  const { height, width } = Dimensions.get("window"); //get the width and height per the window dimensions
  const imagePosition = useSharedValue(1); //a hook to get the image position
  const formButtonSize = useSharedValue(1);
  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imagePosition.value,
      [0, 1],
      [-height / 1.8, 0]
    ); //interpolate works depending on the value of the image position, we determine the height. first positon is first height and last posistion is the last height
    return {
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) }, //in 1000 move the position of image on the y axis to the positon specified by interpolation
      ],
    };
  });
  const buttonAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);
    return {
      opacity: withTiming(imagePosition.value, 500),
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });
  const closeButtonContainerStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360]);
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, { duration: 800 }),
      transform: [
        { rotate: withTiming(interpolation + "deg", { duration: 800 }) },
      ],
    };
  });
  const formButtonAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: formButtonSize.value,
        },
      ],
    };
  });
  const loginHandler = () => {
    imagePosition.value = 0;
    if (isRegistering) {
      setIsRegistering(false);
    }
  };
  const registerHandler = () => {
    imagePosition.value = 0;
    if (!isRegistering) {
      setIsRegistering(true);
    }
  };
  const formAnimator = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [1, 0], [400, 0]);
    return {
      opacity:
        imagePosition.value === 0
          ? withDelay(400, withTiming(1, { duration: 800 }))
          : withTiming(0, { duration: 300 }),
      transform: [{ translateY: withTiming(interpolation, { duration: 800 }) }],
    };
  });
  const [isRegistering, setIsRegistering] = useState(false);
  return (
    // <NavigationContainer>
    //   <DrawerNavigator />
    // </NavigationContainer>
    <View style={loginStyle.container}>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
        <Svg height={height + 100} width={width}>
          <ClipPath id="clipPathId">
            <Ellipse
              cx={width / 2}
              rx={height + 100}
              ry={height + 100}
            ></Ellipse>
          </ClipPath>
          <Image
            href={require("../../assets/newSplash.png")}
            width={width + 100}
            height={height + 100}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clipPathId)"
          ></Image>
        </Svg>
        <Animated.View
          style={[loginStyle.closeContainer, closeButtonContainerStyle]}
        >
          <Text
            onPress={() => {
              imagePosition.value = 1;
              setEmail("");
              setPassword("");
              setConfirmPassword("");
              setValidationMessage("");
            }}
            style={loginStyle.x_style}
          >
            X
          </Text>
        </Animated.View>
      </Animated.View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : ""}
        keyboardVerticalOffset={Platform.OS === "android" ? 20 : 0}
      >
        <View style={loginStyle.bottomContainer}>
          <Animated.View style={[loginStyle.ani_button, buttonAnimatedStyle]}>
            <Pressable style={loginStyle.button} onPress={loginHandler}>
              <Text style={loginStyle.buttonText}>LOGIN</Text>
            </Pressable>
          </Animated.View>
          <Animated.View style={[loginStyle.ani_button, buttonAnimatedStyle]}>
            <Pressable style={loginStyle.button} onPress={registerHandler}>
              <Text style={loginStyle.buttonText}>SIGNUP</Text>
            </Pressable>
          </Animated.View>

          <Animated.View style={[loginStyle.formContainer, formAnimator]}>
            {(isRegistering && (
              <Text style={loginStyle.inFormText}>SIGNUP</Text>
            )) || <Text style={loginStyle.inFormText}>LOGIN</Text>}
            <Text
              style={
                validationMessage === "" ? loginStyle.nothing : loginStyle.error
              }
            >
              {validationMessage}
            </Text>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor={"black"}
              style={loginStyle.text_input}
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={"black"}
              style={loginStyle.text_input}
              secureTextEntry={true}
              value={password}
              onChangeText={(value) =>
                validateAndSet(value, confirmPassword, setPassword)
              }
            />
            {isRegistering && (
              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor={"black"}
                style={loginStyle.text_input}
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={(value) =>
                  validateAndSet(value, password, setConfirmPassword)
                }
              />
            )}

            <Pressable
              style={loginStyle.forgotPassword}
              onPress={() => navigation.navigate("resetPassword")}
            >
              <Text style={loginStyle.forgotPassword}>
                {!isRegistering ? "Forgot Password?" : null}
              </Text>
            </Pressable>

            <Animated.View
              style={[loginStyle.form_button, formButtonAnimationStyle]}
            >
              <Pressable
                onPress={() => {
                  formButtonSize.value = withSequence(
                    withSpring(1.5),
                    withSpring(1)
                  );
                  isRegistering
                    ? signUp(email, password, confirmPassword)
                    : login(email, password);
                }}
              >
                <Text style={loginStyle.buttonText}>
                  {isRegistering ? "SIGNUP" : "LOGIN"}
                </Text>
              </Pressable>
            </Animated.View>
          </Animated.View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login_Signup;
