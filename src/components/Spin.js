import React, { Component } from 'react'
import icons8-spinner from './icons8-spinner'

export class Spin extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={icons8-spinner} alt='loading' />
      </div>
    )
  }
}

export default Spin
