import {
  ADD_LOCATION_TO_CART,
  REMOVE_LOCATION_FROM_CART,
} from "../ActiomnTypes";

export const addReservations = (payload: any) => (dispatch: any) => {
  dispatch({ type: ADD_LOCATION_TO_CART, payload: payload });
};

export const removeReservations = (payload: any) => (dispatch: any) => {
  dispatch({ type: REMOVE_LOCATION_FROM_CART, payload: payload });
};
