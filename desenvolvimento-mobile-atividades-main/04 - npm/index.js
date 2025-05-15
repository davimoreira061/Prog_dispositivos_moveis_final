import moment from "moment"
import { calcularImc } from "./calculadoraIMC.js"

const result = calcularImc(79, 1.7)
console.log(result.toFixed(2))

// console.log(moment())

const date = new Date
const localeDate = date.toLocaleDateString("pt-BR")
console.log(localeDate)