import { FlatList, StyleSheet, View } from "react-native";
import { Button, Card, Text, Title } from "react-native-paper";

const ReceitasScreen = ({ navigation, route }) => {
  console.log(route.params);
  const receita = route.params.receita
  return (
    <>
      <Card style={styles.card}>
        <Card.Cover
          source={{
            uri: receita.imagem,
          }}
          style={styles.image}
        />

        <Card.Content>
            <View style={styles.cardContainer}>
            <Title style={styles.title}>{receita.nome}</Title>
            <Text>Porções: {receita.porcoes}</Text>
            <Text>Tempo de Preparo: {receita.tempoPreparo}</Text>
            </View>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
            <View style={styles.cardContainer}>
            <Title style={styles.title}>Ingredientes</Title>
            <FlatList style={styles.list} data={receita.ingredientes} renderItem={({item}) => {
                return (
                    <Text>{item}</Text>
                )
            }}/>
            </View>
        </Card.Content>
      </Card>
      
      <Card style={styles.card}>
        <Card.Content>
            <View style={styles.cardContainer}>
            <Title style={styles.title}>Modo de Preparo:</Title>
            <FlatList style={styles.list} data={receita.modoPreparo} renderItem={({item}) => {
                return (
                    <Text>{item}</Text>
                )
            }}/>
            </View>
        </Card.Content>
      </Card>
      <Button mode="contained" onPress={() => navigation.goBack()}>
        Voltar para Home
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FAFAFA",
      alignItems: "center",
      paddingTop: 16,
    },

    card:{
        padding: 8,
        marginBottom: 8
    },

    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2
    },
  
    image: {
      width: '100%',
      height: 190,
    },
    
    title:{
        fontSize: 22,
        fontWeight: 800,
        textAlign: 'center'
    },

  });

export default ReceitasScreen;
