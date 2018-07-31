import Storage from './storage.js'
const USERKEY = 'user-key'

function isLogin () {
    let result = Storage.getItem(USERKEY)

    if (result) {
        return result
    }
    return false
}

function getUserId () {
    let result = isLogin()

    if (result) {
        return result
    }
    return false
}

function setUserId (id) {
    let result = Storage.setItem(USERKEY, id)

    return result
}

export default {
    isLogin,
    getUserId,
    setUserId
}