import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";

const CrestScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Brasão:</Text>

        <Card>
          <Card.Content style={styles.container}>
            <Card.Cover
              source={{ uri: "https://cdn.meutimao.com.br/_upload/noticia/2022/06/03/corinthians-falou-sobre-as-possiveis-mudancas-no-hh941w.jpg" }}
              style={styles.image}
            />
            <Title>História do Brasão</Title>
            <Paragraph style={styles.text}>
              O esboço do atual formato, conhecido pelos milhões de torcedores
              corintianos, começou a se desenhar em 1919, com o modelo adotando
              a bandeira do estado de São Paulo, o nome completo da instituição
              e a data de sua fundação. O escudo sobreviveu até mesmo a ditadura
              imposta pelo presidente Getúlio Vargas em 1937.
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default CrestScreen;
