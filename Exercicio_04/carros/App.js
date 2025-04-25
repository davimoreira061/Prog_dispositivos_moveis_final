import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

export default function App() {
  const nome = "Carros"

  function alerta() {
    alert('Os Melhores carros esportivos')
  }




  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={{ fontSize: 25 }}>Sobre</Text>
        <Text style={{ fontSize: 25 }}>{nome}</Text>
        <Text style={styles.textoGrande}>Nissan Gtr</Text>
        <Text style={styles.textoGrande}>Mazda</Text>
        <Text style={styles.textoGrande}>Skyline</Text>
        <Text style={styles.textoGrande}>Porsche</Text>
        <Text style={styles.textoGrande}>Ferrari</Text>

        <Text style={styles.textoGrande}>Isso aqui é vida!</Text>

        <Button title='Melhores carros' onPress={alerta}></Button>

        <Image
        
          source={{
            uri: 'https://i.pinimg.com/736x/13/8f/06/138f0675237eec3563d1475ec63f7262.jpg'
          }}
          style={{
            height: 225,
            width: 220
          }}
        ></Image>
        <Text style={styles.textoGrande}>Mazda</Text>
        <Image
          source={require('./Imagens/ferrari.jpg')}
          style={{
            height: 225,
            width: 260
          }}

        />
        <Text style={styles.textoGrande}>Ferrari</Text>
        <Image
        
          source={require('./Imagens/gtr.jpg')}
          style={{
            height: 225,
            width: 260
          }}

        />

<Text style={styles.textoGrande}>GTR</Text>
        <Image
          source={require('./Imagens/madza.jpg')}
          style={{
            height: 225,
            width: 260,
            fontSize: 10
          }}

        />
<Text style={styles.textoGrande}>A Mazda é uma marca japonesa de automóveis conhecida por sua inovação em design</Text> 
        <Image
          source={require('./Imagens/porsche.jpg')}
          style={{
            height: 225,
            width: 260,
            fontSize: 10
          }}

        />










      </View>



    </ScrollView>



  );
}


//Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  textoGrande: {
    fontSize: 50,
    fontWeight: 900,
    fontStyle: 'italic'
  }
});

