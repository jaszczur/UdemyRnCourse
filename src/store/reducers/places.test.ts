import reducer from './places';
import { INITIAL_STATE } from '../model';
import { addPlace, deletePlace } from '../actions';

describe('Places reducer', () => {
  it('should return initial state', () => {
    expect((reducer as any)(undefined, { type: 'init' })).toEqual({
      places: [],
    });
  });

  it('should return state with added place', () => {
    const place = {
      key: 'aaa',
      name: 'bbb',
      image: require('../../assets/amazing04.jpg'),
    };
    expect(reducer(INITIAL_STATE.places, addPlace(place))).toEqual({
      places: [place],
    });
  });

  it('should return state with place removed', () => {
    const place = {
      key: 'aaa',
      name: 'bbb',
      image: require('../../assets/amazing04.jpg'),
    };
    const state = reducer(INITIAL_STATE.places, addPlace(place));
    expect(reducer(state, deletePlace(place.key))).toEqual({
      places: [],
      selectedPlace: null,
    });
  });
});
