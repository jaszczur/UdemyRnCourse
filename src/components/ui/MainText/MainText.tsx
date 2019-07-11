import React, { PropsWithChildren } from "react";
import { TextInputProps, Text, StyleSheet } from "react-native";

export const MainText = (props: PropsWithChildren<TextInputProps>) => (
    <Text style={styles.mainText}>{props.children}</Text>
);

const styles = StyleSheet.create({
    mainText: {
        color: "#000",
        backgroundColor: "transparent"
    }
});
