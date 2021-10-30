import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import appReducer from '@/store/slice/appSlice'

const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({
    app:appReducer
});
export default persistReducer(persistConfig, rootReducer);
