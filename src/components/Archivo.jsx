import React, { Component } from 'react'
import { ReactSession } from 'react-client-session';


export default class Archivo extends Component {
  render() {
    return (
      <div>{ReactSession.get('username') ? 'Sesion iniciada' : 'Sesion no iniciada'}</div>
    )
  }
}
