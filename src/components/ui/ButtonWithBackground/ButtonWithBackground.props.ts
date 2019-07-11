import { PropsWithChildren } from "react";
import { GestureResponderEvent } from "react-native";

export type ButtonWithBackgroundProps = PropsWithChildren<{
    onPress: (event: GestureResponderEvent) => void,
    color?: string,
}>;
