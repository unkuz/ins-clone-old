import appReducer from '@/store/reducers/appSlice';
import authReducer from '@/store/reducers/authSlice';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import postsReducer from '@/store/reducers/postsSlice';
import usersReducer from '@/store/reducers/usersSlice';

const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  posts: postsReducer,
  users: usersReducer,
});
export default persistReducer(persistConfig, rootReducer);
