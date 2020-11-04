function createHTMLForObj(obj){
    let newObj = document.createElement('div');
    const objProps = Object.keys(obj);
    const objPropsValues = Object.values(obj);
    for(let i =0; i < objProps.length; i++){
        let objProP = document.createElement('p');
        let objProPC = document.createTextNode(objProps[i]);
        objProP.appendChild(objProPC);
        let objProV = document.createElementNS('p');
        let objProVC = document.createTextNode(objPropsValues[i]);
        objProV.appendChild(objProVC);
        newObj.appendChild(objProP);
        newObj.appendChild( objProV);
    }
    return newObj;
}


let products = [
	{
        id : "01",
		name: "T-shirt",
		price:"10$",
		category: "clothes"
	},
	{
        id : "",
		name: "T-shirt",
		price: "8$",
		img: "",
		filter: "clothes"
	},	{
		name: "sport boot",
		price: "20$",
		img: "",
		filter: "sport",
	},	{
		name: "tenis table",
		price: "100$",
		img: "",
		filter: "sport",
	},	{
		name: "mobile",
		price: "200$",
		img: "",
		filter: "techenology",
	},	{
		name: "labtop",
		price: "700$",
		img: "",
		filter: "techenology",
	},	{
		name: "ipad",
		price: "150$",
		img: "",
		filter: "techenology",
	},	{
		name: "book1",
		price: "5$",
		img: "",
		filter: "books",
	},	{
		name: "book2",
		price: "9$",
		img: "",
		filter: "books",
	},	{
		name: "book3",
		price: "12$",
		img: "",
		filter: "books",
	},	{
		name: "callOfDuty",
		price: "30$",
		img: "",
		filter: "game",
	},	{
		name: "whatchdogs",
		price: "33$",
		img: "",
		filter: "games",
	}
	
];


let productContainer = document.querySelector(".productContainer");
localStorage.setItem('products', JSON.stringify(products));
var retrievedObject = localStorage.getItem('products');
console.log('retrievedObject: ', JSON.parse(retrievedObject));
function createProduct(retrievedObject) {
for(let i = 0; i< retrievedObject.length; i++){
    let newCreatedObject = createHTMLForObj(retrievedObject[i]);
    productContainer.appendChild(newCreatedObject);
}
}