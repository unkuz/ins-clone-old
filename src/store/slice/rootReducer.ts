import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({});
export default persistReducer(persistConfig, rootReducer);
