import React from 'react';
import logo from '../logo.svg';
import './app.css';
import { FileImport } from "../components/file-import/file-import";
import {ShowFile} from "../components/show-file";
import tripReport from './../sierra_sun_20446';
import {ParticipantHome} from "../participant-home/participant-home";
import {DaysOfCodeDayOne} from "../components/days-of-code-day-one";
import {FileOutput} from "../components/file-output";
import {DaysOfCodeDayTwo} from "../components/days-of-code-day-two";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
        {/*{tripReport.participant}*/}
        {/*{tripReport.firstName}*/}
        {/*{tripReport.lastName}*/}
        {/*{tripReport.memberNumber}*/}
        <DaysOfCodeDayTwo />
        {/*<ShowFile />*/}
        {/*<ParticipantHome />*/}
        <FileOutput />
      </header>
    </div>
  );
}

export default App;
