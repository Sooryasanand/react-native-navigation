import React from "react";
import { View, StyleSheet, Text } from "react-native";

const UploadScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Upload Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UploadScreen;
