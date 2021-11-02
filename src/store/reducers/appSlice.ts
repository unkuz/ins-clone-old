import { createSlice } from '@reduxjs/toolkit';

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
  isProfilePopUp: boolean;
}

const initialState: AppState = {
  selected: AppSelected.HOME,
  isShowSearchPopUp: false,
  isProfilePopUp: false,
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
    hiddenSearch: (state) => {
      state.isShowSearchPopUp = false;
    },
    showSearch: (state) => {
      state.isShowSearchPopUp = true;
    },
    toogleProfileShow: (state) => {
      state.isProfilePopUp = !state.isProfilePopUp;
    },
  },
  initialState,
});

export const { selectedField, toogleSearch, hiddenSearch, showSearch, toogleProfileShow } =
  appSlice.actions;
export default appSlice.reducer;
