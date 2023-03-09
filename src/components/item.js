import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={'./image/' + this.props.item.img} onClick={()=> this.props.onShowItem(this.props.item)} alt=""/>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.bio}</p>
        <b>{this.props.item.price}€</b>
        <div className='add-to-card' onClick={()=> this.props.onAdd(this.props.item)}> + </div>
      </div>
    )
  }
}

export default Item