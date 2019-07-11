import React, { FunctionComponent } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { PlaceInput } from "../../components/PlaceInput/PlaceInput";
import { addPlace } from "../../store/actions";

export const SharePlaceScreen: FunctionComponent = () => {
    const dispatch = useDispatch();

    const handlePlaceAdded = (placeName: string) => {
        dispatch(addPlace({
            name: placeName,
            key: Math.random().toString(),
            image: require("../../assets/amazing04.jpg")
        }))
    };

    return (
        <View>
            <PlaceInput onPlaceSubmit={handlePlaceAdded}/>
        </View>
    );
};
