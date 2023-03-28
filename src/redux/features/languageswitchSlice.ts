import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const defaultLanguage: boolean = true;

export const languageswitchSlice = createSlice({
    name: "languageswitch",
    initialState: {
        defaultLanguage,
    },
    reducers: {
        switchLanguage: (state) => {
            state.defaultLanguage =
                state.defaultLanguage === false ? true : false;
        },
    },
});

export const selectLanguageswitch = (state: RootState) => state.languageswitch;

export const { switchLanguage } = languageswitchSlice.actions;

export default languageswitchSlice.reducer;
