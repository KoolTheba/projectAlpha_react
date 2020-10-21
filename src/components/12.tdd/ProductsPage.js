import React from 'react'
import getPriceColor from './getPriceColor'
import changeOrderByPrice from './changeOrderByPrice'
import filterByName from './filterByName'

export default class ProductsPage extends React.Component {

  state = {
    value: '',
    selectedProduct: [],
    products: [
      {
        id: 1,
        name: 'Cachopo',
        price: 30,
      },
      {
        id: 2,
        name: 'Chorizo a la sidra',
        price: 15,
      },
      {
        id: 3,
        name: 'Navajas',
        price: 25,
      },
    ]
  }

  handleOrderChange = () => {
      this.setState(state => ({
          products: changeOrderByPrice(state.products)
      }))
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value.toLowerCase()
    })
  }

  handleFilter = (e) => {
    e.preventDefault()
    const filtered = filterByName(this.state.value, this.state.products)
    this.setState({
      selectedProduct: filtered,
      value: ''
    })
  }

  render() {
    const { selectedProduct } = this.state
    return (
      <>
        <button onClick={this.handleOrderChange}>Order by price</button>
          <ul style={{ listStyle: 'none'}}>
          {this.state.products.map(product => (
            <li key={product.id} style={{color: getPriceColor(product.price)}}>
              {product.name} - {product.price}
            </li>
          ))}
        </ul>
          <form>
          <p>Filter by product</p>
            <input 
              onChange={this.handleInputChange}
              placeholder={'enter by product name...'}
            />
            <button
              onClick={this.handleFilter}
            >Filter</button>
          </form>
           {
            selectedProduct.length > 0 &&
            <h2>Producto: {selectedProduct[0].name} Precio: {selectedProduct[0].price}€</h2>
          }
      </>
    )
  }
}