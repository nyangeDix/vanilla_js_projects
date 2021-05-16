import fetchData from './fetch.js';

const all_products = document.getElementById('all-products');
const shoes = document.getElementById('shoes');
const watches = document.getElementById('watches');
const shirts = document.getElementById('shirts');
const products_container = document.getElementById('products_container');
const dataUrl = './data.json';

const getCard = (producttypecheck) => {
    fetchData(dataUrl).then((data) => {
        // console.log(data.store_data);
        data.store_data.map(store => {
            if (store.producttype === producttypecheck || producttypecheck === 'all') {
                products_container.innerHTML += `
                <div class="card-container">
                    <img src=${store.productimage} class="image-responsive" alt=${store.productname}>
                    <div class="card-body-container">
                        <h1>${store.productname}</h1>
                        <p>${store.productprice}</p>
                        <span>
                            <a href="">Buy</a>
                        </span>
                    </div>
                </div>
            `;
            }
        })
    }).catch(error => {
        console.log(`Err: ${error}`);
    })
    // Clears the container before loading more content
    // When button is clicked
    products_container.innerHTML = '';
}

window.onload = () => {
    console.log('Loading all products');
    getCard('all');
}

// all products button
all_products.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Loading all products');
    getCard('all');
});

// Shoes
shoes.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Loading shoes');
    getCard('shoes');
})

watches.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Loading watches');
    getCard('watch');
})

shirts.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Loading shirts');
    getCard('tshirt');
})