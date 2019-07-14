import React from "react";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { ScrollView, TouchableNativeFeedback } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import { DrawerItemsProps, SafeAreaView } from "react-navigation";
import { showMessage } from "../ui/messages";

export const CustomDrawerContentComponent = (props: DrawerItemsProps) => {
    const onBackButtonPressed = () => {
        props.navigation.closeDrawer();
    };
    return (
        <ScrollView>
            <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
                <View style={styles.topBar}>
                    <Text style={styles.header}>Awesome Places</Text>
                    <TouchableNativeFeedback style={styles.backButton} onPress={onBackButtonPressed} useForeground={true}>
                        <Icon name="md-arrow-dropleft" size={30} />
                    </TouchableNativeFeedback>
                </View>

                {/* <DrawerItems {...props} /> */}

                <TouchableNativeFeedback onPress={() => showMessage("TODO")} style={styles.drawerItem} useForeground={true}>
                    <Icon name="md-log-out" size={30} color="#aaa" style={styles.drawerItemIcon} />
                    <Text>Sign out</Text>
                </TouchableNativeFeedback>

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
    drawerItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#eee"
    } as ViewStyle,
    drawerItemIcon: {
        marginRight: 10
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 8
    } as TextStyle
});
