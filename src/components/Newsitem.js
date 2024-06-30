
import React, { Component } from 'react'


export class Newsitem extends Component {
  render() {
   let {title, description, imageurl, newsurl} = this.props
    return (
     
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
           <img src={!imageurl?"https:images.moneycontrol.com/static-mcnews/2024/04/marketNew-1.jpg":imageurl} className="card-img-top" alt="..."/>
              <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={newsurl} className="btn btn-primary">Read more</a>
            </div>
          </div>
      </div>
    )
  }
}

export default Newsitem
