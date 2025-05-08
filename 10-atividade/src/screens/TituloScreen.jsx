import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'


export default function TituloScreen({navigation, route}) {

  const titulos = [
    {
    nome: "🏆 Six Invitational 2021 – Ninjas in Pyjamas (Brasil)",
    anos: [ 2021, 'A equipe brasileira Ninjas in Pyjamas (NiP) se consagrou campeã do principal torneio mundial de R6, derrotando a Team Liquid na final.']
    },
    {
    nome: "🏆 Six Major Sweden 2021 – FaZe Clan (Brasil)",
    anos: [2021, 'O time FaZe Clan, com lineup brasileira, venceu o torneio superando a equipe danesa Ninjas in Pyjamas (na final).']
    },
    {
    nome: "🏆 Six Invitational 2023 – G2 Esports (Europa)",
    anos: [2023, 'A organização europeia G2 Esports (com jogadores de vários países) voltou ao topo ao vencer o SI 2023.']
    },
    {
    nome: "🏆 Six Major Copenhagen 2023 – W7M esports (Brasil)",
    anos: [2023, 'A organização w7m esports, com jogadores brasileiros, venceu o Major da Dinamarca, batendo a Team Liquid na final.']
    }
    ];



  return (
<View style={styles.container}>
      <FlatList
        data={titulos}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>Anos: {item.anos.join(', ')}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  card: {
    marginBottom: 20,
    backgroundColor: '#e8e8e8',
    padding: 15,
    borderRadius: 10,
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
});



    <View>
     
      <Button
mode='contained'
onPress={() => navigation.openDrawer()}>
  Abrir Drawer
</Button>


<Button
mode='contained'
onPress={() =>{
  navigation.openDrawer()
  setTimeout (
    () => navigation.closeDrawer(),
    3000
  )
}}>

  Abrir Drawer e Fechar
</Button>




    </View>



  