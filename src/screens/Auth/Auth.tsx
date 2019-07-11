import React from "react";
import { Button, StyleSheet, Text, View, ImageBackground } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { DefaultInput } from "../../components/ui/DefaultInput";
import { HeadingText } from "../../components/ui/HeadingText";

import backgroundImage from "../../assets/background.jpg";

export const AuthScreen = ({ navigation }: NavigationScreenProps) => {
    const handleLogIn = () => {
        navigation.navigate("Main");
    };

    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <View style={styles.container}>
                <HeadingText>Please log in</HeadingText>
                <Button title="Switch to Log in" onPress={() => { }} />
                <View style={styles.inputContainer}>
                    <DefaultInput placeholder="E-mail" style={styles.input} />
                    <DefaultInput placeholder="Password" style={styles.input} />
                    <DefaultInput placeholder="Confirm password" style={styles.input} />
                </View>
                <Button title="Submit" onPress={handleLogIn} />
            </View>
        </ImageBackground>
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
        backgroundColor: "#fff",
    },
    backgroundImage: {
        width: "100%",
        flex: 1
    }
});
