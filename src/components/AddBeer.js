import React, { Component } from "react";

class AddBeer extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            errors: {}
        };
    }
    validate = () => {
        return true;
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.validate()) {
            console.log(this.refs);
            this.refs.addBeerForm.reset();
            // TODO dispatch action
        }
    };

    render() {
        return (
            <form ref="addBeerForm" onSubmit={this.handleSubmit}>
                <label>Beer Name</label>
                <input type="text" placeholder="Colt IPA" ref="name" />
                <br />
                <label>Type</label>
                <input type="text" placeholder="IPA" ref="type" />
                <br />
                <label>ABV</label>
                <input
                    type="number"
                    placeholder="7.5"
                    min="0"
                    step="0.1"
                    ref="abv"
                />
                <br />
                <label>IBU</label>
                <input type="number" placeholder="100" min="0" ref="type" />
                <br />
                <label>Price $</label>
                <input
                    type="number"
                    placeholder="5.00"
                    min="0"
                    step="0.01"
                    ref="price"
                />
                <br />
                <input type="submit" value="Add" />
            </form>
        );
    }
}

export default AddBeer;
