import React, { Component } from "react";
import "../css/components.css";

class BeerItem extends Component {
    render() {
        const beer = this.props.beer;
        return (
            <div className="BeerItem">
                <span className="name">{beer.name}</span>
                <span className="type">{beer.type}</span>
                <span className="abv">{beer.abv}</span>
                <span className="ibu">{beer.ibu}</span>
                <span className="price">{beer.price}</span>
            </div>
        );
    }
}

export default BeerItem;
