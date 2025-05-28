import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "react-native-paper";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = () => {
  const [categorias, setCategorias] = useState([]);
  const baseUrl = "https://dummyjson.com/products/";
  const getCategories = async () => {
    axios.get(`${baseUrl}categories`).then((response) => {
      setCategorias(response.data);
    });
  };

  const navigation = useNavigation();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={styles.container} edges={['bottom', 'right', 'left']}>
        <Card>
          <Card.Title
            title={"Lista de Categorias"}
            subtitle={"Clique para ver os produtos"}
          />
          <Card.Content>
            {categorias.map((categoria) => (
              <Card
                style={{ marginVertical: 8 }}
                category={categoria.slug}
                key={categoria.name}
                onPress={() =>
                  navigation.navigate("ListaProdutos", {
                    categoria: categoria.name,
                  })
                }
              >
                <Card.Title title={categoria.name} />
              </Card>
            ))}
          </Card.Content>
        </Card>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
});

export default HomeScreen;
