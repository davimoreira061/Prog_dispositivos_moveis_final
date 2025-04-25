import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { PaperProvider, Text } from 'react-native-paper';
import Jogos from './componentes/Jogos'


export default function App() {
  const  ListaJogos =[
    {
      nome:'Rainbow Six Siege',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFX4ARaNTBeOjG1wCklWd1L-1BsuX9TJSP5w&s',
      descricao: "FPS tático com operadores únicos (personagens com habilidades especiais).",
      personagens: [
        {
          nome:'Ash',
          imagem:'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/QOEBDfqjtUxVBc31l8L9f/4d9b112565baf81d56d69279b95cd463/r6-operators-list-ash_317253.png',
        },
        {
          nome:'Jäger',
          imagem:'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/18FXPSsVVIDvyKvMi4cmnO/bac05dd81df9a8f48336babdc5030cff/R6-operator-jager.png',
        },
        {
          nome:'Caveira ',
          imagem:'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3BfIIo48RsMmkntTXU54g5/93826b4340e2fda49d959054b15151c0/R6-operator-caveira.png',
        },
        {
          nome:'Thermite',
          imagem:'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3NQW8lJVslVSaYSiBlAleU/09fd8e3e946f2e71f39182b9ff18dd77/r6-operators-list-thermite.png',
        },
      ]
    },
    {
      nome:'Valorant',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYLbYMJl75EgBDx8qqUs0AnR78FFszidByNQ&s',
      descricao: 'FPS tático com agentes com habilidades únicas.',
      personagens: [
        {
          nome:'Jett ',
          imagem:'https://static.wikia.nocookie.net/valorant/images/e/e3/Jett_Artwork_Full.png/revision/latest/scale-to-width-down/1200?cb=20220810202742',
        },
        {
          nome:' Phoenix ',
          imagem:'https://static.wikia.nocookie.net/valorant-lore/images/4/43/Phoenix_-_Full_body.png/revision/latest?cb=20241030123921',
        },
        {
          nome:'Sage ',
          imagem:'https://static.wikia.nocookie.net/valorant-lore/images/3/37/Sage_-_Full_body.png/revision/latest?cb=20241030123710',
        },
        {
          nome:'Omen ',
          imagem:'https://static.wikia.nocookie.net/valorant-lore/images/d/dc/Omen_-_Full_body.png/revision/latest?cb=20241030123240',
        },
      ]
    },
    {
      nome:'Fortnite',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7BycEk7aFJSLSDISctlsCK7S3DJT24J7msQ&s',
      descricao: 'Battle Royale com skins (personagens cosméticos).',
      personagens: [
        {
          nome:'Raven ',
          imagem:'https://static.wikia.nocookie.net/fortnite/images/1/18/Raven_%28New_Featured%29_-_Outfit_-_Fortnite.png/revision/latest?cb=20210915160254',
        },
        {
          nome:'Jonesy ',
          imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdpeqy8LpjF72VBtx5uvZsXYWZSFUn84xf_w&s',
        },
        {
          nome:'Peely ',
          imagem:'https://static.wikia.nocookie.net/fortnite_gamepedia/images/3/32/Peely_Reactive.png/revision/latest?cb=20200712092442',
        },
        {
          nome:'Midas ',
          imagem:'https://static.wikia.nocookie.net/fortnite_ptbr_gamepedia_ptbr/images/e/ea/Midas_-_Outfit_-_Fortnite.png/revision/latest?cb=20240415155231',
        },
      ]
    },
    {
      nome:'League of Legends (LoL)',
      imagem: 'https://i.pinimg.com/736x/4c/0b/51/4c0b5190cf49d2d3e16d8ab56c632b44.jpg',
      descricao: 'MOBA com mais de 160 campeões.',
      personagens: [
        {
          nome:'Lux ',
          imagem:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg',
        },
        {
          nome:'Yasuo ',
          imagem:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg',
        },
        {
          nome:'Jinx',
          imagem:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg',
        },
        {
          nome:'Lissandra',
          imagem:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lissandra_0.jpg',
        },
      ]
    },

  ]
  return (
    <PaperProvider> 
   <View style={styles.container}>
      <StatusBar style="auto" />
      <Text variant='displaySmall'>Lista de Jogos</Text>
      
      <FlatList
      data={ListaJogos}
      renderItem={({item}) => (
        <Jogos
        nome={item.nome}
        descricao={item.descricao}
        personagens={item.personagens}
        imagem={item.imagem}
        />
      )}
      />
    </View>
    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7374F',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
});
