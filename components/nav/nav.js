import {AddCatalog} from '../../components/catalog/catalog.js'
import Cart from './../cart/cart.js'
import Contacts from './../contacts/contacts.js'
import data from '../../api.js'
document.head.insertAdjacentHTML('beforeend', ' <link rel="stylesheet" href="./styles/style.css">')

let products = [];

data().then(result => {
    products = result;
    console.log(products)
})

const linkData = [
    {name: 'home', component: AddCatalog}, 
    {name: 'cart', component: Cart},
    {name: 'contacts', component: Contacts}
]


const nav = document.createElement('nav')

linkData.map(item => {
    const link = document.createElement('li')
    link.innerHTML = item.name
    link.addEventListener('click', () => {
        location.hash = item.name
        item.component(products)
    })
    nav.appendChild(link)
})

const iconCart = document.createElement('span')
iconCart.innerHTML = '<i class="icon-shopping-cart"></i>'
nav.appendChild(iconCart)

document.body.appendChild(nav)