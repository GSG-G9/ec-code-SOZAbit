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