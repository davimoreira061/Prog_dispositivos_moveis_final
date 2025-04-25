import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'
import { Card } from 'react-native-paper';
import Personagens from './Personagens';

export default function Jogos (props){

    const {nome, imagem, descricao, personagens} = props

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
              data={personagens}
              renderItem={({ item }) => (
                <Personagens
                  nome={item.nome}
                  imagem={item.imagem}
                  personagens={item.personagens}
                />
              )}
            />
          </Card.Actions>
        </Card>
    )
}

const styles = StyleSheet.create({})