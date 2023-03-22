import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const mobile: boolean = false;

export const mobileswitchSlice = createSlice({
    name: "mobileswitch",
    initialState: {
        mobile
    },
    reducers: {
        toggleMobile: (state) => {
            state.mobile = state.mobile === false ? true : false;
        }
    }
});

export const selectMobileswitch = (state: RootState) => state.mobileswitch;

export const { toggleMobile } = mobileswitchSlice.actions;

export default mobileswitchSlice.reducer;