export function AddCatalog(products) {
    console.log(products)
    document.querySelector('.container') ? document.querySelector('.container').remove() : null;
    const catalog = document.createElement('section')
    catalog.classList.add('container')
    catalog.classList.add('catalog-container')
    const data = ['item1', 'item2']
    data.map(item => {
        catalog.insertAdjacentHTML('beforeend', `<div> ${item} </div>`)
    })
    document.body.appendChild(catalog)
}