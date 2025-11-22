/**
 * @fileoverview A prototype settings screen
 * @author Horia Humaila
 * @author Carson Fujita
 * @version 1.0.0
 * @license GPL-3.0-or-later
 */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Switch, StyleSheet } from 'react-native';
const SettingsScreen = () => {
        const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
        const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);
        return (
                <SafeAreaView style={styles.container}>
                        <Text style={styles.title}>Settings Screen</Text>
                        <View style={styles.settingRow}>
                                <Text style={styles.settingText}>Notifications</Text>
                                <Switch
                                        value={notificationsEnabled}
                                        onValueChange={setNotificationsEnabled}
                                />
                        </View>
                        <View style={styles.settingRow}>
                                <Text style={styles.settingText}>Dark Mode</Text>
                                <Switch
                                        value={darkModeEnabled}
                                        onValueChange={setDarkModeEnabled}
                                />
                        </View>
                </SafeAreaView>
        );
};
const styles = StyleSheet.create({
        container: {
                flex: 1,
                padding: 20,
        },
        title: {
                fontSize: 24,
                fontWeight: 'bold',
                marginBottom: 20,
                textAlign: 'center',
        },
        settingRow: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 16,
                borderBottomWidth: 1,
                borderBottomColor: '#eee',
        },
        settingText: {
                fontSize: 16,
        },
});
export default SettingsScreen;
