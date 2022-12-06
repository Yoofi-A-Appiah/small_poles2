import React from "react";
import { StyleSheet, View } from "react-native";
import { Entypo } from "react-native-vector-icons";

import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "black",
    borderColor: "transparent",
    borderRadius: 10,
    borderWidth: 1,
    height: 34,
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 18,
    width: 34,
  },
});

const BaseIcon = ({ containerStyle, icon }) => (
  <View style={[styles.container, containerStyle]}>
    <Entypo name="notification" size={24} color={"white"} />
  </View>
);

BaseIcon.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  icon: PropTypes.object,
  iconStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
};

BaseIcon.defaultProps = {
  containerStyle: {},
  icon: {},
  iconStyle: {},
};

export default BaseIcon;
