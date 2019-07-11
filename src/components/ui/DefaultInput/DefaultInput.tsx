import React, { useState } from 'react';
import { StyleSheet, TextInput, TextInputProperties, TextStyle } from 'react-native';

export const DefaultInput: React.FunctionComponent<DefaultInputProps> = (props) => {
    const [inputStyle, setInputStyle] = useState([styles.input, props.style]);

    const onFocus = () => {
        setInputStyle([styles.input, props.style, styles.focusedInput, props.focusedStyle]);
    }

    const onBlur = () => {
        setInputStyle([styles.input, props.style]);
    }

    return (
        <TextInput
            onFocus={onFocus}
            onBlur={onBlur}
            underlineColorAndroid="transparent"
            {...props}
            style={inputStyle} />
    );
};

const styles = StyleSheet.create({
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 5,
        padding: 5,
        margin: 8,
    },
    focusedInput: {
        borderColor: "#1976d2",
    }
});

