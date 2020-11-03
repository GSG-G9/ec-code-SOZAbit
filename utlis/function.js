
function search(nameFrag, targetArray) {
    // chicking array and string
    if (!nameFrag || !targetArray.length) return null;

    return targetArray.filter(obj => obj.name.includes(nameFrag))
}

module.exports = {
    search
}
