import React, { FunctionComponent } from "react";
import { View, Text, StyleSheet, ViewStyle, Alert } from "react-native";
import { ListItem } from "../ListItem/ListItem";

export interface PlaceListProps {
    items: string[];
    onItemDeleted: (index: number) => void;
};

export const PlaceList: FunctionComponent<PlaceListProps> = (props: PlaceListProps) => {
    const itemsOutput = props.items.map((item, idx) =>
        <ListItem
            key={idx}
            placeName={item}
            onPress={() => props.onItemDeleted(idx)} />);
    return (
        <View style={styles.listContainer}>
            {itemsOutput}
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});