import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  pdfview: {
    height: "100vh",
    width: "100vw",
  },
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20, // Adjust gap as needed
  },
  column: {
    width: "50%", // Assuming a two-column layout
    marginBottom: 10,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 2,
  },
  value: {
    fontSize: 12,
  },
  container: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    maxWidth: 600,
    width: "100%",
    marginBottom: 20,
  },
  prescriptionContainer: {
    width: "50%",
    marginBottom: 20,
  },
  patientContainer: {
    width: "50%",
    marginBottom: 20,
  },
  textArea: {
    border: "1px solid #ccc",
    padding: 5,
    borderRadius: 4,
    fontSize: 12,
    marginBottom: 5,
  },
});
export default function PdfScreen() {
  const data = JSON.parse(sessionStorage.getItem("pdfData"));

  return (
    <PDFViewer style={styles.pdfview}>
      <Document>
        <Page style={styles.page}>
          <View style={styles.container}>
            <View style={styles.section}>
              <Text style={styles.title}>Doctor's Details</Text>
            </View>
            <View style={styles.grid}>
              <View style={styles.column}>
                <View>
                  <Text style={styles.label}>
                    Name: <Text style={styles.value}>{data.doctorId.name}</Text>
                  </Text>
                </View>
                <View>
                  <Text style={styles.label}>
                    Specialty:{" "}
                    <Text style={styles.value}>{data.doctorId.specialty}</Text>
                  </Text>
                </View>
              </View>
              <View style={styles.column}>
                <View>
                  <Text style={styles.label}>
                    Email:{" "}
                    <Text style={styles.value}>{data.doctorId.email}</Text>
                  </Text>
                </View>
                <View>
                  <Text style={styles.label}>
                    Phone:{" "}
                    <Text style={styles.value}>+91 {data.doctorId.phone}</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.grid}>
            <View style={styles.prescriptionContainer}>
              <View style={styles.section}>
                <Text style={styles.title}>Prescribe</Text>
              </View>
              <View>
                <Text style={styles.label}>Care to be taken:</Text>
                <Text style={styles.textArea}>{data.careTaken}</Text>
              </View>
              <View>
                <Text style={styles.label}>Medicine:</Text>
                <Text style={styles.textArea}>{data.medicine}</Text>
              </View>
            </View>

            <View style={styles.patientContainer}>
              <View style={styles.section}>
                <Text style={styles.title}>Patient's Details</Text>
              </View>
              <View>
                <Text style={styles.label}>
                  Name: <Text style={styles.value}>{data.patientId.name}</Text>
                </Text>
              </View>
              <View>
                <Text style={styles.label}>
                  Current Illness:{" "}
                  <Text style={styles.value}>
                    {data.patientId.currentIllness}
                  </Text>
                </Text>
              </View>
              <View>
                <Text style={styles.label}>
                  Medical History:{" "}
                  <Text style={styles.value}>
                    {data.patientId.illnessHistory}
                  </Text>
                </Text>
              </View>
              <View>
                <Text style={styles.label}>
                  Diabetics:{" "}
                  <Text style={styles.value}>{data.patientId.diabetics}</Text>
                </Text>
              </View>
              <View>
                <Text style={styles.label}>
                  Allergy:{" "}
                  <Text style={styles.value}>{data.patientId.allergy}</Text>
                </Text>
              </View>
              <View>
                <Text style={styles.label}>
                  Other:{" "}
                  <Text style={styles.value}>{data.patientId.other}</Text>
                </Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
