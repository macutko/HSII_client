import React from "react"
import {Button, Form} from "react-bootstrap";
import './styles/CalcForm.css'
import ProductFieldForm from "./ProductFieldForm";
import axiosInstance from "./axiosInstance";

export default class CalcForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: 3,
            deposit: 0,
            productValues: {},
            productPercentages: {},
            productPortions: {},

        }
    }

    addProductField = () => {
        if (this.state.products > 10) {
            alert("Sorry, 11 is the max")
        } else {
            this.setState(prevstate => ({products: prevstate.products + 1}));
        }
    }
    removeProductField = () => {
        if (this.state.products > 0) {
            this.setState(prevstate => ({products: prevstate.products - 1}));
        }
    }

    changeProductValue = (key, value) => {
        this.setState(prevstate => ({
            productValues: {
                ...prevstate.productValues,
                [key]: [value]
            }

        }));
    }
    changeProductPercentages = (key, value) => {
        this.setState(prevstate => ({
            productPercentages: {
                ...prevstate.productPercentages,
                [key]: [value]
            }

        }));
    }
    submitForm = () => {
        if (this.state.deposit <= 0) {
            alert("The deposit must be higher than 0")
            return
        }

        let totalP = 0;
        for (const p in this.state.productPercentages) {
            totalP = Number(totalP) + Number(this.state.productPercentages[p])
        }
        if (totalP !== 1.0) {
            alert("The total percentage must equal to 1")
            return
        }
        if (Object.keys(this.state.productPercentages).length !== Object.keys(this.state.productValues).length) {
            alert("All products must have a value")
            return
        }


        axiosInstance.get("/calculate", {
            params: {
                values: this.state.productValues,
                percentages: this.state.productPercentages,
                deposit: this.state.deposit
            }
        })
            .then((response) => {
                // this.props.updateOutput(response)
                console.log(response.data)
                this.setState({
                    productPortions: response.data.division_perc
                })

            })
            .catch((error) => {
                // this.props.updateOutput(error)
                console.log(error)
            });
    }

    render() {

        let rows = [];
        for (let i = 0; i < this.state.products; i++) {
            rows.push(<ProductFieldForm addProductPercentage={this.changeProductPercentages} value={this.state.productPortions} deposit={this.state.deposit}
                                        addProductValue={this.changeProductValue} productID={i} key={i}/>)
        }
        return (
            <>
                <Form className={"submitForm"}>
                    <Form.Group>
                        <div className={"container"}>
                            <div className={"row pb-4"}>
                                <div className={"col-sm"}>
                                    <Form.Label>How much will you deposit?</Form.Label>
                                </div>
                                <div className={"col-sm-8"}>
                                    <Form.Control onChange={(event) => {
                                        this.setState({
                                            deposit: event.target.value
                                        })
                                    }} type="number" placeholder="Deposit value"/>
                                </div>
                            </div>
                        </div>
                    </Form.Group>


                    {rows}
                    <div className={"container pt-3"}>
                        <div className={"row"}>
                            <div className={"col-sm"}>
                                <Button variant="dark " onClick={this.submitForm} className={"w-100"}>
                                    Submit
                                </Button>
                            </div>
                            <div className={"col-sm"}>
                                <Button className={"w-100"} variant="dark" onClick={this.addProductField}>
                                    Add another product
                                </Button>
                            </div>
                            <div className={"col-sm"}>
                                <Button className={"w-100"} variant="dark" onClick={this.removeProductField}>
                                    Remove product
                                </Button>
                            </div>


                        </div>
                    </div>
                </Form>
            </>
        )
    }
}