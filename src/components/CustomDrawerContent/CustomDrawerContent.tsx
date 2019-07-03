import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView, DrawerItems } from "react-navigation";
import { StyleSheet, View, Text, TextStyle } from "react-native";

export const CustomDrawerContentComponent = (props: any) => (
    <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <View>
                <Text style={styles.header}>Awesome Places</Text>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 8
    } as TextStyle
});
