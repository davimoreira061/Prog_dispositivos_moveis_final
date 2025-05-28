import { createStackNavigator } from "@react-navigation/stack";

import ListaProdutosScreen from "../screens/ListaProdutosScreen";
import ProdutoScreen from "../screens/ProdutoScreen";
import HomeScreen from "../screens/HomeScreen";

const ProductStack = createStackNavigator()

export default function StackRoutes() {
    return (
        <ProductStack.Navigator>
            <ProductStack.Screen name="Home" component={HomeScreen} />
            <ProductStack.Screen name="ListaProdutos" component={ListaProdutosScreen} />
            <ProductStack.Screen name="Produto" component={ProdutoScreen} />
        </ProductStack.Navigator>
    )
}
