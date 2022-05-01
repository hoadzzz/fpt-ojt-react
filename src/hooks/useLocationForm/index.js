import React, { useEffect, useReducer } from "react";

import { locationReducer } from "./reducer";

import { ACTIONS } from "./constants";

const useLocationForm = () => {
  const initLocationState = {
    address: {
      city: "",
      district: "",
      ward: "",
    },
    cityOptions: [],
    districtOptions: [],
    wardOptions: [],
  };

  const [location, dispatch] = useReducer(locationReducer, initLocationState);

  useEffect(() => {
    dispatch({ type: ACTIONS.INITIAL_STATE });
  }, []);

  const onSelectCity = (city) => {
    dispatch({ type: ACTIONS.SELECTED_CITY, payload: city });
  };
  const onSelectDistrict = (district) => {
    dispatch({ type: ACTIONS.SELECTED_DISTRICT, payload: district });
  };
  const onSelectWard = (ward) => {
    dispatch({ type: ACTIONS.SELECTED_WARD, payload: ward });
  };

  return {
    location,
    onSelectCity,
    onSelectDistrict,
    onSelectWard,
  };
};

export default useLocationForm;
