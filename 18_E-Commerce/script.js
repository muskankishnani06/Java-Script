let products = [
    {
        id: 1,
        name: "Wireless Headphones",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
        price: 1499
    },
    {
        id: 2,
        name: "Smart Watch",
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
        price: 2499
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600",
        price: 1999
    },
    {
        id: 4,
        name: "Gaming Mouse",
        img: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600",
        price: 899
    },
    {
        id: 5,
        name: "Mechanical Keyboard",
        img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600",
        price: 2499
    },
    {
        id: 6,
        name: "Laptop Stand",
        img: "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?w=600",
        price: 1299
    },
    {
        id: 7,
        name: "USB-C Hub",
        img: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600",
        price: 999
    },
    {
        id: 8,
        name: "Cotton Casual Shirt",
        price: 1299,
        img: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg",
    },
    {
        id: 9,
        name: "Wireless Mouse",
        img: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600",
        price: 699
    },
    {
        id: 10,
        name: "Webcam",
        img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600",
        price: 1799
    },
    {
        id: 11,
        name: "Bluetooth Speaker",
        price: 1999,
        img: "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg",
    },
    {
        id: 12,
        name: "Laptop Backpack",
        img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
        price: 1899
    }
];

let localCartItem = JSON.parse(localStorage.getItem("cart")) || []


function showProduct() {

    const productList = document.getElementById("product-list")

    productList.innerHTML = "";

    products.forEach((p) => {

        productList.innerHTML += `<div class="col-md-4 mt-3">
        
        <div class="card product-card" >
               <img src="${p.img}" class="card-img-top product-img" alt="${p.name}">
                    <div class="card-body">
                        <h5 class="card-title">${p.name}</h5>
                        <p class="card-text">${p.price}</p>
                       <button class="btn btn-primary" onclick = "addToCart(${p.id})" >Add to Cart</button>
                    </div>
                </div>
        
        
        </div>`


    })
}

showProduct()

// add to cart 

function addToCart(id) {

    try {

        let productItem = localCartItem.find((p) => p.id === id)

        console.log("already product", productItem)

        if (productItem) {
            productItem.qty++;
        } else {
            productItem = products.find((p) => p.id === id);

            localCartItem.push({ ...productItem, qty: 1 })
        }

        updateLocalStorage();
        alert("item added successfully")


    } catch (error) {
        console.log(error)
    }

}

function updateLocalStorage() {

    localStorage.setItem("cart", JSON.stringify(localCartItem))

}

