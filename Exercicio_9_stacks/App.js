import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import StackRoutes from './src/routes/StackRoutes';
import { DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primária: '#00000',
    destaque: '#9575cd',
    fundo: '#f3e5f5',
    superficie: '#ede7f6',
    texto: '#4a148c',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </PaperProvider>
  );
}