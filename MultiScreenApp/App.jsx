/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import {
        SafeAreaProvider,
} from 'react-native-safe-area-context';

import StackNavigator from './src/navigation/StackNavigator';
function App() {
        return (
                <SafeAreaProvider>
                        <NavigationContainer>
                                <StackNavigator />
                        </NavigationContainer>
                </SafeAreaProvider>
        );
}

export default App;
