import React from "react";
import { TabBarIconProps, DrawerIconProps } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import { nullToUndefined } from "../../utils";

export type NavigationIconProps = { iconName: string } & (TabBarIconProps | DrawerIconProps);

export const NavigationIcon = ({ iconName, tintColor }: NavigationIconProps) => (
    <Icon size={30} name={iconName} color={nullToUndefined(tintColor)} />
);

export const navigationIconProvider = (iconName: string) => {
    return (props: DrawerIconProps) => <NavigationIcon iconName={iconName} {...props} />;
}
