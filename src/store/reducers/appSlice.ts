import { createSlice } from '@reduxjs/toolkit';

export enum AppSelected {
  HOME = 'HOME',
  MESSENGER = 'MESSENGER',
  NEW_POST = 'NEW_POST',
  FIND_PEOPLE = 'FIND_PEOPLE',
  ACTIVITY_FEED = 'ACTIVITY_FEED',
  PROFILE = 'PROFILE',
}

interface AppState {
  selected: AppSelected;
  isShowSearchPopUp: boolean;
  profile: {
    isProfilePopUp: boolean;
    selectedOnProfilePage: 'POSTS' | 'SAVED';
    isEditProfilePopUp: boolean;
  };
  activity: {
    isActivityFeedPopUp: boolean;
  };
}

const initialState: AppState = {
  selected: AppSelected.HOME,
  isShowSearchPopUp: false,
  profile: { isProfilePopUp: false, selectedOnProfilePage: 'POSTS', isEditProfilePopUp: false },
  activity: { isActivityFeedPopUp: false },
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
      state.profile.isProfilePopUp = !state.profile.isProfilePopUp;
    },
    setSelectedOnProfilePageIsSaved: (state) => {
      state.profile.selectedOnProfilePage = 'SAVED';
    },
    setSelectedOnProfilePageIsPosts: (state) => {
      state.profile.selectedOnProfilePage = 'POSTS';
    },
    setEditProfilePopUp: (state) => {
      state.profile.isEditProfilePopUp = true;
    },
    setEditProfileHidden: (state) => {
      state.profile.isEditProfilePopUp = false;
    },
    setActivityFeedPopUp: (state) => {
      state.activity.isActivityFeedPopUp = true;
    },
    setActivityFeedHidden: (state) => {
      state.activity.isActivityFeedPopUp = false;
    },
  },
  initialState,
});

export const {
  selectedField,
  toogleSearch,
  hiddenSearch,
  showSearch,
  toogleProfileShow,
  setSelectedOnProfilePageIsSaved,
  setSelectedOnProfilePageIsPosts,
  setEditProfileHidden,
  setEditProfilePopUp,
  setActivityFeedHidden,
  setActivityFeedPopUp,
} = appSlice.actions;
export default appSlice.reducer;
