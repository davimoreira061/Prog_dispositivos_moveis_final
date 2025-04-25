import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Serie(props) {
  const { nome, ano, diretor, temporadas, capa } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>NOME: {nome}</Text>
      <Text style={styles.texto}>ANO: {ano}</Text>
      <Text style={styles.texto}>DIRETOR: {diretor}</Text>
      <Text style={styles.texto}>TEMPORADAS: {temporadas}</Text>

      <Image
        source={{
          uri: capa,
        }}
        style={{
          width: 200,
          height: 200,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f54321",
    borderWidth: 10,
    padding: 5,
    paddingTop: 25,
    alignItems: "center",
    flex: 1,
  },
  texto: {
    fontSize: 20,
    fontWeight: 600,
  },
});
