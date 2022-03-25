// import logo from './logo.svg';
import './App.css';
// import { Switch, Route } from 'react-router-dom';
import { ReactSession } from 'react-client-session';
import React, { Component } from 'react'
import Archivo from './components/Archivo'

export default class App extends Component {
  constructor(props) {
    super(props)
    // ReactSession toma la ultima declaracion del storage
    ReactSession.setStoreType("cookie") // storage que se va a usar
    ReactSession.setStoreType("localStorage");
    ReactSession.setStoreType("sessionStorage")
    this.state = {
      first: "holo"
    }

    /*
      Ref: maneja los cambios en un componente sin volver a renderizar toda la vista
      Controlar enfoques, selección de texto, o reproducción de medios.
      Activar animaciones imperativas.
      Integración con bibliotecas DOM de terceros.
    */
    this.inputRef = React.createRef()
    this.divRef = React.createRef()

    this.focusTextInput =  this.focusTextInput.bind(this)
  }



  componentDidMount() {
    // ReactSession.set("username", "Bob");
    // const usuario = ReactSession.get("username");
    // console.log(usuario)
    // ReactSession.load().then(() => {
    //   if (ReactSession.get("username")) console.log("algo existe")
    //   else console.log("inicio de sesion")
    // })
    /*
    fetch('http://localhost:5000/token')
      .then(token => token.json())
      .then(token => {
        ReactSession.set("username", "Bob");
        ReactSession.set(...token)
        return token
      })
      .then(token => console.log(token))
*/
    const node = this.inputRef.current
    console.log(node);
  }
  focusTextInput() {
    this.inputRef.current.focus()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Archivo></Archivo>
          <input ref={this.inputRef} type="text" />
          <div onClick={this.focusTextInput} ref={this.divRef}>Focus!</div>
        </header>
      </div>
    )
  }
}
