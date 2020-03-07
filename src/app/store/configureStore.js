import { createStore, applyMiddleware } from 'redux';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import firebase from '../config/firebase';

const rrfCOnfig = {
  userProfile: 'users',
  attachAuthIsReady: true,
  useFireStoreForProfile: true
};

export const configureStore = () => {
  const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];

  const composeEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares),
    reactReduxFirebase(firebase, rrfCOnfig),
    reduxFirestore(firebase)
  );

  const store = createStore(rootReducer, composeEnhancer);

  return store;
};
