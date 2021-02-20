import * as actionTypes from '../constants';

export const setRoomId = (data) => {
  return{
        type: actionTypes.SET_ROOM_ID,
        payload: data,
      };
}