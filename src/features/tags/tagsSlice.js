import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTags } from "./tagsAPI";

/** 
 * Initial state for Tags
*/

const initialState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: "",
};

/**
 * Fetch Tags async thunk
 * @returns {Promise<Video[]>}
 */
export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const Tags = await getTags();
  return Tags;
});

/**
 * Video slice
 */

const TagsSLice = createSlice({
  name: "Tags",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.isLoading = false;
        state.tags = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default TagsSLice.reducer;
