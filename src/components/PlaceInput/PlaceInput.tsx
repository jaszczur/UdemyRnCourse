import React, { FunctionComponent, useState } from "react";
import { StyleSheet } from "react-native";
import { DefaultInput } from "../ui/DefaultInput";

export interface PlaceInputProps {
    onNameConfirmed: (placeName: string) => void
};

export const PlaceInput: FunctionComponent<PlaceInputProps> = (props: PlaceInputProps) => {
    const [placeName, setPlaceName] = useState("");

    const confirmName = () => {
        const trimmedPlaceName = placeName.trim();
        if (trimmedPlaceName !== "") {
            props.onNameConfirmed(trimmedPlaceName);
        }
    };

    return (
        <DefaultInput
            placeholder="An awesome place"
            value={placeName}
            onChangeText={setPlaceName} 
            onSubmitEditing={confirmName} />
    );
};
