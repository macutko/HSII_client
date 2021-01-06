import React from "react"
import './styles/LandingComponent.css'
import {strings} from "./content/strings";
import {Image} from "react-bootstrap";
import {SocialIcon} from 'react-social-icons';


export default class HeaderComponent extends React.Component {
    render() {
        return (
            <>
                <div className="topPart jumbotron jumbotron-fluid nopadding ">
                    <div className={"container-fluid h-100"}>
                        <div className={"row h-100 align-middle"}>
                            <div className={"col-sm-5 my-auto"}>
                                <div className={"offset-sm-3 leftText "}>
                                    <h1>@{strings.welcome.title}</h1>
                                    <p>
                                        {strings.welcome.text}
                                    </p>
                                </div>
                            </div>
                            <div className={"col-sm-2"}>
                                <div className={"whiteLine offset-sm-6"}/>
                            </div>
                            <div
                                className={"col-sm-5 about-me mx-auto"}>
                                <div className={"container-fluid"}>
                                    <div className={"row h-100 justify-content-center align-items-center"}>

                                        <Image className={""}
                                               src={"https://avatars1.githubusercontent.com/u/33177634?s=460&u=23b572c6958fd8f5f93db544bff58b22d665b5a6&v=4"}
                                               roundedCircle/>

                                    </div>

                                    <div className={"row pt-5 "}>
                                        <div className={"col-sm h-100 d-flex justify-content-center"}>
                                            <SocialIcon url="https://www.linkedin.com/in/matus-gallik-25b655140/"/>
                                        </div>
                                        <div className={"col-sm d-flex justify-content-center"}>
                                            <SocialIcon url="https://github.com/macutko"/>
                                        </div>
                                        <div className={"col-sm d-flex justify-content-center"}>
                                            <SocialIcon url="https://matusgallik008.medium.com/"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={"bottomPart"}>
                    <div className={"blackLine offset-sm-6"}/>
                </div>
            </>
        )
    }
}