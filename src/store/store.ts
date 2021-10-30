import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slice/rootReducer';
import { persistStore } from 'redux-persist';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
