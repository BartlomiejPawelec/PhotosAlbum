import React from "react";
import thunk from "redux-thunk";
import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import PhotosReducer from "./store/photoAlbum/reducerCreators/photoAlbumReducers";
import StartPage from "./components/StartPage/StartPage";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from "react-router-dom";
import LoginPanel from "./components/LoginPanel/LoginPanel";
import RegisterPanel from "./components/RegisterPanel/RegisterPanel";
import AlbumPage from "./components/AlbumPage/AlbumPage";

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
    <Router>
      <Provider store={store}>
        <div className="App">
          <Redirect from="/" to="login"/>
          <StartPage>
            <Switch>
              <Route exact path="/login" component={LoginPanel} />
              <Route exact path="/register" component={RegisterPanel} />
            </Switch>
          </StartPage>
          <Route exact path="/album" component={AlbumPage}/>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
