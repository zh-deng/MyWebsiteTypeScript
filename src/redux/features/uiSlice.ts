import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const passwordHidden: boolean = true;

export const uiSlice = createSlice({
    name: "ui",
    initialState: {
        passwordHidden,
    },
    reducers: {
        togglePasswordVisibility: (state) => {
            state.passwordHidden =
                state.passwordHidden === false ? true : false;
        },
    },
});

export const selectUi = (state: RootState) => state.ui;

export const { togglePasswordVisibility } = uiSlice.actions;

export default uiSlice.reducer;
