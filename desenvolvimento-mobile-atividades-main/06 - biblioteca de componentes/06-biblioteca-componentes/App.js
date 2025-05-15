import {
  Button,
  Divider,
  PaperProvider,
  Text,
  Title,
} from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import CardComponent from "./components/Card";

export default function App() {
  return (
    <PaperProvider>
      <ScrollView>
        <View style={styles.container}>
          <Title>This is a simple text</Title>
          <Divider style={{ width: "90%" }} />
          <CardComponent backgroundColor={"#ff9000"} />
          <CardComponent backgroundColor={"#F034AA"} />
          <CardComponent backgroundColor={"#0F9900"} />
          <CardComponent />

          <Button mode="contained" style={{ marginTop: 10 }}>
            Sample Button
          </Button>
          <Button mode="contained-tonal" style={{ marginTop: 10 }}>
            Sample Button
          </Button>
          <Button mode="elevated" style={{ marginTop: 10 }}>
            Sample Button
          </Button>
          <Button mode="outlined" style={{ marginTop: 10 }}>
            Sample Button
          </Button>
          <Button mode="text" style={{ marginTop: 10 }}>
            Sample Button
          </Button>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
