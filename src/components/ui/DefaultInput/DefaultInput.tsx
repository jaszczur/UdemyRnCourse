import React, { useState } from 'react';
import { StyleSheet, TextInput, TextInputProperties } from 'react-native';

export const DefaultInput: React.SFC<TextInputProperties> = (props) => {
    const [inputStype, setInputStyle] = useState(styles.input);

    const onFocus = () => {
        setInputStyle(styles.focusedInput);
    }

    const onBlur = () => {
        setInputStyle(styles.input);
    }

    return (
        <TextInput
            style={inputStype}
            onFocus={onFocus}
            onBlur={onBlur}
            underlineColorAndroid="transparent"
            {...props} />
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
        width: "100%",
        borderWidth: 1,
        borderColor: "#1976d2",
        borderRadius: 5,
        padding: 5,
        margin: 8,
    }
});

