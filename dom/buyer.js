// createPodactBlock
// EG OBJICT = {id:"1", name:"Doe", price:46}
function createHTMLForObj(obj){
    let newObj = document.createElement('div');
    const objProps = Object.keys(obj);
    const objPropsValues = Object.values(obj);
    for(let i =0; i < objProps.length; i++){
        let objProP = document.createElement('p');
        let objProPC = document.createTextNode(objProps[i]);
        objProP.appendChild(objProPC);
        let objProV = document.createElement('p');
        let objProVC = document.createTextNode(objPropsValues[i]);
        objProV.appendChild(objProVC);
        newObj.appendChild(objProP);
        newObj.appendChild( objProV);
    }
    return newObj;
} 

