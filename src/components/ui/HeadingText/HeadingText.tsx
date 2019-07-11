import React from "react";
import { StyleSheet, Text } from "react-native";
import { HeadingTextProps } from "./HeadingText.props";

export const HeadingText = (props: HeadingTextProps) => (
    <Text {...props} style={[styles.textHeading, props.style]}>
        {props.children}
    </Text>
);

const styles = StyleSheet.create({
    textHeading: {
        fontSize: 28,
        fontWeight: "bold"
    },
});
