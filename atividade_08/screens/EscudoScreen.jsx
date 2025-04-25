import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const EscudoScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>Escudos do Barcelona</Text>
      </View>
      <Image
        source={{ uri: 'https://i0.wp.com/media1.fcbarcelona.com/media/asset_publics/resources/000/086/175/original/640x360_historia_escut.1317115158_02.v1392032464.jpg' }}
        style={styles.escudo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  tituloContainer: {
    backgroundColor: '#522546', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  titulo: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  escudo: {
    width: 300,
    height: 400,
    resizeMode: 'contain',
  },
});

export default EscudoScreen;
