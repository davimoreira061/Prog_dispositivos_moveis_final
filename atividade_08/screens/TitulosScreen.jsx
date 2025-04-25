import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Title, List } from 'react-native-paper';

const titulos = [
  { nome: "La Liga (Campeonato Espanhol):", anos: [1929, 1945, 1947, 1951, 1952, 1953, 1958, 1960, 1991, 1992, 1993, 1994, 1997, 2004, 2005, 2006, 2009, 2010, 2011, 2014, 2015, 2017, 2018, 2019, 2023] },
  { nome: "Copa del Rey (Copa da Espanha):", anos: [1910, 1912, 1913, 1920, 1922, 1925, 1942, 1951, 1952, 1953, 1957, 1959, 1963, 1968, 1981, 1990, 1997, 2009, 2012, 2015, 2018] },
  { nome: "Supercopa de España (Supercopa da Espanha):", anos: [1983, 1991, 1992, 2005, 2006, 2009, 2010, 2011, 2013, 2018] },
  { nome: "Liga dos Campeões da UEFA (Champions League):", anos: [1992, 2006, 2009, 2011, 2015] },
];

const TitulosScreen = () => {
  return (
    <View style={styles.container}>
      <Title>Títulos</Title>
      <FlatList
        data={titulos}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <List.Accordion title={item.nome}>
            <List.Item title={`Anos: ${item.anos.join(', ')}`} />
          </List.Accordion>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default TitulosScreen;