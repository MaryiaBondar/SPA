export default function() {
    const response = fetch('https://fakestoreapi.com/products/')
    .then(res=>res.json())
    return response
}

// const fetch = new Promise((resolve, reject) => {

// })

// fetch.then(result => console.log(result)).catch(error => {

// })