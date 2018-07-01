import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { beersFetchData } from "../state/actions";
import BeerHeader from "../components/BeerHeader";
import BeerItem from "../components/BeerItem";
import "../css/containers.css";

const mapStateToProps = state => {
    return {
        beers: state.beers.beers,
        hasErrors: state.beersHaveError,
        isLoading: state.beersAreLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(beersFetchData(url))
    };
};

class BeerList extends Component {
    componentDidMount() {
        this.props.fetchData("http://localhost:3004/beers");
    }
    render() {
        if (this.props.hasError) {
            return <p>Sorry an error occured when loading the beer list.</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading...</p>;
        }
        const beers = this.props.beers;
        const headers = [
            {
                name: "Name"
            },
            {
                name: "Type"
            },
            {
                name: "ABV"
            },
            {
                name: "IBU"
            },
            {
                name: "Price"
            }
        ];
        return (
            <div className="BeerList">
                <BeerHeader headers={headers} />
                {beers.map(beer => <BeerItem key={beer.name} beer={beer} />)}
            </div>
        );
    }
}

BeerList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    beers: PropTypes.array.isRequired,
    hasErrors: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BeerList);
