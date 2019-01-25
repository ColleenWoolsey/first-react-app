import React, { Component } from 'react'
import Dog from "./DogIcon.png"
import "./Animal.css"
// import AnimalManager from "../modules/AnimalManager" 

export default class AnimalList extends Component {
    render () {
        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={Dog} alt="Dog" className="icon--dog" />
                                {animal.name}
                                <a href="#"
                                    onClick={() => this.props.deleteAnimal(animal.id)}
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

// import React, { Component } from 'react'


// class AnimalList extends Component {
//     render() {
//         return (
//             <section className="animals">
//             {
//                 this.props.animals.map(animal =>
//                     <div key={animal.id}>
//                         {animal.name}
//                     </div>
//                 )
//             }
//             </section>
//         )
//     }
// }

// export default AnimalList