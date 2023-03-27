import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const mobile: boolean = false;
const productMobile: boolean = false;
const serviceMobile: boolean = false;

export const mobileswitchSlice = createSlice({
    name: "mobileswitch",
    initialState: {
        mobile,
        productMobile,
        serviceMobile
    },
    reducers: {
        toggleMobile: (state) => {
            state.mobile = state.mobile === false ? true : false;
            state.mobile === false ? document.body.style.overflow="auto" : document.body.style.overflow="hidden";
        },
        toggleProduct: (state) => {
            state.productMobile = state.productMobile === false ? true : false;
            state.productMobile && (state.serviceMobile = false);
        },
        toggleService: (state) => {
            state.serviceMobile = state.serviceMobile === false ? true : false;
            state.serviceMobile && (state.productMobile = false);
        }
    }
});

export const selectMobileswitch = (state: RootState) => state.mobileswitch;

export const { toggleMobile, toggleProduct, toggleService } = mobileswitchSlice.actions;

export default mobileswitchSlice.reducer;