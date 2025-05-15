import { Button } from "react-native-paper";
import { receitas } from "../data/data.js";
import { FlatList, StyleSheet } from "react-native";

console.log(receitas);

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <FlatList
        contentContainerStyle={styles.list} // changed from `style` to `contentContainerStyle`
        data={receitas}
        renderItem={({ item }) => {
          return (
            <Button
              mode="contained"
              style={styles.button}
              onPress={() => navigation.navigate("Receitas", { receita: item })}
            >
              {item.nome}
            </Button>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  button: {
    width: 320,
    margin: 6,
  },
});

export default HomeScreen;
