/**
 * @fileoverview React Navigation Bottom Tab Navigation bar
 * @author Carson Fujita
 * @author React Native Documentation
 * @version 1.0.0
 * @license GPL-3.0-or-later
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';

// Screens
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
        return (
                <Tab.Navigator
                        screenOptions={({ route }) => ({
                                tabBarIcon: ({ focused, color, size }) => {
                                        let iconName;

                                        switch (route.name) {
                                                case 'Home':
                                                        iconName = 'home';
                                                        break;
                                                case 'Search':
                                                        iconName = 'search';
                                                        break;
                                                case 'Profile':
                                                        iconName = 'person';
                                                        break;
                                        }
                                        return <MaterialIcons name={iconName} size={size} color={color} />
                                },
                        })}
                >
                        <Tab.Screen name="Home" component={HomeScreen} />

                        <Tab.Screen name="Search" component={SearchScreen} />

                        <Tab.Screen name="Profile" component={ProfileScreen} />
                </Tab.Navigator>
        );
};
export default TabNavigator;
