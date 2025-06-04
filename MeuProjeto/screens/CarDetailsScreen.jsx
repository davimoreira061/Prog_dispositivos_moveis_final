import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Card, Title, Paragraph, Divider, Button } from 'react-native-paper';

const CarDetailsScreen = ({ route, navigation }) => {
  const { car } = route.params || {};

  if (!car) {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Car Details" />
        </Appbar.Header>
        <Card style={styles.card}>
          <Card.Content>
            <Title>No car data found.</Title>
            <Paragraph>Please go back and select a car.</Paragraph>
          </Card.Content>
        </Card>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={car.carName} />
      </Appbar.Header>

      <Card style={styles.card}>
        <Card.Cover source={{ uri: car.imageUri || 'https://via.placeholder.com/400x200.png?text=Car+Image' }} />
        <Card.Content>
          <Title>{car.carName}</Title>
          <Paragraph><Paragraph style={styles.bold}>Model:</Paragraph> {car.carModel}</Paragraph>
          <Divider style={styles.divider} />
          <Paragraph><Paragraph style={styles.bold}>Year:</Paragraph> {car.carYear}</Paragraph>
          <Divider style={styles.divider} />
          <Paragraph><Paragraph style={styles.bold}>Color:</Paragraph> {car.carColor}</Paragraph>
          <Divider style={styles.divider} />
          <Paragraph><Paragraph style={styles.bold}>Price:</Paragraph> ${car.carPrice}</Paragraph>
          <Divider style={styles.divider} />
          {car.description ? (
            <>
              <Paragraph style={styles.bold}>Description:</Paragraph>
              <Paragraph>{car.description}</Paragraph>
            </>
          ) : null}
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => navigation.navigate('AddCar', { carToEdit: car })}>
            Edit
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 12,
  },
  divider: {
    marginVertical: 6,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default CarDetailsScreen;

