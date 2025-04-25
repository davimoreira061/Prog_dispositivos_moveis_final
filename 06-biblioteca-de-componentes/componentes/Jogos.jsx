import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'
import { Card } from 'react-native-paper';
import Personagens from './Personagens';

export default function Listajogos (props){

    const {nome, descricao} = props

    return(
        <Card>
            <Card.Title title={nome}/>
            <Card.Content>
            <Text>Descrição: {descricao}</Text>
            </Card.Content>
            <Card.Cover source={{uri: imagem}}/>
            <Card.Actions>
            <FlatList
              horizontal
              data={municipios}
              renderItem={({ item }) => (
                <Personagens
                  nome={item.nome}
                  imagem={item.imagem}
                />
              )}
            />
          </Card.Actions>
        </Card>
    )
}

const styles = StyleSheet.create({})