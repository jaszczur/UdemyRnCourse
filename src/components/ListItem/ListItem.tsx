import React, { FunctionComponent } from "react";
import { View, Text, StyleSheet, ViewStyle, TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity, GestureResponderEvent } from "react-native";

export interface ListItemProps {
    placeName: string,
    onPress: (event: GestureResponderEvent) => void
};

export const ListItem: FunctionComponent<ListItemProps> = (props: ListItemProps) => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={styles.listItem}>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        backgroundColor: '#eee',
        marginBottom: 5
    } as ViewStyle
});