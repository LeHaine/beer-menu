import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import BeerList from "./containers/BeerList";
import AdminDashboard from "./containers/AdminDashboard";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path="/" component={BeerList} />
                <Route path="/admin" component={AdminDashboard} />
            </div>
        );
    }
}

export default App;
