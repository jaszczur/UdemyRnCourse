import React, { FunctionComponent } from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";

export interface ListItemProps {
    placeName: string
};

export const ListItem: FunctionComponent<ListItemProps> = (props: ListItemProps) => (
    <View style={styles.listItem}>
        <Text>{props.placeName}</Text>
    </View>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        backgroundColor: '#eee',
        marginBottom: 5
    } as ViewStyle
});