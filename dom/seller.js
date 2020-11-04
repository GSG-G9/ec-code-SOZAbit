
console.log("hiii");

function addToItemList(obj, targetArray) {
    if (!Array.isArray(targetArray)) return null;
    if (obj.id && obj.name && obj.price) return [...targetArray, obj];
  }
// const pureFuncs = require("../utlis/function");
let addProductBtnco = document.getElementById("addBtn");
addProductBtnco.addEventListener("click", addItem);
let productArray;

console.log("hiii");

let id;

if (!JSON.parse(localStorage.getItem("productArray"))) {
  productArray = [];
} else {
  productArray = JSON.parse(localStorage.getItem("productArray"));
}

function addItem() {
  let product = {};
  let name = document.getElementById("productName").value;
  let category = document.getElementById("productCategory").value;
  let price = document.getElementById("productPrice").value;

  if (!localStorage.getItem("lastId")) {
    id = "0";
  } else {
    id = localStorage.getItem("lastId");
  }

  product.id = id;
  product.name = name;
  product.category = category;
  product.Price = price;
  console.log(product);
  console.log(productArray);
  productArray = addToItemList(product, productArray);
  localStorage.setItem("lastId", `${++id}`);
  localStorage.setItem("productArray", JSON.stringify(productArray));
}







function displayCartItems() {
    let storedItems = localStorage.getItem("productArray");
    let storedItemsArray = [];
  
    if (storedItems) {
      storedItemsArray = JSON.parse(storedItems);
    }
    return storedItemsArray;
  }
  
  const cartContainer = document.getElementByClassName("productContainer");
  
  function createCartProduct(storedItemsArray) {
    for (i = 0; i < storedItemsArray.length; i++) {
      createProduct(storedItemsArray[i]);
    }
  }
  
  createCartProduct(displayCartItems());
  
  function createProduct(obj) {
    let newObj = document.createElement("div");
    newObj.setAttribute("class", "product");
    const objProps = Object.keys(obj);
    const objPropsValues = Object.values(obj);
    for (let i = 0; i < objProps.length; i++) {
      let objProP = document.createElement("p");
      let objProPC = document.createTextNode(objProps[i]);
      objProP.appendChild(objProPC);
      let objProV = document.createElement("p");
      let objProVC = document.createTextNode(objPropsValues[i]);
      objProV.appendChild(objProVC);
      newObj.appendChild(objProP);
      newObj.appendChild(objProV);
      cartContainer.appendChild(newObj);
    }
  }