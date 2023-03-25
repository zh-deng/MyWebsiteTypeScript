import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const tilemode: boolean = false;
const filter: boolean = false;
const locations: string[] = ["Berlin", "München", "Köln", "Nürnberg"];
const level: string[] = ["Student/Praktikant", "Berufseinsteiger", "Mit Berufserfahrung"];
const industry: string[] = ["IT und Softwareentwicklung", "Vertrieb und Handel"];
const type: string[] = ["Teilzeit", "Vollzeit"];

const locationsSelected: string[] = [];
const levelSelected: string[] = [];
const industrySelected: string[] = [];
const typeSelected: string[] = [];

export const jobsettingsSlice = createSlice({
    name: "jobsettings",
    initialState: {
        tilemode,
        filter,
        locations,
        level,
        industry,
        type,
        locationsSelected,
        levelSelected,
        industrySelected,
        typeSelected
    },
    reducers: {
        toggleTilemode: (state) => {
            state.tilemode = state.tilemode === false ? true : false;
        },
        enableFilter: (state) => {
            state.filter = true;
        },
        disableFilter: (state) => {
            state.filter = false;
        },
        addLocation: (state, action: PayloadAction<string>) => {
            state.locationsSelected = [...state.locationsSelected, action.payload];
        },
        addLevel: (state, action: PayloadAction<string>) => {
            state.levelSelected = [...state.levelSelected, action.payload];
        },
        addIndustry: (state, action: PayloadAction<string>) => {
            state.industrySelected = [...state.industrySelected, action.payload];
        },
        addType: (state, action: PayloadAction<string>) => {
            state.typeSelected = [...state.typeSelected, action.payload];
        },
        removeLocation: (state, action: PayloadAction<string>) => {
            let newList = [...state.locationsSelected];
            newList.splice(newList.indexOf(action.payload), 1);
            state.locationsSelected = [...newList];
        },
        removeLevel: (state, action: PayloadAction<string>) => {
            let newList = [...state.levelSelected];
            newList.splice(newList.indexOf(action.payload), 1);
            state.levelSelected = [...newList];
        },
        removeIndustry: (state, action: PayloadAction<string>) => {
            let newList = [...state.industrySelected];
            newList.splice(newList.indexOf(action.payload), 1);
            state.industrySelected = [...newList];
        },
        removeType: (state, action: PayloadAction<string>) => {
            let newList = [...state.typeSelected];
            newList.splice(newList.indexOf(action.payload), 1);
            state.typeSelected = [...newList];
        }
    }
});

export const selectJobsettings = (state: RootState) => state.jobsettings;

export const { toggleTilemode } = jobsettingsSlice.actions;

export default jobsettingsSlice.reducer;