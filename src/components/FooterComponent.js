import React from "react"
import './styles/FooterComponent.css'


export default class FooterComponent extends React.Component {
    render() {
        return (
            <>
                <div className={"footerLineContainer"}>
                    <div className={"container-fluid h-100 mb-5"}>
                        <div className={"row h-100 "}>
                            <div className={"col-sm-5 text h-100 d-flex justify-content-center" }>
                                <p className={"pl-5 pt-3"}>
                                    If you found this article helpful please LET ME KNOW! Or offer me a job?  &#x1F61C;

                                </p>

                            </div>
                            <div className={"col-sm-2 h-100"}>
                                <div className={"footerLine offset-sm-6"}/>
                            </div>
                            <div className={"col-sm-5"}>

                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}