import React, { Component } from "react";
import "../css/components.css";
import { Link } from "react-router-dom";

class AdminNav extends Component {
    render() {
        return (
            <div className="AdminNav">
                <Link to="/admin">Dashboard</Link>
                {" - "}
                <Link to="/admin/addBeer">Add New Beer</Link>
            </div>
        );
    }
}

export default AdminNav;
