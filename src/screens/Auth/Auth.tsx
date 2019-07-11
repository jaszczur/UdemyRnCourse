import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { DefaultInput } from "../../components/ui/DefaultInput/DefaultInput";

export const AuthScreen = ({ navigation }: NavigationScreenProps) => {
    const handleLogIn = () => {
        navigation.navigate("Main");
    };

    return (
        <View style={styles.container}>
            <Text>Please log in</Text>
            <Button title="Switch to Log in" onPress={() => { }} />
            <View style={styles.inputContainer}>
                <DefaultInput placeholder="E-mail" style={styles.input}/>
                <DefaultInput placeholder="Password" />
                <DefaultInput placeholder="Confirm password" />
            </View>
            <Button title="Submit" onPress={handleLogIn} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
    }
});
