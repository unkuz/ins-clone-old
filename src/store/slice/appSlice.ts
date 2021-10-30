import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum AppSelected {
  HOME = 'HOME',
  MESSENGER = 'MESSENGER',
  NEW_POST = 'NEW_POST',
  FIND_PEOPLE = 'FIND_PEOPLE',
  ACTIVITY_FEED = 'ACTIVITY_FEED',
}

interface AppState {
  selected: AppSelected;
}

const initialState: AppState = {
  selected: AppSelected.HOME,
};

export const appSlice = createSlice({
  name: 'app',
  reducers: {
    selectedField: (state, action) => {
      state.selected = action.payload;
    },
  },
  initialState,
});

export const { selectedField } = appSlice.actions;
export default appSlice.reducer;
