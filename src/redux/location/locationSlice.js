import { createSlice } from '@reduxjs/toolkit';
import cities from "../../assets/fake-data/address.json";

const locationSlice = createSlice({
    name: "location",
    initialState: {
        address: {
            city: "",
            district: "",
            ward: "",
        },
        cityOptions: cities,
        districtOptions: [],
        wardOptions: [],
    },
    reducers: {
        selectedCity: (state, action) => {
            const selectedCity = cities.find((item) => item.Name === action.payload);
            state.address.city = action.payload;
            state.districtOptions = selectedCity.Districts;
            state.wardOptions = [];
        },
        selectedDistrict: (state, action) => {
            const selectedCity = cities.find(
                (item) => item.Name === state.address.city
            );
            const selectedDistrict = selectedCity.Districts.find(
                (item) => item.Name === action.payload
            );
            state.address.district = action.payload;
            state.wardOptions = selectedDistrict.Wards;
        },
        selectedWard: (state, action) => {
            state.address.ward = action.payload;
        },
    }
});

// Action creators are generated for each case reducer function
export const { selectedCity, selectedDistrict, selectedWard } = locationSlice.actions;

export default locationSlice.reducer;
