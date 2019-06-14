import React, { FunctionComponent } from "react";
import { View, Text, StyleSheet, ViewStyle, TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity, GestureResponderEvent, Image, ImageStyle } from "react-native";
import { Place } from "../../model";

export interface ListItemProps {
    place: Place,
    onPress: (event: GestureResponderEvent) => void
};

export const ListItem: FunctionComponent<ListItemProps> = (props: ListItemProps) => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={styles.listItem}>
            <Image source={props.place.image} style={styles.image} />
            <Text>{props.place.name}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        backgroundColor: "#eee",
        marginBottom: 5,
        flexDirection: "row",
        alignItems: "center",
    } as ViewStyle,
    image: {
        marginRight: 8,
        height: 30,
        width: 30
    } as ImageStyle
});