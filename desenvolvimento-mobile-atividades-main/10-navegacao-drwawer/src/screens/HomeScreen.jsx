import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native-paper'

export default function HomeScreen({navigation, route}) {

    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {isOpen ? navigation.openDrawer() : navigation.closeDrawer()}, [isOpen])

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button mode='contained' onPress={() => {
        setIsOpen(!isOpen)
        console.log(isOpen)
        }}>Abrir/Ferchar Gaveta</Button>
    </View>
  )
}

const styles = StyleSheet.create({})