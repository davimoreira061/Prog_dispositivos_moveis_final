
import { StyleSheet, Text, View, FlatList,Image } from 'react-native'
import React from 'react'




export default function JogadoresScreen() {

  const jogadores = [
    {
      nome: "Ash",
      numero: 1,
      posicao: "Entry Fragger",
      idade: 33,
      imagem: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/fdIyDHizr1VXkFOfJxg50/7cb2feb6bd66cf0ff9989b6b9dad8b64/r6s-operator-ash-alt-elite.png"
    },
    {
      nome: "Thermite",
      numero: 2,
      posicao: "Hard Breacher",
      idade: 35,
      imagem: "https://liquipedia.net/commons/images/8/8f/Thermite_R6S.png"
    },
    {
      nome: "Mute",
      numero: 3,
      posicao: "Intel Denial",
      idade: 32,
      imagem: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3gItFrDP0bBZsDXPdPp8ni/4314eb876028a87ae7fb20cc3215d3f6/R6-operator-mute.png"
    },
    {
      nome: "Doc",
      numero: 4,
      posicao: "Healer / Support",
      idade: 34,
      imagem: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4z2dBE3pcfpFvpqckXone8/e4031e65dd7b675455150afe34874d84/R6-operator-doc-elite.png"
    },
    {
      nome: "Caveira",
      numero: 5,
      posicao: "Roamer / Intel Gatherer",
      idade: 27,
      imagem: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3BfIIo48RsMmkntTXU54g5/93826b4340e2fda49d959054b15151c0/R6-operator-caveira.png"
    }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={jogadores}
        keyExtractor={(item) => item.numero.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>Idade: {item.idade}</Text>
            <Text>Posição: {item.posicao}</Text>
            <Text>Número: {item.numero}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    backgroundColor: 'grayx',
  },
  card: {
    width: 400,
    padding: 10,
    marginRight: 10,
    backgroundColor: 'gray',
    borderRadius: 10,
    alignItems: 'center',
  },
  imagem: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 5,            
    borderColor: '#00000',    
  },

  nome: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
});
