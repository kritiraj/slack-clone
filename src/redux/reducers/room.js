import * as actionTypes from '../constants';
const roomReducer = (
    state = {
      roomId:null,
    },
    action
  ) => {
    switch (action.type) {
      case actionTypes.SET_ROOM_ID:
        return {
          ...state,
          roomId:action.payload.roomId
        }
      default:
        return state;
    }
  } 
  export default roomReducer;