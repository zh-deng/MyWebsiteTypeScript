import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { RootState } from "../store";

const tilemode: boolean = false;
const filter: boolean = false;
const locations: string[] = ["Berlin", "München", "Köln", "Nürnberg"];
const level: string[] = ["Student/Praktikant", "Berufseinsteiger", "Mit Berufserfahrung"];
const industry: string[] = ["IT und Softwareentwicklung", "Vertrieb und Handel"];
const type: string[] = ["Teilzeit", "Vollzeit"];

const fetchedJobs: {title: string, description: string, location: string, level: string, industry: string, type: string}[] = [
    {title: "Junior-Frontend-Entwickler", description: "", location: "München", level: "Berufseinsteiger", industry: "IT und Softwareentwicklung", type: "Vollzeit"},
]; 
const filteredJobs: {title: string, description: string, location: string, level: string, industry: string, type: string}[] = [];

const locationsSelected: string[] = [];
const levelSelected: string[] = [];
const industrySelected: string[] = [];
const typeSelected: string[] = [];

const previousSelected: string = "";

const filterOpened: string = "";

export interface ActionSelect {
    category: string,
    argument: string
}

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
        typeSelected,
        filterOpened,
        previousSelected
    },
    reducers: {
        toggleTilemode: (state) => {
            state.tilemode = state.tilemode === false ? true : false;
        },
        setFilterOpened: (state, action: PayloadAction<string>) => {
            state.previousSelected !== action.payload && (state.filterOpened = action.payload);
            action.payload !== "" && (state.previousSelected === action.payload ? (state.previousSelected = "") : (state.previousSelected = action.payload));
        },
        enableFilter: (state) => {
            state.filter = true;
        },
        disableFilter: (state) => {
            state.filter = false;
        },
        addSelected: (state, action: PayloadAction<ActionSelect>) => {
            switch(action.payload.category) {
                case "Standort":
                    state.locationsSelected = [...state.locationsSelected, action.payload.argument];
                    break;
                case "Branche":
                    state.industrySelected = [...state.industrySelected, action.payload.argument];
                    break;
                case "Berufserfahrung":
                    state.levelSelected = [...state.levelSelected, action.payload.argument];
                    break;
                case "Anstellungsart":
                    state.typeSelected = [...state.typeSelected, action.payload.argument];
            };
        },
        removeSelected: (state, action: PayloadAction<ActionSelect>) => {
            let newList = []
            switch(action.payload.category) {
                case "Standort":
                    newList = [...state.locationsSelected];
                    newList.splice(newList.indexOf(action.payload.argument), 1);
                    state.locationsSelected = [...newList];
                    break;
                case "Branche":
                    newList = [...state.industrySelected];
                    newList.splice(newList.indexOf(action.payload.argument), 1);
                    state.industrySelected = [...newList];
                    break;
                case "Berufserfahrung":
                    newList = [...state.levelSelected];
                    newList.splice(newList.indexOf(action.payload.argument), 1);
                    state.levelSelected = [...newList];
                    break;
                case "Anstellungsart":
                    newList = [...state.typeSelected];
                    newList.splice(newList.indexOf(action.payload.argument), 1);
                    state.typeSelected = [...newList];
            };
        }
    }
});

export const selectJobsettings = (state: RootState) => state.jobsettings;

export const { toggleTilemode, enableFilter, disableFilter, addSelected, removeSelected, setFilterOpened } = jobsettingsSlice.actions;

export default jobsettingsSlice.reducer;