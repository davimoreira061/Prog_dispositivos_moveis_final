import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ReceitaScreen from '../screens/ReceitaScreen';

const Stack = createStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#C5172E' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Receitas' }} />
      <Stack.Screen name="Receita" component={ReceitaScreen} options={{ title: 'Modo de Preparo' }} />
    </Stack.Navigator>
  );
};

export default StackRoutes;