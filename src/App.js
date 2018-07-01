import React, { Component } from "react";
import "./App.css";
import BeerList from "./containers/BeerList";

class App extends Component {
    render() {
        return (
            <div className="App">
                <BeerList />
            </div>
        );
    }
}

export default App;
