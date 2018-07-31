function setItem (key, value) {
    let v = JSON.stringify(value)
    if (!window.localStorage) {
        return false
    }
    return localStorage.setItem(key, v)
}

function getItem (key) {
    if (!window.localStorage) {
        return false
    }
    let v = JSON.parse(localStorage.getItem(key))
    return v
}

export default {
    setItem,
    getItem
}