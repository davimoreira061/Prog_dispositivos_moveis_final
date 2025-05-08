import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'

export default function EscudoScreen() {

  const time = {
    nome: "Rainbow Six Siege",
    escudo: "https://image.api.playstation.com/cdn/EP0001/CUSA01788_00/tCPL6bpXl4FhvK4mr19Rh5qJu4QJrfTK.png?w=440&thumb=false",  
    fundacao: "1 de dezembro de 2015",  
    estadio: "Jogo online (sem estádio físico)",  
    mascote: "Não há mascote oficial",  
    cores: ["Azul", "Preto", "Branco"], 
  }
  

  return (

    <View style={styles.container}>
    <Image source={{ uri: time.escudo }} style={styles.escudo} />
    <Text style={styles.nome}>{time.nome}</Text>
    <Text>Fundação: {time.fundacao}</Text>
    <Text>Estádio: {time.estadio}</Text>
    <Text>Mascote: {time.mascote}</Text>
    <Text>Cores: {time.cores.join(' e ')}</Text>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  paddingTop: 50,
  paddingHorizontal: 20,
  alignItems: 'center',
  backgroundColor: '#fff',
},
escudo: {
  width: 100,
  height: 100,
  marginBottom: 20,
},
nome: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 10,
},
});
 