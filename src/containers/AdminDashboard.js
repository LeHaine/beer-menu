import React, { Component } from "react";
import "../css/components.css";
import { Route } from "react-router-dom";
import AdminNav from "../components/AdminNav";
import AddBeer from "../components/AddBeer";

class AdminDashboard extends Component {
    render() {
        return (
            <div className="AdminDashboard">
                <AdminNav />
                <Route path="/admin/addBeer" component={AddBeer} />
            </div>
        );
    }
}

export default AdminDashboard;
