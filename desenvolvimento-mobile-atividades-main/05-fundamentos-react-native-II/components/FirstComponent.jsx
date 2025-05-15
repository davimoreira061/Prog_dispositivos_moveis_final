import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const FirstComponent = ({ color, fontSize, fontWeight, children }) => {

    const [name, setName] = useState('')

    const checkAge = (age) => {
        return age >= 18 ? "Maior de idade" : "Menor de idade"
    }

    return (
    <View style={styles.container}>
      <Text
        style={{
          color: color && color,
          fontSize: fontSize && fontSize,
          fontWeight: fontWeight && fontWeight,
        }}
      >
        {children}
      </Text>
      <Text>{name}</Text>
      <Text>{checkAge(19)}</Text>
      <TextInput placeholder="Nome" value={name} onChangeText={e => setName(e)} style={{backgroundColor: '#fff'}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    borderWidth: 5,
    padding: 10,
  },
});

export default FirstComponent;
