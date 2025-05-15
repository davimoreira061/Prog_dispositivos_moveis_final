import { StyleSheet, View } from 'react-native';
import PrimeiroComponente from './components/PrimeiroComponente';
import SegundoComponente from './components/SegundoComponente';

export default function App() {
  return (
    <View style={styles.container}>
      <PrimeiroComponente color={'white'} fontSize={22} fontWeight={900} backgroundColor={'#00ba9c'}>MEU PRIMEIRO COMPONENTE</PrimeiroComponente>
      <PrimeiroComponente color={'white'} fontSize={22}>Meu Primeiro Componente 2</PrimeiroComponente>
      <SegundoComponente/>
    </View>
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
