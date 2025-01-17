import PropTypes from "prop-types";
import React from "react";
import { Platform, StyleSheet, Text } from "react-native";

import { normalize } from "./util";

export default class DialogTitle extends React.PureComponent {
  static propTypes = {
    ...Text.propTypes,
    style: PropTypes.any,
    children: PropTypes.string.isRequired
  };

  static displayName = "DialogTitle";

  render() {
    const { style, children, ...otherProps } = this.props;
    return (
      <Text style={[styles.text, style]} {...otherProps}>
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: Platform.select({
    ios: {
      color: "black",
      textAlign: "center",
      fontSize: 18,
      fontWeight: "700"
    },
    android: {
      fontWeight: "700",
      fontSize: 18
    },
    web: {
      fontWeight: "700",
      fontSize: 18
    }
  })
});
