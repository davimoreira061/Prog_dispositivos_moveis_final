import { StatusBar } from 'expo-status-bar';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import CustomText from './components/CustomText';
import { useState } from 'react';

export default function App() {

  const [name, setName] = useState('')

  const alerta = () => {
    alert(`Nome do usuário: ${name}`)
  }

  return (
    <ScrollView style={{paddingTop: '62'}}>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CustomText color={'red'} fontSize={32} fontWeight={900}>MEU TEXTO</CustomText>
      <TextInput placeholder='Nome' style={{ borderColor: 'black' }} value={name} onChangeText={e => setName(e)} />
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Image
      source={require('./assets/200.jpg')}
      style={{
        width: 150,
        height: 150
      }}
      />
      <Button title='ENVIAR' onPress={alerta} />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
