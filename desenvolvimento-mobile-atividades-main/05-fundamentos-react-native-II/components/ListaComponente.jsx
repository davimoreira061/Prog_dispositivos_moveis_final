import { useState } from "react"
import { Button, Text, TextInput, View } from "react-native"

const ListaComponente = () => {
    const [list, setList] = useState(['Gol', 'Celta', 'Uno', 'Palio'])
    const [newCar, setNewCar] = useState('')

    const addNewCar = () => {
        if(newCar.trim != ''){
            setList(prevList => [...prevList, newCar])
            setNewCar('')
        }
    }

    return (
        <View>
            {list.map(car => <Text>{car}</Text>)}
            <TextInput placeholder="Insira um novo carro" value={newCar} onChangeText={e => setNewCar(e)}/>
            <Button title="Adicionar" onPress={addNewCar}/>
        </View>
    )
}

export default ListaComponente