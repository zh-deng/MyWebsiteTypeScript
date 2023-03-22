import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const darkmode: boolean = true;
const animation: string = "";

export const darkmodeSlice = createSlice({
    name: "darkmode",
    initialState: {
        darkmode,
        animation
    },
    reducers: {
        toggleDarkmode: (state) => {
            state.darkmode = state.darkmode === false ? true : false;
        },
        changeAnimation: (state, action: PayloadAction<string>) => {
            state.animation = action.payload;
        }
    }
});

export const selectdarkmode = (state: RootState) => state.darkmode;

export const { changeAnimation, toggleDarkmode } = darkmodeSlice.actions;

export default darkmodeSlice.reducer;