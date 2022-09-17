import { View, Text, Button, SafeAreaView } from "react-native";
import loginStyle from "../../styles/loginStyle";
import initializedBase from "../../initFirebase";
import { getAuth, signOut, sendEmailVerification } from "firebase/auth";
import AppStyles from "../../styles/AppStyles";
const auth = getAuth(initializedBase);

export default function TestHome({ navigation, route }) {
  let logout = () => {
    signOut(auth).then(() => {
      navigation.popToTop();
    });
  };

  let showContent = () => {};
  let showSendVerificationEmail = () => {
    return (
      <SafeAreaView>
        <View style={loginStyle.bottomContainer}>
          <Text style={AppStyles.errorMessage}>Please verify your email </Text>
          <Button
            title="Resend verification email"
            onPress={() => sendEmailVerification(auth.currentUser)}
          ></Button>
        </View>
      </SafeAreaView>
    );
  };
  return (
    <SafeAreaView style={loginStyle.bottomContainer}>
      {auth.currentUser.emailVerified
        ? showContent()
        : showSendVerificationEmail()}
      <Button title="LOGOUT" onPress={logout}></Button>
    </SafeAreaView>
  );
}
