import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DoctorScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Doctor</Text>
      <Text style={styles.subtitle}>Doctor tab content goes here.</Text>
    </View>
  );
};

export default DoctorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: "#4B5563",
  },
});
