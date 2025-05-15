import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import FirstComponent from './components/FirstComponent';
import Perfil from './components/Perfil';
import ListaComponente from './components/ListaComponente';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <FirstComponent fontSize={28} fontWeight={800}>This is a component</FirstComponent>
      {/* <Perfil name={'Matheus'} age={32} phone={'982732473'} email={'somemail@mail.com'}/>
      <Perfil name={'Guilherme'} age={28} phone={'12341343214123'} email={'guilherme@mail.com'}/>
      <Perfil name={'Matheus'} age={32} phone={'982732473'} email={'somemail@mail.com'}/>
      <Perfil name={'Matheus'} age={32} phone={'982732473'} email={'somemail@mail.com'}/> */}
      <ListaComponente/>
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
