import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import PrescriptionsReportsTimeline, {
  type TimelineEntry,
} from "../components/prescriptions/PrescriptionsReportsTimeline";

const sampleTimeline: TimelineEntry[] = [
  {
    id: "1",
    date: "18 Apr 2026",
    title: "Prescription",
    detail: "Paracetamol 650mg, 1 tab after food for 3 days",
    doctor: "Dr. A. Rao",
  },
  {
    id: "2",
    date: "17 Apr 2026",
    title: "Report",
    detail: "Complete Blood Count (CBC) report uploaded",
    doctor: "City Lab",
  },
  {
    id: "3",
    date: "15 Apr 2026",
    title: "Prescription",
    detail: "Vitamin D3 once weekly for 6 weeks",
    doctor: "Dr. N. Mehta",
  },
  {
    id: "4",
    date: "13 Apr 2026",
    title: "Report",
    detail: "Chest X-ray result: Mild bronchial thickening",
    doctor: "Metro Imaging",
  },
];

export default function PrescriptionsReportsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Prescriptions & Reports</Text>
        <Text style={styles.subtitle}>Patient treatment timeline</Text>

        <PrescriptionsReportsTimeline entries={sampleTimeline} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: "#4B5563",
  },
});
