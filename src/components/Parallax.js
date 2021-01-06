import React from "react"
import "./styles/Parallax.css"
import {ParallaxProvider} from "react-scroll-parallax";
import HeaderComponent from "./HeaderComponent";
import BodyComponent from "./BodyComponent";
import FooterComponent from "./FooterComponent";
import './styles/main.css';

export default class Parallax extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thePosition: window.pageYOffset
        }
    }

    render() {
        return (
            <>

                <ParallaxProvider>
                    <HeaderComponent/>
                    <BodyComponent/>
                    <FooterComponent/>
                </ParallaxProvider>
            </>
        )
    }
}