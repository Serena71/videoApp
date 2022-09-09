import { createSlice } from '@reduxjs/toolkit';

export const videoSlice = createSlice({
  name: 'video',
  initialState: {
    currentVideo: null,
    loading: false,
    error: false,
  },
  reducers: {
    startFetch: (state) => {
      state.loading = true;
    },
    successfulFetch: (state, action) => {
      state.currentVideo = action.payload;
      state.loading = false;
    },
    failedFetch: (state) => {
      state.loading = false;
      state.error = true;
    },

    videoReaction: (state, action) => {
      // action : {reaction:like/dislike, user: userId}
      if (action.payload.reaction === 'like') {
        // if already liked
        if (!state.currentVideo.likes.includes(action.payload.user)) {
          state.currentVideo.likes.push(action.payload.user);
          const idx = state.currentVideo.dislikes.findIndex((user) => user === action.payload.user);
          idx !== -1 && state.currentVideo.dislikes.splice(idx, 1);
        }
      } else {
        // if already disliked
        if (!state.currentVideo.dislikes.includes(action.payload.user)) {
          state.currentVideo.dislikes.push(action.payload.user);
          const idx = state.currentVideo.likes.findIndex((user) => user === action.payload.user);
          idx !== -1 && state.currentVideo.likes.splice(idx, 1);
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { startFetch, successfulFetch, failedFetch, videoReaction } = videoSlice.actions;

export default videoSlice.reducer;
