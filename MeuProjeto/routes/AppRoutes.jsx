// src/routes/AppRoutes.jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Importando as telas da nova estrutura
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CarListScreen from '../screens/CarListScreen/CarListScreen';
import CarFormScreen from '../screens/CarFormScreen/CarFormScreen';
import APIScreen from '../screens/APIScreen/APIScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen'; // Adicionei essa tela para demonstrar

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Início') {
            iconName = 'home-outline';
          } else if (route.name === 'Meus Carros') {
            iconName = 'car-multiple';
          } else if (route.name === 'API Externa') {
            iconName = 'web';
          } else if (route.name === 'Configurações') {
            iconName = 'cog-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FF4500',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Meus Carros" component={CarListScreen} />
      <Tab.Screen name="API Externa" component={APIScreen} />
      <Tab.Screen name="Configurações" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainTabNavigator} />
        <Stack.Screen name="CarForm" component={CarFormScreen} />
        {/* Adicione outras telas Stack se necessário */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRoutes;