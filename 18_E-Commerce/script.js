let products = [
  {
    id: 1,
    name: "Wireless Headphones",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    price: 1499,
  },
  {
    id: 2,
    name: "Smart Watch",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    price: 2499,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600",
    price: 1999,
  },
  {
    id: 4,
    name: "Gaming Mouse",
    img: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600",
    price: 899,
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600",
    price: 2499,
  },
  {
    id: 6,
    name: "Laptop Stand",
    img: "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?w=600",
    price: 1299,
  },
  {
    id: 7,
    name: "USB-C Hub",
    img: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600",
    price: 999,
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
    price: 699,
  },
  {
    id: 10,
    name: "Webcam",
    img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600",
    price: 1799,
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
    price: 1899,
  },
];

let localCartItem = JSON.parse(localStorage.getItem("cart")) || [];

function showProduct() {
  const productList = document.getElementById("product-list");

  productList.innerHTML = "";

  products.forEach((p) => {
    productList.innerHTML += `<div class="col-md-4 mt-3">
        
        <div class="card product-card" >
               <img src="${p.img}" class="card-img-top product-img" alt="${p.name}">
                    <div class="card-body">
                        <h5 class="card-title">${p.name}</h5>
                        <h5 class="card-text">₹${p.price}</h5>
                       <button class="btn btn-primary" onclick = "addToCart(${p.id})" >Add to Cart</button>
                       <button class="btn btn-warning text-white" onclick = "updateProduct(${p.id})" >Update</button>

                       <button class="btn btn-danger" onclick = "deleteToCart(${p.id})" >delete</button>   
                    </div>
                </div> 
        </div>`;
  });
}

showProduct();

// add to cart

function addToCart(id) {
  try {
    let productItem = localCartItem.find((p) => p.id === id);

    console.log("already product", productItem);

    if (productItem) {
      let productQty = productItem.qty++;
      console.log("productQty", productQty);
    } else {
      productItem = products.find((p) => p.id === id);

      localCartItem.push({ ...productItem, qty: 1 });
    }

    updateLocalStorage();
    alert("item added successfully");
  } catch (error) {
    console.log(error);
  }
}

function updateLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(localCartItem));
  showCartData();
  grandTotal();
}

function showCartItem() {
  const cartModal = document.getElementById("cartModal");
  const modal = new bootstrap.Modal(cartModal);

  modal.show();
  showCartData();
  grandTotal();
}

function showCartData() {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  localCartItem.forEach((p, index) => {
    tableBody.innerHTML += `
        <tr key={index}>
        <td>${index + 1}</td>
        <td><img src=${p.img} class="cartProductImg" alt=${p.name}></img></td>
        <td>${p.name}</td>
        <td>₹${p.price}</td>    
    <td>
    <div class="d-flex justify-content-center align-items-center gap-3" >
     <button class= "btn btn-outline-success" onclick="increaseQty(${p.id})">+</button>
     <h5>${p.qty}</h5>
     <button class= "btn btn-outline-warning" onclick="decreaseQty(${p.id})">-</button>
    </div>
    </td>
    <td>₹${p.qty * p.price}</td>
    <td><button class= "btn btn-outline-danger" onclick="removeProduct(${p.id})">Remove</button></td>
     </tr>`;
  });
}

function increaseQty(id) {
  try {
    const product = localCartItem.find((p) => p.id === id);

    if (product) {
      product.qty++;
    }

    updateLocalStorage();
  } catch (error) {
    console.log(error);
  }
}

function decreaseQty(id) {
  try {
    const index = localCartItem.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new Error("product not found");
    }
    const product = localCartItem.find((p) => p.id === id);

    if (product) {
      product.qty--;
    }

    if (product.qty === 0) {
      localCartItem.splice(index, 1);
    }

    updateLocalStorage();
  } catch (error) {
    console.log(error);
  }
}

function removeProduct(id) {
  const index = localCartItem.findIndex((p) => p.id === id);

  localCartItem.splice(index, 1);

  updateLocalStorage();
}

function grandTotal() {
  const total = document.getElementById("GrandTotal");
  total.innerHTML = "";

  const totalAmounts = localCartItem.reduce((acc, curr) => {
    return (acc += curr.price * curr.qty);
  }, 0);

  total.innerHTML = `Grand Total<h5>₹${totalAmounts}</h5>`;
}

function checkOut() {
  try {
    if (localCartItem.length === 0) {
      alert("your cart is empty please add some product");
    }
    alert("your order placed successfully");

    localCartItem = [];
    updateLocalStorage();

    const cartModal = document.getElementById("cartModal");
    let modal = bootstrap.Modal.getInstance(cartModal);

    if (modal) {
      modal.hide();
    }
  } catch (error) {
    console.log(error);
  }
}

function addProductModalShow() {
  const addProductModal = document.getElementById("addProductModal");

  const modal = new bootstrap.Modal(addProductModal);

  modal.show();
}

function addProduct() {
  const productName = document.getElementById("productName").value.trim();
  const ProductPrice = document.getElementById("ProductPrice").value.trim();
  const ProductImage = document.getElementById("ProductImage").value.trim();

  if (!productName || !ProductPrice || !ProductImage) {
    alert("product details are required");
  }

  const newProduct = {
    id: new Date().getTime(),
    name: productName,
    price: ProductPrice,
    img: ProductImage,
  };

  console.log("new", newProduct);
  products.push(newProduct);

  updateLocalStorage();

  console.log("products", products);

  alert("new product added successfully");

  showProduct();
}

function deleteToCart(id) {
  const deleteProduct = products.find((p) => p.id === id);

  if (!deleteProduct) {
    throw new Error("product not found");
  }
  alert("product deleted successfully");

  products = products.filter((p) => p.id !== id);

  alert("product deleted");

  showProduct();
}

function updateProduct(id) {
  const updateModal = document.getElementById("updateProductModal");

  const modal = new bootstrap.Modal(updateModal);

  modal.show();

  const product = products.find((p) => p.id === id);

  if (!product) {
    alert("product not found");
  }

  document.getElementById("updateProductName").value = product.name;
  document.getElementById("updateProductPrice").value = product.price;
  document.getElementById("updateProductImage").value = product.img;

  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    alert("product not found");
  }
  const form = document.getElementById("updateProductForm");

  form.onsubmit = function (e) {
    e.preventDefault();


  const newName = document.getElementById("updateProductName").value.trim();
  const newprice = document.getElementById("updateProductPrice").value.trim();
  const newimage = document.getElementById("updateProductImage").value.trim();

  products[index] = {
    ...products[index],
    name: newName,
    price: newprice,
    image: newimage,
  };

  alert("product detail updated");

  modal.hide();

  showProduct();
    };
}
