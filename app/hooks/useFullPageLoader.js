import React, { useState } from "react";
import { Text, View } from "react-native";
import { set } from "react-native-reanimated";
import FullPageLoad from "../components/fullPageLoader";
const UseFullPageLoader = () => {
  const [loading, setLoading] = useState(false);
  return [
    loading ? <FullPageLoad /> : null,
    () => setLoading(true), //show loader
    () => setLoading(false), //hide loader
  ];
};

export default UseFullPageLoader;
