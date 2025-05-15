import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import HomeScreen from "../screens/HomeScreen.jsx";
import ReceitasScreen from "../screens/ReceitasScreen.jsx";

const Stack = createStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{
        
      }}/>
      <Stack.Screen name="Receitas" component={ReceitasScreen} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
