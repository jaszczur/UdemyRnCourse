import React, { FunctionComponent } from "react";
import { View, Text, StyleSheet, ViewStyle, TouchableOpacity, Image, ImageStyle, Modal, Button, TextStyle } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Place, OptionalPlace } from "../../store/model";

export interface PlaceDetailsProps {
    place: OptionalPlace,
    onClose: () => void,
    onDelete: (place: Place) => void
};

export const PlaceDetails: FunctionComponent<PlaceDetailsProps> =
    ({ place, onClose, onDelete }: PlaceDetailsProps) => {
        let modalContent = null;
        if (place !== null) {
            modalContent = (
                <View>
                    <Image source={place.image} style={styles.image} />
                    <Text style={styles.placeName}>{place.name}</Text>
                </View>
            )
        }

        return (
            <Modal visible={place !== null} animationType="slide" onRequestClose={onClose}>
                <View style={styles.modalContainer}>
                    {modalContent}
                    <View>
                        <TouchableOpacity onPress={() => { if (place !== null) onDelete(place) }}>
                            <View style={styles.deleteButton}>
                                <Icon size={30} name="ios-trash" color="red"/>
                            </View>
                        </TouchableOpacity>
                        <Button title="Close" onPress={onClose} />
                    </View>
                </View>
            </Modal>
        );
    };

const styles = StyleSheet.create({
    modalContainer: {
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