import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { RootState } from "../store";

export interface ActionSelect {
    category: string;
    argument: string;
}

export interface JobProps {
    id: number;
    title: string;
    description: string;
    location: string;
    level: string;
    industry: string;
    type: string;
    teaserClicked: boolean;
}

const tilemode: boolean = true;
const filter: boolean = false;
const locations: string[] = ["Berlin", "München", "Köln", "Nürnberg"];
const level: string[] = [
    "Student/Praktikant",
    "Berufseinsteiger",
    "Mit Berufserfahrung",
];
const industry: string[] = [
    "IT und Softwareentwicklung",
    "Vertrieb und Handel",
];
const type: string[] = ["Teilzeit", "Vollzeit"];

const fetchedJobs: JobProps[] = [
    {
        id: 1,
        title: "Junior-Frontend-Entwickler",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolore itaque earum sequi, provident eum nesciunt assumenda vitae optio tenetur repellendus maiores esse in non. Obcaecati perferendis, optio vitae officiis accusamus ea temporibus, eaque, in illum aliquam autem deserunt exercitationem.",
        location: "München",
        level: "Berufseinsteiger",
        industry: "IT und Softwareentwicklung",
        type: "Vollzeit",
        teaserClicked: false,
    },
    {
        id: 2,
        title: "Verkäufer",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolore itaque earum sequi, provident eum nesciunt assumenda vitae optio tenetur repellendus maiores esse in non. Obcaecati perferendis, optio vitae officiis accusamus ea temporibus, eaque, in illum aliquam autem deserunt exercitationem.",
        location: "Berlin",
        level: "Berufseinsteiger",
        industry: "Vertrieb und Handel",
        type: "Teilzeit",
        teaserClicked: false,
    },
    {
        id: 3,
        title: "Senior-Backend-Entwickler",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolore itaque earum sequi, provident eum nesciunt assumenda vitae optio tenetur repellendus maiores esse in non. Obcaecati perferendis, optio vitae officiis accusamus ea temporibus, eaque, in illum aliquam autem deserunt exercitationem.",
        location: "Berlin",
        level: "Mit Berufserfahrung",
        industry: "IT und Softwareentwicklung",
        type: "Vollzeit",
        teaserClicked: false,
    },
    {
        id: 4,
        title: "Praktikant Fullstack-Entwicklung",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolore itaque earum sequi, provident eum nesciunt assumenda vitae optio tenetur repellendus maiores esse in non. Obcaecati perferendis, optio vitae officiis accusamus ea temporibus, eaque, in illum aliquam autem deserunt exercitationem.",
        location: "Köln",
        level: "Student/Praktikant",
        industry: "IT und Softwareentwicklung",
        type: "Teilzeit",
        teaserClicked: false,
    },
    {
        id: 5,
        title: "Sales-Manager",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolore itaque earum sequi, provident eum nesciunt assumenda vitae optio tenetur repellendus maiores esse in non. Obcaecati perferendis, optio vitae officiis accusamus ea temporibus, eaque, in illum aliquam autem deserunt exercitationem.",
        location: "Nürnberg",
        level: "Mit Berufserfahrung",
        industry: "Vertrieb und Handel",
        type: "Vollzeit",
        teaserClicked: false,
    },
    {
        id: 6,
        title: "Praktikant im Verkauf",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolore itaque earum sequi, provident eum nesciunt assumenda vitae optio tenetur repellendus maiores esse in non. Obcaecati perferendis, optio vitae officiis accusamus ea temporibus, eaque, in illum aliquam autem deserunt exercitationem.",
        location: "München",
        level: "Student/Praktikant",
        industry: "Vertrieb und Handel",
        type: "Teilzeit",
        teaserClicked: false,
    },
];
const filteredJobs: JobProps[] = [];

const locationsSelected: string[] = [];
const levelSelected: string[] = [];
const industrySelected: string[] = [];
const typeSelected: string[] = [];

const previousSelected: string = "";

const filterOpened: string = "";

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
        previousSelected,
        fetchedJobs,
        filteredJobs,
    },
    reducers: {
        toggleTilemode: (state) => {
            state.tilemode = state.tilemode === false ? true : false;
        },
        setFilterOpened: (state, action: PayloadAction<string>) => {
            state.filterOpened === action.payload
                ? (state.filterOpened = "")
                : (state.filterOpened = action.payload);
        },
        enableFilter: (state) => {
            state.filter = true;
        },
        disableFilter: (state) => {
            state.filter = false;
        },
        addSelected: (state, action: PayloadAction<ActionSelect>) => {
            switch (action.payload.category) {
                case "Standort":
                    state.locationsSelected = [
                        ...state.locationsSelected,
                        action.payload.argument,
                    ];
                    break;
                case "Branche":
                    state.industrySelected = [
                        ...state.industrySelected,
                        action.payload.argument,
                    ];
                    break;
                case "Berufserfahrung":
                    state.levelSelected = [
                        ...state.levelSelected,
                        action.payload.argument,
                    ];
                    break;
                case "Anstellungsart":
                    state.typeSelected = [
                        ...state.typeSelected,
                        action.payload.argument,
                    ];
            }
        },
        removeSelected: (state, action: PayloadAction<ActionSelect>) => {
            let newList = [];
            switch (action.payload.category) {
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
            }
        },
        toggleJobExpansion: (state, action: PayloadAction<number>) => {
            let newList = [...state.filteredJobs];
            newList.map((item) => {
                item.id === action.payload &&
                    (item.teaserClicked =
                        item.teaserClicked === false ? true : false);
            });
            state.filteredJobs = [...newList];
            state.filterOpened = "";
        },
        setFilteredJobs: (state, action: PayloadAction<JobProps[]>) => {
            state.filteredJobs = [...action.payload];
        },
    },
});

export const selectJobsettings = (state: RootState) => state.jobsettings;

export const {
    toggleTilemode,
    enableFilter,
    disableFilter,
    addSelected,
    removeSelected,
    setFilterOpened,
    toggleJobExpansion,
    setFilteredJobs,
} = jobsettingsSlice.actions;

export default jobsettingsSlice.reducer;
