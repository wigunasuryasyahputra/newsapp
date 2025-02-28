import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tentang Aplikasi</Text>
      <Text style={styles.description}>
        Aplikasi ini dibuat untuk memenuhi tugas HER mata kuliah Pemrograman Mobile II.
      </Text>
      <Text style={styles.credit}>Dibuat oleh: [Wiguna Surya Syahputra Nim 17221033]</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  credit: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#007bff",
  },
});

export default AboutScreen;
