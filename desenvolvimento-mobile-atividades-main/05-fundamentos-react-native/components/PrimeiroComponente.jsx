//imports
import React from "react";
import { Text } from "react-native";

//Função do componente
const PrimeiroComponente = ({
  fontSize,
  color,
  fontWeight,
  backgroundColor,
  borderRadius,
  children,
}) => {
  //retorno com JSX
  return (
    <Text
      style={{
        fontSize: fontSize && fontSize,
        color: color && color,
        fontWeight: fontWeight && fontWeight,
        backgroundColor: backgroundColor ? backgroundColor : "#0092c9",
        padding: "12",
        borderRadius: borderRadius ? borderRadius : 32,
      }}
    >
      {children}
    </Text>
  );
};

export default PrimeiroComponente;
