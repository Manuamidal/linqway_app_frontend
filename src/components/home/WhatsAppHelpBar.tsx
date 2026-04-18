import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WhatsAppHelpBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🟢</Text>
      <Text style={styles.text}>Need Help? Message Us</Text>
    </View>
  );
};

export default WhatsAppHelpBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: 12,
    borderRadius: 40,
    minHeight: 58,
    backgroundColor: "#DDF4F5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  icon: {
    fontSize: 22,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1F2937",
  },
});
