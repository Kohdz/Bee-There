import { createStore } from 'redux';
import { devToolsEnchancer } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';

export const configureStore = () => {
  const store = createStore(rootReducer, devToolsEnchancer());

  return store;
};
