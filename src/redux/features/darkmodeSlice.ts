import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const darkmode: boolean = true;

export const darkmodeSlice = createSlice({
    name: "darkmode",
    initialState: {
        darkmode
    },
    reducers: {
        toggleDarkmode: (state) => {
            state.darkmode = state.darkmode === false ? true : false;
        }
    }
});

export const selectdarkmode = (state: RootState) => state.darkmode;

export const { toggleDarkmode } = darkmodeSlice.actions;

export default darkmodeSlice.reducer;