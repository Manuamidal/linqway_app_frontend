import React from "react";
import { View, Text, StyleSheet } from "react-native";

export type TimelineEntry = {
  id: string;
  date: string;
  title: "Prescription" | "Report";
  detail: string;
  doctor: string;
};

type PrescriptionsReportsTimelineProps = {
  entries: TimelineEntry[];
};

export default function PrescriptionsReportsTimeline({
  entries,
}: PrescriptionsReportsTimelineProps) {
  return (
    <View style={styles.wrap}>
      <View style={styles.line} />
      {entries.map((entry, index) => {
        const isPrescription = entry.title === "Prescription";
        return (
          <View key={entry.id} style={styles.row}>
            <View
              style={[
                styles.dot,
                isPrescription ? styles.dotPrescription : styles.dotReport,
              ]}
            />
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.date}>{entry.date}</Text>
                <View
                  style={[
                    styles.tag,
                    isPrescription ? styles.tagPrescription : styles.tagReport,
                  ]}
                >
                  <Text
                    style={[
                      styles.tagText,
                      isPrescription
                        ? styles.tagTextPrescription
                        : styles.tagTextReport,
                    ]}
                  >
                    {entry.title}
                  </Text>
                </View>
              </View>
              <Text style={styles.detail}>{entry.detail}</Text>
              <Text style={styles.doctor}>{entry.doctor}</Text>
            </View>
            {index === entries.length - 1 ? (
              <View style={styles.lineEndSpacer} />
            ) : null}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: 20,
    paddingLeft: 8,
  },
  line: {
    position: "absolute",
    left: 17,
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: "#CBD5E1",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: "#fff",
    marginTop: 16,
    zIndex: 1,
  },
  dotPrescription: {
    borderColor: "#7C3AED",
  },
  dotReport: {
    borderColor: "#0EA5E9",
  },
  card: {
    flex: 1,
    marginLeft: 12,
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 14,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  date: {
    fontSize: 13,
    color: "#64748B",
    fontWeight: "600",
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  tagPrescription: {
    backgroundColor: "#EDE9FE",
  },
  tagReport: {
    backgroundColor: "#E0F2FE",
  },
  tagText: {
    fontSize: 12,
    fontWeight: "700",
  },
  tagTextPrescription: {
    color: "#6D28D9",
  },
  tagTextReport: {
    color: "#0369A1",
  },
  detail: {
    fontSize: 14,
    lineHeight: 20,
    color: "#1F2937",
  },
  doctor: {
    marginTop: 8,
    fontSize: 13,
    color: "#6B7280",
    fontWeight: "500",
  },
  lineEndSpacer: {
    height: 8,
  },
});
