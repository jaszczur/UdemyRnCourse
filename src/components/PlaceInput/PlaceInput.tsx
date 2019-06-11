import React, { FunctionComponent, useState } from "react";
import { View, StyleSheet, ViewStyle, TextInput, Button } from "react-native";

export interface PlaceInputProps {
    onPlaceSubmit: (placeName: string) => void
};

export const PlaceInput: FunctionComponent<PlaceInputProps> = (props: PlaceInputProps) => {
    const [placeName, setPlaceName] = useState("");

    const submitPlace = () => {
        if (placeName.trim() !== "") {
            props.onPlaceSubmit(placeName);
            setPlaceName("");
        }
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.placeInput}
                placeholder="An awesome place"
                value={placeName}
                onChangeText={setPlaceName} />
            <Button
                style={styles.placeButton}
                title="Add"
                onPress={submitPlace} />
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