import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'
import { Card } from 'react-native-paper'

export default function Personagens(props) {

  const { nome, imagem } = props

  return (
    <Card.Title
      style={{ margin: 10 }}
      title={nome}
      left={(props) => <Avatar.Image {...props} source={{ uri: imagem }} />}
    />
  )
}



const styles = StyleSheet.create({})