import React from "react";
import thunk from "redux-thunk";
import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import {Provider} from 'react-redux';
import PhotosReducer from "./store/photoAlbum/reducerCreators/photoAlbumReducers";
import StartPage from "./components/StartPage/StartPage";

export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const rootReducers = combineReducers({
  photosAlbum: PhotosReducer,
});

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <StartPage />
      </div>
    </Provider>
  );
}

export default App;
