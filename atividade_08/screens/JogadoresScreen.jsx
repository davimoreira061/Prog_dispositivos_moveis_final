import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';
import { List, Title } from 'react-native-paper';

const jogadores = [
  {
    nome: 'Lionel Messi',
    numero: 10,
    imagem: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1192763963.jpg?c=16x9&q=h_833,w_1480,c_fill'
  },
  {
    nome: 'Robert Lewandowski',
    numero: 9,
    imagem: 'https://www.fcbarcelona.com/photo-resources/2024/10/13/b666059e-1d0a-493f-a7e5-dd7a258d8165/09-Lewandowski-M.jpg?width=1200&height=750'
  },
  {
    nome: 'Sergio Busquets',
    numero: 5,
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4YDIegvMUfrLm5axX33Q4RjD5zqg7ykBGZg&s'
  },
  {
    nome: 'Ansu Fati',
    numero: 10,
    imagem: 'https://s2-ge.glbimg.com/iRAI0HoHeE-b1lhrZ60LB9AmSWg=/0x0:6000x4000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/s/4/8b4xYFSKepHAN2Akpbgw/gettyimages-2166053132.jpg'
  },
  {
    nome: 'Jordi Alba',
    numero: 18,
    imagem: 'https://www.fcbarcelona.com/photo-resources/2023/12/01/c72348c0-06d7-4b8a-9841-86cb2af2d305/JORDI-ALBA.jpg?width=1200&height=750'
  },
];

const JogadoresScreen = () => {
  return (
    <View style={styles.container}>
      <Title style={{ color: 'white' }}>Jogadores</Title>
      <FlatList
        data={jogadores}
        keyExtractor={(item) => item.numero.toString()}
        renderItem={({ item }) => (
          <List.Item
            title={`${item.nome} (Camisaz ${item.numero})`}
            titleStyle={{ color: 'white' }}
            left={() => <Image source={{ uri: item.imagem }} style={styles.imagem} />}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#0a0a0a',
  },
  imagem: {
    width: 50,
    height: 50,
    marginRight: 16,
    borderRadius: 25,
  },
});

export default JogadoresScreen;