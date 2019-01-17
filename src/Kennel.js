import React, { Component } from 'react'
import EmployeeList from "./components/employee/EmployeeList"
import LocationList from './components/location/LocationList';


export default class Kennel extends Component {
    render() {
        return (
            <div>
                <LocationList />
                <EmployeeList />
            </div>
        );
    }
}