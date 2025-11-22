/**
 * @fileoverview A detail screen that shows Item ID and Item Name
 * @author Horia Humaila
 * @author Carson Fujita
 * @version 1.0.0
 * @license GPL-3.0-or-later
 */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Button, StyleSheet } from 'react-native';
const DetailsScreen = ({ route, navigation }) => {
        const { itemId, itemName } = route.params;
        return (
                <SafeAreaView style={styles.container}>
                        <Text style={styles.title}>Details Screen</Text>
                        <Text style={styles.text}>Item ID: {itemId}</Text>
                        <Text style={styles.text}>Item Name: {itemName}</Text>
                        <Button title="Go Back" onPress={() => navigation.goBack()} />
                        <Button
                                title="Update Params"
                                onPress={() =>
                                        navigation.setParams({
                                                itemName: 'Updated Item',
                                        })
                                }
                        />
                </SafeAreaView>
        );
};
const styles = StyleSheet.create({
        container: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 20,
        },
        title: {
                fontSize: 24,
                fontWeight: 'bold',
                marginBottom: 20,
        },
        text: {
                fontSize: 16,
                marginBottom: 10,
        },
});
export default DetailsScreen;
