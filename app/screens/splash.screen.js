import React, { Component, useEffect, useState } from "react";
import { ScrollView, Switch, StyleSheet, Text, View } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import BaseIcon from "./Icon";
import Chevron from "./Chevron";
import InfoText from "./InfoText";
import { firebase } from "../../initFirebase";
import { initializedBase } from "../../initFirebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";
import { save_email } from "../redux/actions";
const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "white",
  },
  userRow: {
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
  userImage: {
    marginRight: 12,
  },
  listItemContainer: {
    height: 55,
    borderWidth: 0.5,
    borderColor: "#ECECEC",
  },
});

const SettingsScreen = () => {
  // static propTypes = {
  //   avatar: PropTypes.string.isRequired,
  //   name: PropTypes.string.isRequired,
  //   navigation: PropTypes.object.isRequired,
  //   emails: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       email: PropTypes.string.isRequired,
  //     })
  //   ).isRequired,
  // };

  // onPressSetting = () => {
  //   this.props.navigation.navigate("Options");
  // };

  // onChangePushNotifications = () => {
  //   this.setState((state) => ({
  //     pushNotifications: !state.pushNotifications,
  //   }));
  // };

  // const {
  //   avatar,
  //   name,
  //   emails: [firstEmail],
  // } = this.props;
  const auth = getAuth(initializedBase);
  const dispatch = useDispatch();
  const [pushNotifi, setPushNotifi] = useState(false);
  const userEmail = onAuthStateChanged(auth, (user) => {
    dispatch(save_email(user.email));
  });
  useEffect(() => {
    userEmail();
  }, []);
  // const onChangePushNotifications = () => {
  //   return setPushNotifi(!pushNotifi);
  // };
  var finEmail = useSelector((state) => state.userReducer.email);
  let teamName = useSelector((state) => state.userReducer.name);

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.userRow}>
        <View style={styles.userImage}>
          <Avatar rounded size="large" source={{}} />
        </View>
        <View>
          <Text style={{ fontSize: 16 }}>{teamName}</Text>
          <Text
            style={{
              color: "gray",
              fontSize: 16,
            }}
          >
            {finEmail}
          </Text>
        </View>
      </View>
      <InfoText text="Account" />
      <View>
        <ListItem
          hideChevron
          title="Push Notifications"
          containerStyle={styles.listItemContainer}
          rightElement={
            <Switch
            // onValueChange={onChangePushNotifications()}
            // value={pushNotifi}
            />
          }
          leftIcon={
            <BaseIcon
              containerStyle={{
                backgroundColor: "#FFADF2",
              }}
              icon={{
                type: "material",
                name: "notifications",
              }}
            />
          }
        />
        <ListItem
          // chevron
          title="Currency"
          rightTitle="USD"
          rightTitleStyle={{ fontSize: 15 }}
          // onPress={() => this.onPressSetting()}
          containerStyle={styles.listItemContainer}
          leftIcon={
            <BaseIcon
              containerStyle={{ backgroundColor: "#FAD291" }}
              icon={{
                type: "font-awesome",
                name: "money",
              }}
            />
          }
          rightIcon={<Chevron />}
        />
        <ListItem
          title="Location"
          rightTitle="New York"
          rightTitleStyle={{ fontSize: 15 }}
          // onPress={() => this.onPressSetting()}
          containerStyle={styles.listItemContainer}
          leftIcon={
            <BaseIcon
              containerStyle={{ backgroundColor: "#57DCE7" }}
              icon={{
                type: "material",
                name: "place",
              }}
            />
          }
          rightIcon={<Chevron />}
        />
        <ListItem
          title="Language"
          rightTitle="English"
          rightTitleStyle={{ fontSize: 15 }}
          // onPress={() => this.onPressSetting()}
          containerStyle={styles.listItemContainer}
          leftIcon={
            <BaseIcon
              containerStyle={{ backgroundColor: "#FEA8A1" }}
              icon={{
                type: "material",
                name: "language",
              }}
            />
          }
          rightIcon={<Chevron />}
        />
      </View>
      <InfoText text="More" />
      <View>
        <ListItem
          title="About US"
          // onPress={() => this.onPressSetting()}
          containerStyle={styles.listItemContainer}
          leftIcon={
            <BaseIcon
              containerStyle={{ backgroundColor: "#A4C8F0" }}
              icon={{
                type: "ionicon",
                name: "md-information-circle",
              }}
            />
          }
          rightIcon={<Chevron />}
        />
        <ListItem
          title="Terms and Policies"
          // onPress={() => this.onPressSetting()}
          containerStyle={styles.listItemContainer}
          leftIcon={
            <BaseIcon
              containerStyle={{ backgroundColor: "#C6C7C6" }}
              icon={{
                type: "entypo",
                name: "light-bulb",
              }}
            />
          }
          rightIcon={<Chevron />}
        />
        <ListItem
          title="Share our App"
          // onPress={() => this.onPressSetting()}
          containerStyle={styles.listItemContainer}
          leftIcon={
            <BaseIcon
              containerStyle={{
                backgroundColor: "#C47EFF",
              }}
              icon={{
                type: "entypo",
                name: "share",
              }}
            />
          }
          rightIcon={<Chevron />}
        />
        <ListItem
          title="Rate Us"
          //onPress={() => this.onPressSetting()}
          containerStyle={styles.listItemContainer}
          leftIcon={
            <BaseIcon
              containerStyle={{
                backgroundColor: "#FECE44",
              }}
              icon={{
                type: "entypo",
                name: "star",
              }}
            />
          }
          rightIcon={<Chevron />}
        />
        <ListItem
          title="Send FeedBack"
          //onPress={() => this.onPressSetting()}
          containerStyle={styles.listItemContainer}
          badge={{
            value: 999,
            textStyle: { fontSize: 14, color: "white" },
          }}
          leftIcon={
            <BaseIcon
              containerStyle={{
                backgroundColor: "#00C001",
              }}
              icon={{
                type: "materialicon",
                name: "feedback",
              }}
            />
          }
          rightIcon={<Chevron />}
        />
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;
