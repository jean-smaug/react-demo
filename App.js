import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MyApp from "./app/index";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MyApp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center"
  }
});
