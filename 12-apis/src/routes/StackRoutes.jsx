import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import UserScreen from '../screens/UserScreen'

const Stack = createStackNavigator()

export default function StackRoutes() {

  
    
  return (
    <Stack.Navigator>
        <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
                title:'Lista de usuários',
                headerTitleAlign: 'center'
            }}
        />
        <Stack.Screen
            name='UserScreen'
            component={UserScreen}
            options={{
                title:'Usuário',
                headerTitleAlign: 'center'
            }}
        />
    </Stack.Navigator>
    

  )
}
