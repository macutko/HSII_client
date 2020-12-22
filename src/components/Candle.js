import React from "react";
import "./styles/FirstCandle.css"
import {Parallax} from "react-scroll-parallax";

export default class Candle extends React.Component {
    render() {
        let middleClass;
        //this.props.x[0] > this.props.x[1]
        this.props.fill ? middleClass = "middleCandle bg-black" : middleClass = "middleCandle"

        let mScales = ["col-sm", "col-sm-8", "col-sm-6"]
        let sScales = ["col-sm", "col-sm-2", "col-sm-3"]

        return (
            <Parallax x={this.props.x}>
            <div className={"mb-2"}>
                <div className={this.props.totalWidth + " container  d-flex h-100 nopadding "} >
                    <div className="row align-middle w-100">
                        <div className={sScales[this.props.middleScale] + " my-auto nopadding"}>
                            <div className={"sideCandle"}/>
                        </div>
                        <div className={mScales[this.props.middleScale] + " my-auto nopadding "}>
                            <div className={middleClass}/>
                        </div>
                        <div className={sScales[this.props.middleScale] + " my-auto nopadding"}>
                            <div className={"sideCandle"}/>
                        </div>
                    </div>
                </div>
            </div>
            </Parallax>
        )
    }
}