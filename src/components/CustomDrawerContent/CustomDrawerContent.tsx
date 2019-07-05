import React from "react";
import { ScrollView, TouchableNativeFeedback } from "react-native-gesture-handler";
import { SafeAreaView, DrawerItems, DrawerItemsProps } from "react-navigation";
import { StyleSheet, View, Text, TextStyle, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export const CustomDrawerContentComponent = (props: DrawerItemsProps) => {
    const onBackButtonPressed = () => {
        props.navigation.closeDrawer();
    };
    return (
        <ScrollView>
            <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
                <View style={styles.topBar}>
                    <Text style={styles.header}>Awesome Places</Text>
                    <TouchableNativeFeedback style={styles.backButton} onPress={onBackButtonPressed}>
                        <Icon name="md-arrow-dropleft" size={30} />
                    </TouchableNativeFeedback>
                </View>
                <DrawerItems {...props} />
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 50
    },
    backButton: {
        margin: 8,
        width: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 8
    } as TextStyle
});
