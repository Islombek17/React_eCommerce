import React, { Component } from 'react'

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
          <img src={'./image/' + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} alt="" />
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.bio}</p>
          <b>{this.props.item.price}€</b>
          <div className='add-to-card' onClick={() => this.props.onAdd(this.props.item)}> + </div>
        </div>
      </div>
    )
  }
}

export default ShowFullItem