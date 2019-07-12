import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { DefaultButtonProps } from "./DefaultButton.props";

export const DefaultButton = (props: DefaultButtonProps) => (
    <View style={[styles.wrapper, props.style]}>
        <Button {...props} />
    </View>
);

const styles = StyleSheet.create({
    wrapper: {
        margin: 8,
    }
});
