import reducer from './places';
import { INITIAL_STATE } from '../model';
import { addPlace } from '../actions';

describe('Places reducer', ()=>{

  it('should return initial state', ()=>{
    expect((reducer as any)(undefined, {type:"init"})).toEqual({places:[]});
  });

  it('should return state with added place', ()=>{
    const place = {key: "aaa",
                   name:"bbb",
                   image: require("../../assets/amazing04.jpg")};
    expect(reducer(INITIAL_STATE.places, addPlace(place))).toEqual({places:[place]});
  });
});
