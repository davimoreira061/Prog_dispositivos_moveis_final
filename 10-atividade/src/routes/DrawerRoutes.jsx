import React from 'react'

import {Ionicons} from '@expo/vector-icons'

import EscudoScreen from '../screens/EscudoScreen'
import JogadoresScreen from '../screens/JogadoresScreen'
import TituloScreen from '../screens/TituloScreen'
import UserScreen from '../screens/UserScreen'

import { createDrawerNavigator } from '@react-navigation/drawer'


const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>


<Drawer.Screen
    name='TituloScreen'
component={TituloScreen}
options={{
    title: "Titulos ESports",
    drawerIcon: ({color, size}) => <Ionicons name='trophy' color={color} size={size} />
}}

/>

<Drawer.Screen
    name='JogadoresScreen'
component={JogadoresScreen}
options={{
    title: "Personagens",
    drawerIcon: ({color, size}) => <Ionicons name='person-circle' color={color} size={size} />
}}

/>



<Drawer.Screen
    name='EscudoScreen'
component={EscudoScreen}
options={{
    title: "Logo do Jogo",
    drawerIcon: ({color, size}) => <Ionicons name='flag' color={color} size={size} />
}}

/>

    </Drawer.Navigator>


  )
}