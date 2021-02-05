function setCookie(name, value) {
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(JSON.stringify(value));
    document.cookie = updatedCookie;
}
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? JSON.parse(decodeURIComponent(matches[1])) : undefined;
}

export function AddCatalog(products) {
    console.log(products)
    document.querySelector('.container') ? document.querySelector('.container').remove() : null;
    const catalog = document.createElement('section')
    catalog.classList.add('container')
    catalog.classList.add('catalog-container')
    catalog.addTo('body')
    // <section class=""> </section>

    products.map(item => {
        const good = document.createElement('div')
        good.listener('click', () => {
            //[1, 2, 3]
            const myCookie = getCookie('products')
            if(myCookie !== undefined) {
                myCookie.push(item.id)
            } else {
                myCookie = [item.id]
            }
            // myCookie && myCookie.push(item.id)
            //[1, 2, 3, item.id]
            setCookie('products', myCookie)
        })
        good.insertAdjacentHTML('beforeend', `
        <div class="product-block">
        <h3>${item.title}</h3>
        <img src="${item.image}" alt="">
        <p>${item.description}</p>
        <span> ${item.price} </span>
        <span>
            <i class="icon-shopping-cart"></i>
        </span>
       </div>
        `)

        good.addTo('.container')
    })

    
    
}

// category: "men clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"