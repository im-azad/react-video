import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getRelatedVideos } from "./relatedVideosAPI";

/**
 * Initial state for Tags
 */

const initialState = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: "",
};

/**
 * Fetch relatedVideos async thunk
 * @returns {Promise<Video[]>}
 */
export const fetchRelatedVideos = createAsyncThunk(
  "relatedVideos/fetchRelatedVideos",
  async ( {tags, id} ) => {
    const relatedVideos = await getRelatedVideos({tags, id});
    return relatedVideos;
  }
);

/**
 * Video slice
 */

const relatedVideosSLice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = action.payload;
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default relatedVideosSLice.reducer;
