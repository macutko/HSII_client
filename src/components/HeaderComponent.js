import React from "react"
import './styles/LandingComponent.css'


export default class HeaderComponent extends React.Component {
    render() {
        return (
            <>
                <div className="topPart jumbotron jumbotron-fluid nopadding ">
                    <div className={"container-fluid h-100"}>
                        <div className={"row h-100 align-middle"}>
                            <div className={"col-sm-5 my-auto"}>
                                <div className={"offset-sm-3 leftText "}>
                                <h1>@Welcome to HIIS</h1>
                                    <p>
                                        This website has been developed primarily to showcase my software development skills.
                                        However, besides that, all concepts that I discuss are ones I hold true and personally use.
                                        By no means do I consider myself a financial expert. This site should not be taken as financial advice for your personal finance
                                        as I do not take responsibility over your gambles. That being said, happy scrolling. &#128521;
                                    </p>
                                </div>
                            </div>
                            <div className={"col-sm-2"}>
                                <div className={"whiteLine offset-sm-6"}/>
                            </div>
                            <div className={"col-sm-5"}></div>

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