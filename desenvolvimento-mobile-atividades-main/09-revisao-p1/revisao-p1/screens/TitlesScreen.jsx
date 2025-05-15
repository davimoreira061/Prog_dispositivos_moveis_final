import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { Card, Title } from 'react-native-paper'
import { titulos } from '../database/championships.js'

export default function TitlesScreen() {
  return (
    <View style={styles.container}>
      <Text>Títulos</Text>

      <Card>
        <Card.Cover 
        source={{ uri: "https://cdn.meutimao.com.br/_upload/noticia/2022/06/03/corinthians-falou-sobre-as-possiveis-mudancas-no-hh941w.jpg" }}
        style={styles.image}/>
        <Card.Content>
          {/* <Title>Campeonato Brasileiro Série A</Title> */}
          <FlatList
          data={titulos}
          renderItem={({item}) => {
            return (
              <>
            <Title>{item.nome}</Title>
            <FlatList
            data={item.anos}
            renderItem={({item}) => {
              return(<Text>{item}</Text>)
            }}
            />
              </>
          )
          }}
          />
        </Card.Content>
      </Card>
    </View>
  )
}

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