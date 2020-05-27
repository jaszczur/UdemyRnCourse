import React, { FunctionComponent, useState } from 'react';
import { DefaultInput } from '../ui/DefaultInput';

export interface PlaceInputProps {
  placeName: string;
  onPlaceNameChanged: (newPlaceName: string) => void;
}

export const PlaceInput: FunctionComponent<PlaceInputProps> = (
  props: PlaceInputProps
) => {
  const { placeName, onPlaceNameChanged } = props;
  return (
    <DefaultInput
      placeholder="An awesome place"
      value={placeName}
      onChangeText={onPlaceNameChanged}
    />
  );
};
