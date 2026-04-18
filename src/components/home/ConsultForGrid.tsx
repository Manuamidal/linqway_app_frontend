import React from "react";
import { View, Text, StyleSheet } from "react-native";

const items = [
  { icon: "🩸", label: "Blood\nPressure" },
  { icon: "🫃", label: "Digestive\nHealth" },
  { icon: "⚧️", label: "PCOD\n& PCOS" },
  { icon: "🪪", label: "Weight\nManagement" },
  { icon: "🧴", label: "Skin and Hair\nCare" },
  { icon: "🏋️", label: "Fitness and\nNutrition" },
  { icon: "🧠", label: "Anxiety &\nDepression" },
  { icon: "+30", label: "View All" },
];

const ConsultForGrid = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>CONSULT FOR</Text>
      <View style={styles.grid}>
        {items.map((item, index) => (
          <View key={index} style={styles.item}>
            <View style={styles.iconCircle}>
              <Text style={styles.icon}>{item.icon}</Text>
            </View>
            <Text style={styles.text}>{item.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ConsultForGrid;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  heading: {
    fontSize: 20,
    fontWeight: "500",
    color: "#111827",
    marginBottom: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  item: {
    width: "23%",
    alignItems: "center",
    marginVertical: 8,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#EFEAFD",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 7,
  },
  icon: {
    fontSize: 20,
    color: "#6A2BD9",
  },
  text: {
    fontSize: 13,
    lineHeight: 18,
    textAlign: "center",
    color: "#111827",
    fontWeight: "500",
  },
});