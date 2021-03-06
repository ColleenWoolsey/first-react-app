import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalManager from "../modules/AnimalManager"
import LocationManager from "../modules/LocationManager"
import EmployeeManager from "../modules/EmployeeManager"
import OwnerManager from "../modules/OwnerManager"
import AnimalDetail from './animal/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import OwnerDetail from './owner/OwnerDetail'
export default class ApplicationViews extends Component {

    state = {
        animals: [],
        employees: [],
        locations: [],
        owners: []
    }

    componentDidMount() {
        // Example code. Make this fit into how you have written yours.
        AnimalManager.getAll()
        .then(allAnimals => {
          this.setState({
            animals: allAnimals
          });
        });
    
        LocationManager.getAll().then(allLocations => {
          this.setState({
            locations: allLocations
          });
        });
    
        EmployeeManager.getAll().then(allEmployees => {
          this.setState({
            employees: allEmployees
          });
        });
    
        OwnerManager.getAll().then(allOwners => {
          this.setState({
            owners: allOwners
          });
        });
      }

    //   deleteAnimal = (id) => {
    //     return AnimalManager.removeAndList(id)
    //     .then(animals => this.setState({
    //         animals: animals
    //       })
    //     )
    //   }

    deleteAnimal = id => {
        return fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/animals`))
        .then(e => e.json())
        .then(animals => this.setState({
            animals: animals
        })
      )
    }

    deleteEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/employees`))
        .then(e => e.json())
        .then(employees => this.setState({
            employees: employees
        })
      )
    }

    deleteOwner = id => {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/owners`))
        .then(e => e.json())
        .then(owners => this.setState({
            owners: owners
        })
      )
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />

                <Route exact path="/animals"
                 render={(props) => {
                 return <AnimalList animals={this.state.animals} />
                 }} />

                <Route path="/animals/:animalId(\d+)"
                render={(props) => {
                    return <AnimalDetail {...props}
                    deleteAnimal={this.deleteAnimal}
                    animals={this.state.animals} />
                }} />;

                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />

                <Route path="/employees/:employeeId(\d+)"
                render={(props) => {
                    return <EmployeeDetail {...props}
                    deleteEmployee={this.deleteEmployee}
                    employees={this.state.employees} />
                }} />;

                <Route path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} />
                }} />

                <Route path="/owners/:ownerId(\d+)"
                render={(props) => {
                    return <OwnerDetail {...props}
                    deleteOwner={this.deleteOwner}
                    owners={this.state.owners} />
                }} />;
            </React.Fragment>
        )
    }
}

// componentDidMount() {
    //     const newState = {}
    
    //     fetch("http://localhost:5002/animals")
    //         .then(r => r.json())
    //         .then(animals => newState.animals = animals)
    //         .then(() => fetch("http://localhost:5002/employees")
    //         .then(r => r.json()))
    //         .then(employees => newState.employees = employees)
    //         .then(() => fetch("http://localhost:5002/locations")
    //         .then(r => r.json()))
    //         .then(locations => newState.locations = locations)
    //         .then(() => fetch("http://localhost:5002/owners")
    //         .then(r => r.json()))
    //         .then(owners => newState.owners = owners)
    //         .then(() => this.setState(newState))
    // }