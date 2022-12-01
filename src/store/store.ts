import { combineReducers, configureStore, Store } from '@reduxjs/toolkit';

import notesReducer from './reducers/NotesSlice';

const rootReducer = combineReducers({
  notesReducer,
});

export const setupStore: () => Store = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
