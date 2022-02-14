let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText)
        let products = document.querySelector('.products')
        data.forEach(element => {
            products.innerHTML += productView(element)
        });
        window.localStorage.setItem('products', this.responseText)
    }
};
xhttp.open("GET", "data/products.json", true);
xhttp.send();

function productView(product) {
    return `
    <div class="product" data="${product.id}">
        <h1>${product.name}</h1>
        <a href="product.html?id=${product.id}"><img src="${product.img}"></a>
        <span>${product.price}</span>
    </div>
    `
}