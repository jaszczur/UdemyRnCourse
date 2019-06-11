import React, { FunctionComponent } from "react";
import { View, StyleSheet, ViewStyle, TextInput, Button } from "react-native";

export interface UserInputProps {
    placeName: string,
    setPlaceName: (newName: string) => void,
    onPlaceSubmit: () => void
};

export const UserInput: FunctionComponent<UserInputProps> = (props: UserInputProps) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.placeInput}
                placeholder="An awesome place"
                value={props.placeName}
                onChangeText={props.setPlaceName} />
            <Button
                style={styles.placeButton}
                title="Add"
                onPress={props.onPlaceSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    } as ViewStyle,
    placeInput: {
        width: "70%"
    },
    placeButton: {
        width: "30%"
    },
});