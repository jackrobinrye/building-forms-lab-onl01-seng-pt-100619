import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux';


class BandsContainer extends Component {
  render() {
    console.log(this.props.bands)
    return(
      <div>
        <BandInput addBand={this.props.addBand}></BandInput>
        <ul>
          {this.props.bands.map(band => { 
            return <li className={band.name}>
              {band.name}
            </li>
          })}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return { bands: state.bands }
}

const mapDispatchToProps = dispatch => {
  return {addBand: (band) => dispatch({type: 'ADD_BAND', band: band})}
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
