import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { globalReducer } from "./slice";
import { persistReducer, persistStore, REHYDRATE } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
};

const globalPersistConfig = {
  key: 'global',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};



export const rootReducer = combineReducers({
  global: persistReducer(globalPersistConfig, globalReducer),
});

export const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const persistedStore = persistStore(store); //use this on app

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;