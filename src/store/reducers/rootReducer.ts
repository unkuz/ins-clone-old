import appReducer from '@/store/reducers/appSlice';
import authReducer from '@/store/reducers/authSlice';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});
export default persistReducer(persistConfig, rootReducer);
