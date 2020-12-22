import React from "react"
import {Form} from "react-bootstrap";

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
                            <div className={"col-sm-2"}>
                                <Form.Label>Product {this.props.productID + 1}</Form.Label>
                            </div>
                            <div className={"col-sm-5"}>
                                <Form.Control onChange={this.changeProductValue} type="number"
                                              placeholder="Current value of product"/>
                            </div>
                            <div className={"col-sm-5"}>
                                <Form.Control min={"0"} max={"1"} onChange={this.changeProductPercentage} type="number" placeholder="Desired Percentage (in decimal)"/>
                            </div>
                        </div>
                    </div>
                </Form.Group>
            </>
        )
    }
}