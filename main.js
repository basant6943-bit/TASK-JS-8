function  getProducts(){
    fetch("https://dummyjson.com/products").then((response)=>response.json()).then((data)=>{
        const products = document.querySelector(".products-container");

        data.products.forEach(product => {
            products.innerHTML+=`
            <div>
            <img src = "${product.thumbnail}">
            <h2>$${product.price} </h2>
            <p>${product.description}</p>
            
            </div>

            `;
        });
    });
}


getProducts()

