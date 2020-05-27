import { ImageSourcePropType } from 'react-native';

export type PlaceId = string;

export interface Place {
  key: PlaceId;
  name: string;
  image: ImageSourcePropType;
}

export type OptionalPlace = Place | null;

export interface Places {
  places: Place[];
}

export interface ApplicationState {
  places: Places;
}

export const INITIAL_STATE: ApplicationState = {
  places: {
    places: [],
  },
};
