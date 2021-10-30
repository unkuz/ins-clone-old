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
  isShowSearchPopUp: boolean;
}

const initialState: AppState = {
  selected: AppSelected.HOME,
  isShowSearchPopUp: false,
};

export const appSlice = createSlice({
  name: 'app',
  reducers: {
    selectedField: (state, action) => {
      state.selected = action.payload;
    },
    toogleSearch: (state) => {
      state.isShowSearchPopUp = !state.isShowSearchPopUp;
    },
  },
  initialState,
});

export const { selectedField, toogleSearch } = appSlice.actions;
export default appSlice.reducer;
