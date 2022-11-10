import { useNavigation } from "@react-navigation/native";
import { GiftedChat } from "react-native-gifted-chat";
import { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import React, { Component } from "react";
import { View, Button, Text, StyleSheet, Image } from "react-native";
import { firebase } from "../../initFirebase";
import { getAuth } from "firebase/auth";
import { initializedBase } from "../../initFirebase";
import { collection, setDoc, arrayUnion, updateDoc } from "firebase/firestore";
import { db } from "../../initFirebase";
const auth = getAuth(initializedBase);

const UserChat = ({ route }) => {
  const [messages, setMessages] = useState([]);
  let getUserid = useSelector((state) => state.signupReducer.user_id);
  let sender_id = route.params.usersID;
  const navigation = useNavigation();

  const getAllMessages = async () => {
    const chatid =
      sender_id > getUserid
        ? getUserid + "-" + sender_id
        : sender_id + "-" + getUserid;
    const msgResponse = await firebase
      .firestore()
      .collection("Chats")
      .doc(chatid)
      .collection("messages")
      .orderBy("createdAt", "desc")
      .get();
    const allTheMsgs = msgResponse.docs.map((docSanp) => {
      return {
        ...docSanp.data(),
        createdAt: docSanp.data().createdAt.toDate(),
      };
    });
    setMessages(allTheMsgs);
  };
  useEffect(() => {
    // setMessages([
    //   {
    //     _id: 1,
    //     text: "Hello developer",
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: "React Native",
    //       avatar: "https://placeimg.com/140/140/any",
    //     },
    //   },
    // ]);
    getAllMessages();
  }, []);
  const onSend = (msgArray) => {
    const msg = msgArray[0];
    const usermsg = {
      ...msg,
      sentBy: getUserid,
      sentTo: sender_id,
      createdAt: new Date(),
    };
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, usermsg)
    );
    const chatid =
      sender_id > getUserid
        ? getUserid + "-" + sender_id
        : sender_id + "-" + getUserid;

    firebase
      .firestore()
      .collection("Chats")
      .doc(chatid)
      .collection("messages")
      .add({
        ...usermsg,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
  };
  return (
    <GiftedChat
      style={{ flex: 1 }}
      messages={messages}
      onSend={(text) => onSend(text)}
      user={{
        _id: getUserid,
      }}
    />
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

export default UserChat;
