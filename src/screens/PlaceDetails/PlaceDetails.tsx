import React, { FunctionComponent } from "react";
import { View, Text, StyleSheet, ViewStyle, TouchableOpacity, Image, ImageStyle, Button, TextStyle } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { PlaceId, ApplicationState } from "../../store/model";
import { NavigationScreenProps } from "react-navigation";
import { useSelector, useDispatch } from "react-redux";
import { deletePlace } from "../../store/actions";

export interface PlaceDetailsScreenNavigationParams {
    placeId: PlaceId,
    placeName: string
};

export type PlaceDetailsScreenProps = NavigationScreenProps<PlaceDetailsScreenNavigationParams>;

export const PlaceDetailsScreen: FunctionComponent<PlaceDetailsScreenProps> =
    ({ navigation }: PlaceDetailsScreenProps) => {
        const placeId = navigation.getParam("placeId");
        const place = useSelector((state: ApplicationState) => state.places.places.find(p => p.key === placeId));
        const dispatch = useDispatch();
        const onDelete = () => {
            dispatch(deletePlace(placeId));
            navigation.goBack();
        };

        return place !== undefined ?
            (
                <View style={styles.container}>
                    <View>
                        <Image source={place.image} style={styles.image} />
                    </View>
                    <View>
                        <TouchableOpacity onPress={onDelete}>
                            <View style={styles.deleteButton}>
                                <Icon size={30} name="ios-trash" color="red" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            )
            : <View><Text>Place not found</Text></View>;
    };


const styles = StyleSheet.create({
    container: {
        margin: 22
    } as ViewStyle,
    image: {
        width: "100%",
        height: 200,
    } as ImageStyle,
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 24
    } as TextStyle,
    deleteButton: {
        alignItems: "center"
    } as ViewStyle
});