import React from 'react';
import './App.css';
import Parallax from "./components/Parallax";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserView, MobileView} from "react-device-detect";

function App() {
    return (
        <div>
            <MobileView>
                <h1> Nope, I will not render for phones &#128514;</h1>
            </MobileView>
            <BrowserView>
                <Parallax/>
            </BrowserView>

        </div>
    );
}

export default App;
