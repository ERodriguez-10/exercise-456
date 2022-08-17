import React, { Component } from 'react'

class Clock extends Component {
   constructor(props) {
      super(props);
      // Estado privado del component
      this.state = {
         // Se genera una fecha como estado inicial del componente
         fecha: new Date(),
         edad: 0,
         nombre: "Martín",
         apellidos: "San José"
      };
   }
   componentDidMount(){
      this.timerID = setInterval (
         () => this.tick(), 1000
      );
   }
   componentWillUnmount() {
      clearInterval (this.timerID);
   }
   render() {
      return (
         <div>
            <h1>Class Component</h1>
            <h2>
               Hora Actual:
               {this.state.fecha.toLocaleTimeString()}
            </h2>
            <h3>{this.state.nombre} {this.state.apellidos}</h3>
            <h2>Edad: {this.state.edad}</h2>
         </div>
      )
   }
   tick(){
      this.setState((prevState) => {
         let edad = prevState.edad +1;
         return {
            ...prevState,
            fecha: new Date(),
            edad
         }
      });
   }
}
export default Clock;