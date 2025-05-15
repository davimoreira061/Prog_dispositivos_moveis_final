import { StatusBar } from 'expo-status-bar';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import CustomText from './components/CustomText.js';

export default function App() {

  const alerta = () => {
    alert("Sometimes it is the people no one can imagine anything of who do the things no one can imagine.")
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CustomText fontSize={32}>Alan Turing</CustomText>
      <Text>Local de Nascimento: Londres - Inglaterra</Text>
      <Text>Data de Nascimento: 23 de junho de 1912</Text>
      <Text style={{paddingRight: '5'}}>Alan Turing foi um matemático, lógico e cientista da computação britânico, considerado um dos pais da ciência da computação moderna. Ele é mais conhecido por seu trabalho na quebra do código Enigma durante a Segunda Guerra Mundial, o que ajudou a acelerar a vitória dos aliados contra a Alemanha nazista. Turing também formulou a famosa "Máquina de Turing", um modelo teórico que fundamentou o desenvolvimento dos computadores. Além disso, Turing fez importantes contribuições à inteligência artificial, sendo pioneiro na ideia de máquinas pensantes. Sua vida foi marcada por perseguições devido à sua orientação sexual, e ele faleceu em 1954, aos 41 anos.</Text>
      
      <Image style={styles.images}
      source={require('./assets/Turing-1.jpeg')}
      />
      <Image style={styles.images}
      source={require('./assets/Turing-3.jpg')}
      />
      <Image style={styles.images}
      source={require('./assets/Turing-3.jpg')}
      />
      <Button title='CLIQUE AQUI' onPress={alerta}/>
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
    paddingTop: 50
  },

  images: {
    width: 250,
    height: 250,
    paddingTop: 32,
    paddingBottom: 32,
    justifyContent: 'center',

  }
});
