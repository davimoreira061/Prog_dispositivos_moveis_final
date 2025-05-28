import { PaperProvider } from 'react-native-paper';
import StackRoutes from './src/navigation/StackRoutes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </PaperProvider>
  );
}
