import React from "react"
import Candle from "./Candle";
import TextHolder from "./TextHolder";
import './styles/Page.css'

export default class FifthPage extends React.Component {
    render() {
        return (
            <>
                <TextHolder x={[0, 10]}>
                    {this.props.children}
                </TextHolder>
                <div className={"fader"}>
                    <Candle fill={true} middleScale={2} totalWidth={"w-50"} x={[60, 30]}/>
                    <Candle fill={false} middleScale={0} totalWidth={"w-50"} x={[75, 0]}/>
                    <Candle fill={false} middleScale={1} totalWidth={"w-25"} x={[40, 0]}/>
                    <Candle fill={true} middleScale={2} totalWidth={"w-75"} x={[20, -20]}/>
                    <Candle fill={true} middleScale={0} totalWidth={"w-25"} x={[20, 0]}/>
                    <Candle fill={false} middleScale={0} totalWidth={"w-100"} x={[5, -5]}/>
                </div>
            </>
        )
    }
}