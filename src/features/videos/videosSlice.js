import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videosAPI";

/** 
 * Initial state for videos
*/

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};

/**
 * Fetch videos async thunk
 * @returns {Promise<Video[]>}
 */
export const fetchVideos = createAsyncThunk("videos/fetchVideos", async ({tags, search}) => {
  const videos = await getVideos(tags, search);
  return videos;
});

/**
 * Videos slice
 */

const videosSLice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default videosSLice.reducer;
