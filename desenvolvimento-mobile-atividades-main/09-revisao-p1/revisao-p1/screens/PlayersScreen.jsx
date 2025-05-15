import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Card, Paragraph, Title } from "react-native-paper";
import { players } from "../database/players.js";

const PlayersScreen = () => {
  const [jogadores, setJogadores] = useState([]);

  useEffect(() => {
    setJogadores(players);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Brasão:</Text>

      <Title>Jogadores</Title>
      <FlatList
        data={jogadores}
        renderItem={({ item }) => {
          return (
            <Card>
              <Card.Content style={styles.container}>
                <Card.Cover
                  source={{
                    uri: "https://cdn.meutimao.com.br/_upload/noticia/2022/06/03/corinthians-falou-sobre-as-possiveis-mudancas-no-hh941w.jpg",
                  }}
                  style={styles.image}
                />
                <Title>{item.nome}</Title>
                <Paragraph style={styles.text}>
                  Posição: {item.posicao}
                </Paragraph>
                <Paragraph style={styles.text}>Idade: {item.idade}</Paragraph>
              </Card.Content>
            </Card>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    alignItems: "center",
    paddingTop: 16,
  },

  image: {
    width: 360,
    height: 180,
  },

  text: {
    fontSize: 18,
  },
});

export default PlayersScreen;
