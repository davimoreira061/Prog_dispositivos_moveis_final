import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Appbar, Card, Title, Button } from 'react-native-paper';
import { fetchSportsCars } from '../services/api'; // Importando a função da API

const HomeScreen = ({ navigation }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadCars = async () => {
    try {
      const fetchedCars = await fetchSportsCars();
      setCars(fetchedCars);
    } catch (error) {
      console.error('Failed to load cars:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCars();
  }, []);

  if (loading) {
    return <View><Text>Loading...</Text></View>; // Exibir um carregando enquanto os dados são buscados
  }

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Sports Cars" />
      </Appbar.Header>
      <FlatList
        data={cars}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Title>{item.carName}</Title>
              <Button onPress={() => navigation.navigate('CarDetails', { car: item })}>View Details</Button>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 8,
  },
});

export default HomeScreen;
