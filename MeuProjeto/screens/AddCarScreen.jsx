import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Appbar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddCarScreen = ({ navigation }) => {
  const [carName, setCarName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carYear, setCarYear] = useState('');
  const [carColor, setCarColor] = useState('');
  const [carPrice, setCarPrice] = useState('');

  const saveCar = async () => {
    const newCar = { carName, carModel, carYear, carColor, carPrice };
    const existingCars = JSON.parse(await AsyncStorage.getItem('cars')) || [];
    existingCars.push(newCar);
    await AsyncStorage.setItem('cars', JSON.stringify(existingCars));
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Add Car" />
      </Appbar.Header>
      <TextInput label="Car Name" value={carName} onChangeText={setCarName} />
      <TextInput label="Model" value={carModel} onChangeText={setCarModel} />
      <TextInput label="Year" value={carYear} onChangeText={setCarYear} keyboardType="numeric" />
      <TextInput label="Color" value={carColor} onChangeText={setCarColor} />
      <TextInput label="Price" value={carPrice} onChangeText={setCarPrice} keyboardType="numeric" />
      <Button mode="contained" onPress={saveCar}>Save Car</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

import { Formik } from 'formik';
import * as Yup from 'yup';

// Defina o esquema de validação
const validationSchema = Yup.object().shape({
  carName: Yup.string().required('Car name is required'),
  carModel: Yup.string().required('Model is required'),
  carYear: Yup.number().required('Year is required').min(1886, 'Year must be valid'),
  carColor: Yup.string().required('Color is required'),
  carPrice: Yup.number().required('Price is required').positive('Price must be positive'),
});

// Dentro do componente AddCarScreen
<Formik
  initialValues={{ carName: '', carModel: '', carYear: '', carColor: '', carPrice: '' }}
  validationSchema={validationSchema}
  onSubmit={values => saveCar(values)}
>
  {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
    <View>
      <TextInput
        label="Car Name"
        onChangeText={handleChange('carName')}
        onBlur={handleBlur('carName')}
        value={values.carName}
      />
      {errors.carName && <Text style={{ color: 'red' }}>{errors.carName}</Text>}
      {/* Repita para os outros campos */}
      <Button onPress={handleSubmit}>Save Car</Button>
    </View>
  )}
</Formik>

export default AddCarScreen;
