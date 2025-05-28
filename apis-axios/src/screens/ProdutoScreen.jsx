import axios from "axios";
import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Card } from "react-native-paper";

const ProdutoScreen = ({ route }) => {
    const [produto, setProduto] = useState({})
    const { id } = route.params

    const getProductDetails = async () => {
        axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
            console.log(response.data)
            setProduto(response.data)
        })
    }

    useEffect(() => {
        getProductDetails()
    }, [])

    return (
        <View style={{ flex: 1, padding: 8 }}>
            <Card>
                <Card.Title title={produto.title} />
                <Card.Cover source={{ uri: produto.thumbnail }}/>
                <Card.Content>
                    <Text>{produto.description}</Text>
                </Card.Content>
                <Card.Actions>
                    <Text>Preço: U$ {produto.price}</Text>
                    <Text>Percentual de Desconto:{produto.discountPercentage}%</Text>
                </Card.Actions>
            </Card>
            <Card style={{ marginVertical: 8 }}>
                <Text>Avaliação: {produto.rating}</Text>
                <Text>Estoque: {produto.stock}</Text>
                <Text>Marca: {produto.brand}</Text>
            </Card>
        </View>
    )
}

export default ProdutoScreen