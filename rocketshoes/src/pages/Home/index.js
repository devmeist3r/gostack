import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { MdShoppingBasket } from 'react-icons/md'

import { formatPrice } from '../../util/format'

import api from '../../services/api'

import * as CartActions from '../../store/modules/cart/actions'

import { ProductList } from './styles'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
    }
  }

  async componentDidMount() {
    const response = await api.get('/products')

    const data = response.data.map(product => ({
      ...product,
      priceFormated: formatPrice(product.price),
    }))

    this.setState({ products: data })
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props
    addToCartRequest(id)
  }

  render() {
    const { products } = this.state
    const { amount } = this.props
    return (
      <div>
        <ProductList>
          {products.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <strong>{product.title}</strong>
              <span>{product.priceFormated}</span>

              <button
                type="button"
                onClick={() => this.handleAddProduct(product.id)}
              >
                <div>
                  <MdShoppingBasket size={16} color="#fff" />{' '}
                  {amount[product.id] || 0}
                </div>
                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </li>
          ))}
        </ProductList>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount
    return amount
  }, {}),
})

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
