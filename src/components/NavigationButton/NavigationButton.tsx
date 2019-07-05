import React from 'react';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons";


type NavigationButtonProps = {
    onPress: () => void,
    iconName?: string
};

export const NavigationButton: React.SFC<NavigationButtonProps> = ({iconName, onPress}) => (
    <TouchableNativeFeedback onPress={onPress} style={{ padding: 8 }}>
        <Icon size={30} name={iconName === undefined ? "md-menu" : iconName} />
    </TouchableNativeFeedback>
);
