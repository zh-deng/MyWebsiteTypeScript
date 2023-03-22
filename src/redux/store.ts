import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import languageswitchReducer from "./features/languageswitchSlice";
import darkmodeReducer from "./features/darkmodeSlice";
import mobileswitchReducer from "./features/mobileswitchSlice"

export const store = configureStore({
  reducer: {
    darkmode: darkmodeReducer,
    languageswitch: languageswitchReducer,
    mobileswitch: mobileswitchReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
