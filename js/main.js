// window.alert("Hello MOstaaaaaafa!");

// var username;
// var isloggingin = false;

// isloggingin && console.log("User is logging in 1"); //nothing happens

// isloggingin || console.log("User is logging in 2"); //prints "User is logging in"

// isloggingin = true;

// isloggingin && console.log("User is logging in 3333"); // prints "User is logging in"

// isloggingin || console.log("User is logging in 4"); //nothing happens


// task to control and track an image with mouse event

// var myImage = document.querySelector("img")
// document.addEventListener("mousemove",function(eInfo){
//     console.log(eInfo)
//     myImage.style.left = eInfo.clientX  + "px"
//     console.log(eInfo.clientX)
//     myImage.style.top = eInfo.clientY + "px"
//     console.log(eInfo.clientY)

// }   )



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Add the crud logic:
// First Create         -----------> Done
// Second Retrieve      -----------> Done
// Third Update        -----------> Done
// Fourth Delete      -----------> Done

// now i want to save my listproduct in my local storage to persist the data even if i refresh the page (for the same browser)
// now i want to add appropriate validations for using regex for the inputs

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// first thing the spaghetti code and then the clean code

// my list of objects(products"name, price, description, image'fixed'") declaration
//  i will use ternery operator to check if there is data in the local storage or not
var listProducts = JSON.parse(localStorage.getItem("products")) ? JSON.parse(localStorage.getItem("products")) : [] ;

    

// get the inputs and button
var inputProduct = document.getElementById("productName");
var inputCategory = document.getElementById("productCategory");
var inputPrice = document.getElementById("productPrice");
var inputDescription = document.getElementById("productDescription");
var inputImage = document.getElementById("productImage");
var btnAdd = document.getElementById("addProductBtn");
var btnUpdate = document.getElementById("updateProductBtn");
var productsContainer = document.getElementById("productList");

var currentIndex; // to track the index of the product being updated


// add product function
function addProduct() {
    // //test hallooo
    console.log("HIIII");
    // create product object
    var product = {
        name: inputProduct.value,
        category: inputCategory.value,
        price: inputPrice.value,
        description: inputDescription.value,
        // add fixed image in the images folder "for testing"
        image: "images/Palastine_Background.jpg"
    };

    // add the product to the list
    listProducts.push(product);
    // now i want to save the listProducts to local storage
    localStorage.setItem("products", JSON.stringify(listProducts));
    // Add Display Function
    displayProducts();

    // clear the input fields
    inputProduct.value = "";
    inputCategory.value = "";
    inputPrice.value = "";
    inputDescription.value = "";
    inputImage.value = "";
} 

function displayProducts() {
    productsContainer.innerHTML = ""; // Clear existing products and add the new list
    for (var i = 0; i < listProducts.length; i++) {
        var product = listProducts[i];
        // now i want to add my product card here 
        productsContainer.innerHTML += `
<div class="card border border-primary m-2" style="width: 18rem;">
  <img src="${product.image}" class="card-img-top" alt="test image">
  <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${product.category}</h6>
    <p class="card-text">${product.description}</p>
    <h5 class="card-title">$${product.price}</h5>
    <button onclick="retrieveData(${i})" class="btn btn-primary">Update</button>
    <button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button>
  </div>
</div>        
`;
    }
}


// handling the updateproduct to retreve the product data into the inputs
function retrieveData(index) {
    currentIndex = index; // store the current index for update
    var product = listProducts[index];
    inputProduct.value = product.name;
    inputCategory.value = product.category;
    inputPrice.value = product.price;
    inputDescription.value = product.description;
    // for image we will not handle it now as its fixed
    // inputImage.value = "Palastine_Background.jpg"; // no image handling for now for showing the name for declaration
    
    // now i want to hide the add button and show update button
    btnAdd.style.display = "none"; 
    btnUpdate.style.display = "inline-block";
}



function updateProduct() {
    var product = listProducts[currentIndex];
    product.name = inputProduct.value;
    product.category = inputCategory.value;
    product.price = inputPrice.value;
    product.description = inputDescription.value;
    // image is fixed for now
    product.image = "images/Palastine_Background.jpg";
    // now i want to update the local storage after update
    localStorage.setItem("products", JSON.stringify(listProducts));


    // now update the display
    displayProducts();

    // clear the input fields
    inputProduct.value = "";
    inputCategory.value = "";
    inputPrice.value = "";
    inputDescription.value = "";
    inputImage.value = "";

    // now i want to hide the update button and show add button
    btnAdd.style.display = "inline-block"; 
    btnUpdate.style.display = "none";
}



function deleteProduct(index) {
    listProducts.splice(index, 1);
    // now i want to update the local storage after deletion
    localStorage.setItem("products", JSON.stringify(listProducts));
    // now update the display
    displayProducts();
}


// validation functions
function validateProductName(name) {
    // test regex for name validation (only letters and spaces, min 3 chars)
console.log("Validating product name:", name);
var nameRegex = /^[A-Za-z\s]{3,}$/;
if (!nameRegex.test(name)) {
    console.log("Invalid product name");
    // return false;
}
}

function validateProductCategory(category) {
    // test regex for category validation (only letters and spaces, min 3 chars)
    console.log("Validating product category:", category);
    var categoryRegex = /^[A-Za-z\s]{3,}$/;
    if (!categoryRegex.test(category)) {
        console.log("Invalid product category");
        // return false;
    }
}

function validateProductPrice(price) {
    // test regex for price validation (only numbers, positive)
    console.log("Validating product price:", price);
    var priceRegex = /^\d+(\.\d{1,2})?$/;
    if (!priceRegex.test(price)) {
        console.log("Invalid product price");
        // return false;
    }
}



displayProducts();








// var testImage = "images/Palastine_Background.jpg"; 

// document.getElementById("productList").innerHTML += `
// <div class="card border border-primary m-2" style="width: 18rem;">
//   <img src="${testImage}" class="card-img-top" alt="test image">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>        
        
//         `

