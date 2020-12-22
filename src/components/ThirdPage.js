import React from "react"
import Candle from "./Candle";
import TextHolder from "./TextHolder";
import './styles/Page.css'

export default class ThirdPage extends React.Component {
    render() {
        return (
            <>
                <TextHolder x={[-20, 50]}>
                    {this.props.children}
                </TextHolder>
                <div className={"fader"}>
                    <Candle fill={true} middleScale={2} totalWidth={"w-50"} x={[10, -20]}/>
                    <Candle fill={false} middleScale={0} totalWidth={"w-50"} x={[50, -25]}/>
                    <Candle fill={false} middleScale={1} totalWidth={"w-25"} x={[30, -10]}/>
                    <Candle fill={true} middleScale={2} totalWidth={"w-75"} x={[10, -30]}/>
                    <Candle fill={true} middleScale={0} totalWidth={"w-25"} x={[0, -20]}/>
                    <Candle fill={false} middleScale={0} totalWidth={"w-100"} x={[5, -5]}/>
                </div>
            </>
        )
    }
}