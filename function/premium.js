const fs = require('fs-extra')
const toMs = require('ms')

const addPremiumUser = (userId, expired, _dir) => {
    const obj = { id: userId, expired: Date.now() + toMs(expired) }
    _dir.push(obj)
    fs.writeFileSync('./database/bot/premium.json', JSON.stringify(_dir))
}

const getPremiumPosition = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getPremiumExpired = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].expired
    }
}

const checkPremiumUser = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })
    return status
}

const expiredCheck = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() > _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/bot/premium.json', JSON.stringify(_dir))
        }
    }, 1000)
}

module.exports = {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredCheck,
    checkPremiumUser
}
