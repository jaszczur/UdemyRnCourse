import React from "react";
import { TabBarIconProps, DrawerIconProps } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

export type NavigationIconProps = { iconName: string } & (TabBarIconProps | DrawerIconProps);
export const NavigationIcon = ({ iconName, focused, tintColor }: NavigationIconProps) => (
    <Icon size={30} name={iconName} color={tintColor} />
);

export const navigationIconProvider = (iconName: string) =>
    ((props: DrawerIconProps) => <NavigationIcon iconName={iconName} {...props} />);