import { createSlice } from "@reduxjs/toolkit";

/**
 * Initial state for Tags
 */

const initialState = {
  tags: [],
  search: "",
};

const filterSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);

      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { tagSelected, searched } = filterSlice.actions;
