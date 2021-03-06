import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import exampleOne from './exampleOne';
import exampleTwo from './exampleTwo';
import loading from './loading';
import error from './error';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['data', 'movieData']
};

const rootReducer = combineReducers({
  exampleOne,
  exampleTwo,
  loading,
  error
});


export default persistReducer(persistConfig, rootReducer);