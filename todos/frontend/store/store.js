import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import { appyMiddleware } from 'redux';
import myThunk from '../middleware/thunk';


// const configureStore = (preloadedState = {}) => {
//   return createStore(rootReducer, preloadedState);
// };

const configureStore = (preloadedState= {}) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(myThunk));
};

export default configureStore;