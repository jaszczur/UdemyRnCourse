import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons";


type NavigationButtonProps = {
    onPress: () => void,
    iconName?: string
};

export const NavigationButton: React.SFC<NavigationButtonProps> = ({iconName, onPress}) => (
    <TouchableOpacity onPress={onPress} style={{ padding: 8 }}>
        <Icon size={30} name={iconName === undefined ? "md-menu" : iconName} />
    </TouchableOpacity>
);
