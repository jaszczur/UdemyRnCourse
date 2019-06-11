import React, { FunctionComponent } from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import { ListItem } from "../ListItem/ListItem";

export interface ListProps {
    items: string[]
};

export const List: FunctionComponent<ListProps> = (props: ListProps) => {
    const itemsOutput = props.items.map((item, idx) => <ListItem key={idx} placeName={item} />);
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