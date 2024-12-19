import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    theme: 'light',
    navbarStyle: {
      absolute: false,
      title: 'Home',
      order: true,
      back: false,
    },
    isLoading: false,
    notifications: [],
    language: 'es',
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setNavbarStyle: (state, action) => {
      state.navbarStyle = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    addNotification: (state, action) => {
      state.notifications.push(action.payload);
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const {
  toggleTheme,
  setNavbarStyle,
  setLoading,
  addNotification,
  setLanguage,
} = uiSlice.actions;

export default uiSlice.reducer;
