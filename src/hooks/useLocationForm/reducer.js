import { ACTIONS } from "./constants";
import cities from "./address.json";
export const locationReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INITIAL_STATE: {
      return {
        ...state,
        cityOptions: cities,
      };
    }

    case ACTIONS.SELECTED_CITY: {
      const selectedCity = cities.find((item) => item.Name === action.payload);
      return {
        ...state,
        address: {
          ...state.address,
          city: action.payload,
        },
        districtOptions: selectedCity.Districts,
        wardOptions: [],
      };
    }

    case ACTIONS.SELECTED_DISTRICT: {
      console.log(action.payload);
      const selectedCity = cities.find(
        (item) => item.Name === state.address.city
      );
      const selectedDistrict = selectedCity.Districts.find(
        (item) => item.Name === action.payload
      );

      return {
        ...state,
        address: {
          ...state.address,
          district: action.payload,
        },
        wardOptions: selectedDistrict.Wards,
      };
    }
    case ACTIONS.SELECTED_WARD:
      return {
        ...state,
        address: {
          ...state.address,
          ward: action.payload,
        },
      };

    default:
      return state;
  }
};
