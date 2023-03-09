import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/showfullitem";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        { id: 1,
          title: 'Chair',
          img: 'black-chair.jpg',
          bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, debitis.',
          category: 'chairs',
          price: '69.99'
        },
        { id: 2,
          title: 'Table',
          img: 'light-table.jpg',
          bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, debitis.',
          category: 'tables',
          price: '139.99'
        },
        { id: 3,
          title: 'Sofa',
          img: 'yellow-sofa.jpg',
          bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, debitis.',
          category: 'sofa',
          price: '359.99'
        },
        { id: 4,
          title: 'Lamp',
          img: 'light-lamp.jpg',
          bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, debitis.',
          category: 'light',
          price: '49.99'
        },
        { id: 5,
          title: 'Chair',
          img: 'grey-chair.jpg',
          bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, debitis.',
          category: 'chairs',
          price: '89.99'
        },
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  render(){
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory} />
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

      {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
      <Footer />
    </div>
  )
}

onShowItem(item){
  this.setState({fullItem: item})
  this.setState({showFullItem: !this.state.showFullItem})
}

chooseCategory(category){
if(category === 'all'){
  this.setState({currentItems: this.state.items})
  return
}

this.setState({
  currentItems: this.state.items.filter(el=> el.category === category)
})
}

deleteOrder(id){
  this.setState({orders: this.state.orders.filter(el=> el.id !== id)})
}

addToOrder(item){
  let isInArray = false
  this.state.orders.forEach(el =>{
    if (el.id === item.id)
    isInArray= true
  })
    if(!isInArray)
    this.setState({orders: [...this.state.orders, item]})
  }
  }


export default App;
