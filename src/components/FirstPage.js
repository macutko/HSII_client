import React from "react"
import Candle from "./Candle";
import TextHolder from "./TextHolder";
import './styles/Page.css'

export default class FirstPage extends React.Component {
    render() {
        return (
            <>
                <div className={"fader"}>
                    <Candle fill={false} middleScale={0} totalWidth={"w-25"} x={[-70, -20]}/>
                    <Candle fill={true} middleScale={0} totalWidth={"w-50"} x={[-35, -20]}/>
                    <Candle fill={false} middleScale={1} totalWidth={"w-100"} x={[-40, -20]}/>
                    <Candle fill={true} middleScale={2} totalWidth={"w-75"} x={[-20, -30]}/>
                    <Candle fill={true} middleScale={0} totalWidth={"w-50"} x={[-50, 0]}/>
                    <Candle fill={false} middleScale={1} totalWidth={"w-100"} x={[-10, 0]}/>
                </div>
                <TextHolder x={[-20, 20]}>
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