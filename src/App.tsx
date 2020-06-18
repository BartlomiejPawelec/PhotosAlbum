import React from "react";

import StartPage from "./components/StartPage/StartPage";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import LoginPanel from "./components/LoginPanel/LoginPanel";
import RegisterPanel from "./components/RegisterPanel/RegisterPanel";
import AlbumPage from "./components/AlbumPage/AlbumPage";
import { connect } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { AuthProvider } from "./Auth/Auth";
import NotFound from "./components/NotFound/NotFound";


interface AppProps {
  photosAlbum?: any;
}

const App = (props: AppProps) => {
  return (
      <Router>
        <AuthProvider>
        <div className="App">
          <Switch>
            <Route path="/start/login" exact>
              <StartPage>
                <LoginPanel />
              </StartPage>
            </Route>
            <Route path="/start/register" exact>
              <StartPage>
                <RegisterPanel />
              </StartPage>
            </Route>
            <ProtectedRoute exact path="/album" component={AlbumPage} />
            <Redirect from="/" to="/start/login" exact />
            <Route component={NotFound} />
            
          </Switch>
        </div>
        </AuthProvider>
      </Router>
  );
}

const mapStateToProps = (state: any) => {
  return{
    photosAlbum: state.photosAlbum
  }
}

export default connect(mapStateToProps,null)(App);
