// Add BandInput component
import React, { Component } from 'react'


export default class BandInput extends Component {
  constructor(props) {
    super(props)
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      name: ''
    }
  }

  handleInputChange = (event) => {
    // event.preventDefault()
    this.setState({...this.state, name: event.target.value})
  }

  handleSubmit = (event) => {
    console.log(this.state)
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({name: ""})
  }

  render() {
    return(
      <div>
        <form>
          <input type="input" value={this.state.name} onChange={this.handleInputChange}></input>
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

