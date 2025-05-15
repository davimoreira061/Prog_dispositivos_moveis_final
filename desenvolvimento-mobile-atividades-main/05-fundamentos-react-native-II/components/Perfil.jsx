import { StyleSheet, Text, View } from "react-native"

const Perfil = ({name, age, phone, email}) => {
    return(
        <View style={styles.container}>
            <Text>Perfil</Text>
            <Text>NOME: {name}</Text>
            <Text>IDADE: {age}</Text>
            <Text>TELEFONE: {phone}</Text>
            <Text>EMAIL: {email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "yellow",
      borderWidth: 5,
      padding: 10,
    },
  });

export default Perfil