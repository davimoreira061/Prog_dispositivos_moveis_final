import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CrestScreen from './screens/CrestScreen';
import PlayersScreen from './screens/PlayersScreen';
import SettingsScreen from './screens/TitlesScreen';
import { Ionicons } from '@expo/vector-icons';


export default function App() {

  const Tab = createBottomTabNavigator()

  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
          name='Brasão' 
          component={CrestScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="trophy" size={size} color={color} />
            ),
            }}
          />
          <Tab.Screen 
          name='Jogadores' 
          component={PlayersScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
            ),
            }}
          />
          <Tab.Screen
          name='Títulos' 
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="medal" size={size} color={color} />
            ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

