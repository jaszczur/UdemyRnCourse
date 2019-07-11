import React from "react";
import { Alert, ImageBackground, StyleSheet, View } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import backgroundImage from "../../assets/background.jpg";
import { ButtonWithBackground } from "../../components/ui/ButtonWithBackground";
import { DefaultInput } from "../../components/ui/DefaultInput";
import { HeadingText } from "../../components/ui/HeadingText";


export const AuthScreen = ({ navigation }: NavigationScreenProps) => {
    const handleLogIn = () => {
        navigation.navigate("Main");
    };

    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <View style={styles.container}>
                <HeadingText>Please log in</HeadingText>
                <ButtonWithBackground color="#29aaf4" onPress={() => { Alert.alert("yo") }}>
                    Switch to Log in
                </ButtonWithBackground>
                <View style={styles.inputContainer}>
                    <DefaultInput placeholder="E-mail" style={styles.input} />
                    <DefaultInput placeholder="Password" style={styles.input} />
                    <DefaultInput placeholder="Confirm password" style={styles.input} />
                </View>
                <ButtonWithBackground color="#29aaf4" onPress={handleLogIn}>
                    Submit
                </ButtonWithBackground>
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
