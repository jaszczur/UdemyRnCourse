import React from "react";
import { StyleSheet, Text } from "react-native";
import { HeadingTextProps } from "./HeadingText.props";
import { MainText } from "../MainText";

export const HeadingText = (props: HeadingTextProps) => (
    <MainText>
        <Text {...props} style={[styles.textHeading, props.style]}>
            {props.children}
        </Text>
    </MainText>
);

const styles = StyleSheet.create({
    textHeading: {
        fontSize: 28,
        fontWeight: "bold"
    },
});
