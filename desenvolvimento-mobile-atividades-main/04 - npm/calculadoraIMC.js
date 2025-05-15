export const calcularImc = (peso, altura) => {
    return peso/(altura*altura)
}

export const tabelaIMC = [
    {limite: 18.5, classificacao: "Magreza"},
    {limite: 24.9, classificacao: "Normal"},
    {limite: 29.9, classificacao: "Sobrepeso"},
    {limite: 34.9, classificacao: "Obesidade de grau I"},
    {limite: 39.9, classificacao: "Obesidade de grau II"},
    {limite: 40, classificacao: "Obesidade de grau III"},
]