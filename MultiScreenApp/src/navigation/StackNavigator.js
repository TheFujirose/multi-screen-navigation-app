/**
 * @fileoverview
 * @author Horia Humaila
 * @author Carson Fujita
 * @version 1.0.0
 * @license GPL-3.0-or-later
 */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TabNavigator from './TabNavigator';
const Stack = createStackNavigator();
const StackNavigator = () => {
        return (
                <Stack.Navigator
                        initialRouteName="Home"
                        screenOptions={{
                                headerStyle: {
                                        backgroundColor: '#3498db',
                                },
                                headerTintColor: '#fff',
                                headerTitleStyle: {
                                        fontWeight: 'bold',
                                },
                        }}>
                        <Stack.Screen
                                name="Home"
                                component={TabNavigator}
                                options={{
                                        title: 'Home',
                                        headerShown: false,
                                }}

                        />
                        <Stack.Screen
                                name="Details"
                                component={DetailsScreen}
                                options={({ route }) => ({
                                        title: route.params?.itemName || 'Details',
                                })}
                        />
                        <Stack.Screen
                                name="Profile"
                                component={ProfileScreen}
                                options={{ title: 'My Profile' }}
                        />
                        <Stack.Screen
                                name="Settings"
                                component={SettingsScreen}
                                options={{ title: 'My Settings' }}
                        />
                </Stack.Navigator>
        );
};
export default StackNavigator;
