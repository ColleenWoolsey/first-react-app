import React, { Component } from 'react'


class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {employee.name}
                                <a href="#"
                                    onClick={() => this.props.deleteEmployee(employee.id)}
                                    className="card-link">Delete</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}

export default EmployeeList

// import React, { Component } from 'react'


// export default class EmployeeList  extends Component {
//     render() {
//         return (
//             <article>
//                 <h1>Employee List</h1>
//                 <section>Jessica Younker</section>
//                 <section>Jordan Nelson</section>
//                 <section>Zoe LeBlanc</section>
//                 <section>Blaise Roberts</section>
//             </article>
//         );
//     }
// }

// Here's how the implementation of the component would look in VanillaJs.

// const state = {
//     locations = [
//         {
//             name: "Nashville North",
//             address: "500 Puppy Way"
//         },
//         {
//             name: "Nashville North",
//             address: "576 Puppy Way"
//         }
//     ],
//     employees = [
//         {
//             name: "Meg Ducharme"
//         },
//         {
//             name: "Blaise Roberts"
//         }
//     ]
// }

// function printEmployee (employee) {
//     return `<div id={employee.id}>
//                 {employee.name}
//             </div>`
// }

// state.employees.forEach(employee =>
//     document.querySelector(".employees").innerHTML += printEmployee(employee)
// )