import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const myName = "F";

  return (
    <View>
      <Text style={styles.headerText}>Thisfsadnents screen</Text>
      <Text style={styles.subheaderText}>My name is {myName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 45,
  },
  subheaderText: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
