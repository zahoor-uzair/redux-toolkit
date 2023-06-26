//  npm install react-redux redux @reduxjs/toolkit

// store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counter";

// Define the type of the root state
type RootState = {
  counter: ReturnType<typeof counterReducer>;
  // Add other slice states here if you have more reducers
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add other reducers here if you have more slices
  },
  devTools: true,
});

export default store;

// Export the RootState type for usage in components
export type { RootState };
