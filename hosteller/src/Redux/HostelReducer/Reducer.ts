import {
  ADD_LOCATION_TO_CART,
  REMOVE_LOCATION_FROM_CART,
} from "../ActiomnTypes";

const InitialState = {
  locations: [] as any[],
  id: "hey",
};

export const HostelReducer = (state = InitialState, action: any) => {
  switch (action.type) {
    case ADD_LOCATION_TO_CART:
      return {
        locations: [...state.locations, action.payload],
      };
    case REMOVE_LOCATION_FROM_CART:
      return {
        locations: state.locations.filter(
          (location) => location.name !== action.payload.name
        ),
      };
    default:
      return state;
  }
};
