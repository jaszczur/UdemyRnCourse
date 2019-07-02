import React, { FunctionComponent } from "react";
import { View, Text, Button } from "react-native";
import { NavigationScreenProps } from "react-navigation";

export const AuthScreen = ({ navigation }: NavigationScreenProps) => {
    const handleLogIn = () => {
        navigation.navigate("Main");
    };

    return (
        <View>
            <Text>Auth screen</Text>
            <Button title="Login" onPress={handleLogIn}/>
        </View>
    );
};
