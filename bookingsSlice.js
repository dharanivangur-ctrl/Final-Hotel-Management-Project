import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    addBooking: (state, action) => {
      state.items.push({
        ...action.payload,
        id: Date.now(),
      });
    },

    updateBooking: (state, action) => {
      const index = state.items.findIndex(
        (booking) => booking.id === action.payload.id
      );

      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },

    deleteBooking: (state, action) => {
      state.items = state.items.filter(
        (booking) => booking.id !== action.payload
      );
    },
  },
});

export const {
  addBooking,
  updateBooking,
  deleteBooking,
} = bookingsSlice.actions;

export default bookingsSlice.reducer;