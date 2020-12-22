import React from "react"
import {Parallax} from "react-scroll-parallax";
import './styles/TextHolder.css'

export default class TextHolder extends React.Component {
    render() {
        return (
            <div className={"text w-100 mt-2 mb-2"}>
                <Parallax x={this.props.x}>
                    <div className={"w-50"}>
                        {this.props.children}
                    </div>
                </Parallax>
            </div>
        )
    }
}