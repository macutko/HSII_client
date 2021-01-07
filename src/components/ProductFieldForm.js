import React from "react"
import {Form} from "react-bootstrap";
import ReactLoading from "react-loading";

export default class ProductFieldForm extends React.Component {
    changeProductValue = (event) => {
        if (event.target.value > 0) {
            this.props.addProductValue(this.props.productID, event.target.value)
        }

    }
    changeProductPercentage = (event) => {
        if (event.target.value > 0 && event.target.value < 1) {
            this.props.addProductPercentage(this.props.productID, event.target.value)
        }
    }


    render() {
        return (
            <>
                <Form.Group>
                    <div className={"container"}>
                        <div className={"row"}>


                            <div className={"col-sm-2 align-items-center d-flex justify-content-center"}>
                                <Form.Label>Product {this.props.productID + 1}</Form.Label>
                            </div>
                            <div className={"col-sm-4 align-items-center d-flex justify-content-center"}>
                                <Form.Control onChange={this.changeProductValue} type="number"
                                              placeholder="Current value of product"/>
                            </div>
                            <div className={"col-sm-4  align-items-center d-flex justify-content-center"}>
                                <Form.Control min={"0"} max={"1"} onChange={this.changeProductPercentage}
                                              type="number"
                                              placeholder="Desired Percentage (in decimal)"/>
                            </div>
                            <div className={"col-sm-2 d-flex align-items-center justify-content-center"}>

                                {this.props.fetching ? <ReactLoading type={"bars"} color={"grey"}/> :
                                    <Form.Label>
                                        {this.props.value[this.props.productID] * this.props.deposit ?
                                        (this.props.value[this.props.productID] * this.props.deposit).toFixed(2) :
                                        null}
                                    </Form.Label>
                                }
                            </div>


                        </div>
                    </div>
                </Form.Group>
            </>
        )
    }
}