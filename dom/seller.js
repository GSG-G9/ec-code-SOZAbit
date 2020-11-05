


function addToItemList(obj, targetArray) {
  console.log(obj);
  console.log(targetArray);
  console.log(obj.id && obj.name && obj.price);
    if (!Array.isArray(targetArray)) return null;
    return [...targetArray, obj];
  }
// const pureFuncs = require("../utlis/function");
let addProductBtnco = document.getElementById("addBtn");
addProductBtnco.addEventListener("click", addItem);
let productArray;

let id;

  productArray = getLocalStorageItem("productArray")
  setLocalStorageItem("productArray",productArray)


function getLocalStorageItem(itemName){
  return JSON.parse(localStorage.getItem(itemName)) || [] ;
}
function setLocalStorageItem(itemName,itemValue){
  localStorage.setItem(itemName, JSON.stringify(itemValue)) 
}

console.log(productArray);

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
  console.log("after",productArray);
  productArray = addToItemList(product, productArray);
  console.log("after",productArray);
  localStorage.setItem("lastId", `${++id}`);
  localStorage.setItem("productArray", JSON.stringify(productArray));
  console.log("hi");
  // location.reload();
   cartContainer.innerHTML = "";
  createCartProduct(productArray);
}
  
  const cartContainer = document.getElementsByClassName("productContainer")[0]
  
  function createCartProduct(storedItemsArray) {
    for (i = 0; i < storedItemsArray.length; i++) {
      createProduct(storedItemsArray[i]);
    }
  }
  
  createCartProduct(productArray);
  
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
      // cartContainer.innerHTML = "";
      cartContainer.appendChild(newObj);
    }
  }




function makeChanges(){
  const productContainer = document.querySelector('.productContainer').children;
  for(let i=0; i < productContainer.length; i++){
  const deleteButton = document.createElement("span");
  const deleteButtonText = document.createTextNode("delete");
  deleteButton.appendChild(deleteButtonText);
  console.log(deleteButton)
  productContainer[i].appendChild(deleteButton);

  deleteButton.addEventListener("click",()=>{
      deleteButton.parentElement.remove()
  })

  }
}
makeChanges();