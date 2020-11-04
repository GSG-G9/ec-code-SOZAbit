
function search(nameFrag, targetArray) {
    // chicking array and string
    if (!nameFrag || !targetArray.length) return null;

    return targetArray.filter(obj => obj.name.includes(nameFrag))
}

function addToCartList(id,targetArray,wantedArray) {
    if ( typeof id == "undefined" || !targetArray.length || !Array.isArray(wantedArray) ) return null;
    let rArray = [...wantedArray];
    targetArray.forEach(obj => obj.id==id && rArray.push(obj));
    return rArray;    
}


function addToItemList(obj,targetArray) {
    if (!Array.isArray(targetArray)) return null;
    if (obj.id && obj.name && obj.price)
        return [...targetArray, obj]
}

function deleteFromItemList(targetArray, deletedItem) {
    if (!Array.isArray(targetArray)) return null;
    let rArray=[...targetArray];
    for (var i = 0; i < rArray.length; i++) {
        var obj = rArray[i];
    
        if ( obj.id === deletedItem.id) {
            rArray.splice(i, 1);
            
        }
    }
        return rArray;
}

module.exports = {
    search,
    addToCartList,
    addToItemList,
    deleteFromItemList
}
