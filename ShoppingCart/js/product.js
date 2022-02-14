data = JSON.parse(window.localStorage.getItem('products'))
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let id = urlParams.get('id');

for (let product of data) {
    if (product.id == id) {
        document.body.innerHTML += `
                <div class="single">
                    <h1>${product.name}</h1>
                    <img src="${product.img}">
                    <p>${product.detail}</p>
                    <span>${product.price}</span>
                </div>`
    }
}