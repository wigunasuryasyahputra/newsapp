import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

const DetailScreen = ({ route }) => {
  const { article } = route.params;

  return (
    <ScrollView style={styles.container}>
      {article.urlToImage && <Image source={{ uri: article.urlToImage }} style={styles.image} />}
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.source}>Sumber: {article.source.name}</Text>
      <Text style={styles.content}>{article.content || "Tidak ada konten yang tersedia."}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  source: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    textAlign: "justify",
  },
});

export default DetailScreen;
