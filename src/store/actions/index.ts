import { PlacesActionType } from "./places";
import { NavigationActionType } from "./navigation";

export * from "./places";
export * from "./navigation";

export type ApplicationActionType = PlacesActionType | NavigationActionType;
