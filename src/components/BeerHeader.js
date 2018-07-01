import React, { Component } from "react";
import "../css/components.css";

class BeerHeader extends Component {
    render() {
        const headers = this.props.headers;
        return (
            <div className="BeerHeader">
                {headers.map(header => (
                    <span key={header.name}>{header.name}</span>
                ))}
            </div>
        );
    }
}

export default BeerHeader;
