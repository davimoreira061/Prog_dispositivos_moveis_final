import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Card, Button } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const ListaProdutosScreen = ({ route }) => {
    const [produtos, setProdutos] = useState([])
    const { categoria } = route.params

    const navigation = useNavigation()

    const getProducts = async () => {
        axios.get(`https://dummyjson.com/products/category/${categoria}`).then((response) => {
            setProdutos(response.data.products)
        })
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <ScrollView style={styles.container}>
            {produtos.map((produto) => (
                <Card key={produto.id} id={produto.id.toString()} style={{ marginVertical: 8 }} onPress={() => navigation.navigate("Produto", { id: produto.id })}>
                    <Card.Title title={produto.title}/>
                    <Card.Content>
                        <Text style={{ textAlign: "justify" }}>{produto.description.slice(0, 120)}...</Text>
                    </Card.Content>
                    <Card.Actions style={{ justifyContent: "center" }}>
                        <Button>Ver mais</Button>
                    </Card.Actions>
                </Card>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
})

export default ListaProdutosScreen
