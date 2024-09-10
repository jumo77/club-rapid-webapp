import React, { Component } from 'react';
import './App.css';



import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from "./component/Header/Navbar"
import Main  from "./Pages/Main"

import Profile from "./Pages/Profile";
import Error from "./Pages/Error";
import Page from './Pages/Page'


export default function App() {
    const backend = "/backend";
    const frontend = "/frontend";
    const mobile = "/mobile";
    const profile = "/profile";
    return (
        <Router>
            <div>
                <Navbar/>
                <Switch>
                    <Route path="/" exact render={() => <Main/>}/>
                    <Route path={backend} exact
                           render={() => <Page title={"Back-End"} brief={"서버를 만드는 기술."} url={backend}/>}/>
                    <Route path={frontend} exact
                           render={() => <Page title={"Front-End"} brief={"웹페이지를 만드는 기술."} url={frontend}/>}/>
                    <Route path={mobile} exact render={() => <Page brief={"점유율 1위, 성장률 1위 플렛폼."} url={mobile}/>}/>
                    <Route path={profile} exact render={() => <Profile/>}/>
                    <Route path="/" component={Error}/>
                </Switch>
            </div>
        </Router>

    );

}