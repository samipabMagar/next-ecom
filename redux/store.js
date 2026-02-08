import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userPreferences"], // Only persist userPreferences
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: ["register"],
      },
    }),
});

export const persistor = persistStore(store);
