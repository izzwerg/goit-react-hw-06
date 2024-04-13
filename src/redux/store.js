import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice.js";
import { filtersReducer } from "./filtersSlice.js";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "Contacts",
  storage,
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
