import React from 'react';
import './App.css';
import Parallax from "./components/Parallax";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Helmet} from "react-helmet";

function App() {
    return (
        <div>
            <Helmet>
                <meta name="theme-color" content="#000000"/>
            </Helmet>
            <Parallax/>
        </div>
    );
}

export default App;
