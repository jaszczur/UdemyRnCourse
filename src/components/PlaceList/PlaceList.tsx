import React, { FunctionComponent } from "react";
import { ScrollView, StyleSheet, FlatList } from "react-native";
import { ListItem } from "../ListItem/ListItem";
import { Place } from "../../model";

export interface PlaceListProps {
    items: Place[];
    onItemDeleted: (place: Place) => void;
};

export const PlaceList: FunctionComponent<PlaceListProps> = (props: PlaceListProps) => {
    return (
        <FlatList style={styles.listContainer}
            data={props.items}
            renderItem={(info) => (
                <ListItem
                    placeName={info.item.name}
                    onPress={() => props.onItemDeleted(info.item)} />
            )}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});