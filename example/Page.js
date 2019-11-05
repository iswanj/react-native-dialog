import React from "react";

import { View, Text, Button, StyleSheet } from "react-native";

import { useAlert } from "./alert";

const Page = () => {
    const alert = useAlert();
    const handleOpenAlert = () => {
      alert({
        title: "Title text?",
        subtitle: "info@iswanjumat.com",
        description:
          "Text description, text is there for testing purpose only, please remind that.",
        actions: [{ text: "Done", onPress: () => console.log("done") }]
      });
    };
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button title="Open Alert" onPress={handleOpenAlert} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Page;