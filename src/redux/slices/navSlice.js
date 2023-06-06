import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInfomation: null,
};

const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setOrigin: function (state, action) {
            state.origin = action.payload;
        },
        setDestination: function (state, action) {
            state.destination = action.payload;
        },
        setTravelTimeInfomation: function (state, action) {
            state.travelTimeInfomation = action.payload;
        },
    },
});

export { navSlice };
export const { setDestination, setOrigin, setTravelTimeInfomation } =
    navSlice.actions;

export const selectOrigin = function (state) {
    return state.nav.origin;
};

export const selectDestination = function (state) {
    return state.nav.destination;
};

export const selectTravelTimeInfomation = function (state) {
    return state.nav.travelTimeInfomation;
};

export default navSlice.reducer;
