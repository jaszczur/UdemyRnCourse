import React, { FunctionComponent, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-navigation";
import { useDispatch } from "react-redux";
import { ImagePicker } from "../../components/ImagePicker";
import { PlacePicker } from "../../components/PlacePicker";
import { DefaultButton } from "../../components/ui/DefaultButton";
import { HeadingText } from "../../components/ui/HeadingText";
import { addPlace } from "../../store/actions";
import { PlaceInput } from "../../components/PlaceInput/PlaceInput";
import { DefaultInput } from "../../components/ui/DefaultInput";
import { showMessage } from "../../components/ui/messages";

export const SharePlaceScreen: FunctionComponent = () => {
    const dispatch = useDispatch();
    const [placeName, setPlaceName] = useState("");

    const shareThePlace = () => {
        const trimmedPlaceName = placeName.trim();
        if (trimmedPlaceName === "") {
            showMessage("Place name cannot be empty 😝");
            return;
        }
        
        dispatch(addPlace({
            name: trimmedPlaceName,
            key: Math.random().toString(),
            image: require("../../assets/amazing04.jpg")
        }));
        setPlaceName("");
     };

    return (
        <ScrollView>
            <View style={styles.container}>
                <HeadingText>Share a place with us!</HeadingText>
                <ImagePicker />
                <PlacePicker />
                <PlaceInput placeName={placeName} onPlaceNameChanged={setPlaceName} />
                <DefaultButton title="Share the place" onPress={shareThePlace} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    placeholder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 250
    },
    imagePreview: {
        width: "100%",
        height: "100%"
    }
});
