import {mount as productsMount} from 'products/ProductsIndex' // products = nome del remote (aggiunto in remotes nel webpack config file)
import {mount as cartMount} from 'cart/CartShow'

console.log('Container works!')

const productsEl = document.querySelector('#container_dev-products')
productsMount(productsEl)

const cartEl = document.querySelector('#container_dev-cart')
cartMount(cartEl)

