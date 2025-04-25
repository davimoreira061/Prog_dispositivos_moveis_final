import React from 'react';
import { View, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const receitas = [
  {
    id: 1,
    nome: "Moqueca de Peixe",
    tempoPreparo: "1 hora e 20 minutos",
    porcoes: 6,
    imagem: 'https://www.diadepeixe.com.br/extranet/thumbnail/crop/550x360/Receita/moqueca_de_tilapia_1688388658865.webp',
    ingredientes: [
      "1kg de peixe em postas (cação ou robalo)",
      "2 tomates grandes picados",
      "1 pimentão verde fatiado",
      "1 pimentão amarelo fatiado",
      "1 cebola grande fatiada",
      "200ml de leite de coco",
      "Coentro, azeite de dendê e sal a gosto"
    ],
    modoPreparo: [
      "1. Tempere o peixe com sal e limão",
      "2. Em uma panela, alterne camadas de peixe, tomate, cebola e pimentões",
      "3. Regue com o leite de coco e o azeite de dendê",
      "4. Cozinhe em fogo baixo por cerca de 30 minutos sem mexer",
      "5. Finalize com coentro e sirva com arroz branco"
    ]
  },
  {
    id: 2,
    nome: "Risoto de Cogumelos",
    tempoPreparo: "50 minutos",
    porcoes: 4,
    imagem: 'https://veganoporquesim.com.br/wp-content/uploads/2023/06/Risoto-de-Cogumelos.webp',
    ingredientes: [
      "1 xícara de arroz arbóreo",
      "200g de cogumelos frescos (shiitake, shimeji ou champignon)",
      "1 cebola pequena picada",
      "1 taça de vinho branco seco",
      "1L de caldo de legumes",
      "2 colheres de manteiga",
      "50g de queijo parmesão ralado"
    ],
    modoPreparo: [
      "1. Refogue a cebola na manteiga",
      "2. Adicione os cogumelos e refogue até dourar",
      "3. Coloque o arroz e misture bem",
      "4. Adicione o vinho e mexa até evaporar",
      "5. Vá adicionando o caldo aos poucos, mexendo sempre, até o arroz ficar cremoso",
      "6. Finalize com o parmesão e sirva imediatamente"
    ]
  },
  {
    id: 3,
    nome: "Torta de Limão",
    tempoPreparo: "1 hora",
    porcoes: 10,
    imagem: 'https://i.ytimg.com/vi/cc8QuY7seFQ/maxresdefault.jpg',
    ingredientes: [
      "200g de biscoito maisena",
      "100g de manteiga derretida",
      "1 lata de leite condensado",
      "1/2 xícara de suco de limão",
      "1 lata de creme de leite",
      "Raspas de limão para decorar",
      "Merengue (opcional)"
    ],
    modoPreparo: [
      "1. Triture os biscoitos e misture com a manteiga até formar uma farofa úmida",
      "2. Forre o fundo de uma forma com a mistura e leve ao forno por 10 minutos",
      "3. Misture o leite condensado com o suco de limão e o creme de leite até formar um creme liso",
      "4. Despeje o creme sobre a base e leve à geladeira por pelo menos 3 horas",
      "5. Decore com raspas de limão e merengue, se desejar"
    ]
  }
];
const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={receitas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Receita', { receita: item })}>
            <Card style={styles.card}>
              <Card.Cover source={{ uri: item.imagem }} />
              <Card.Content>
                <Text variant="titleLarge" style={styles.text}>{item.nome}</Text>
                <Text style={styles.text}>Tempo: {item.tempoPreparo}</Text>
                <Text style={styles.text}>Porções: {item.porcoes}</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#4A102A',
  },
  card: {
    marginVertical: 8,
    backgroundColor: '#85193C',
  },
  text: {
    color: '#EFEEEA'
  }
});


export default HomeScreen;