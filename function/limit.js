const fs = require('fs-extra')

/**
 * Check limit.
 * @param {string} userId 
 * @param {object} _dir 
 * @param {number} limitCount 
 * @param {boolean} isPremium 
 * @param {boolean} isOwner 
 * @returns {boolean}
 */
const isLimit = (userId, _dir, limitCount, isPremium, isOwner) => {
    if (isPremium || isOwner) return false
    let found = false
    for (let i of _dir) {
        if (i.id === userId) {
            if (i.limit <= 0) {
                found = true
                return true
            } else {
                found = true
                return false
            }
        }
    }
    if (found === false) {
        const obj = { id: userId, limit: limitCount }
        _dir.push(obj)
        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_dir))
        return false
    }
}

/**
 * Add limit to user.
 * @param {string} userId 
 * @param {object} _dir 
 * @param {boolean} isPremium 
 * @param {boolean} isOwner 
 */
const addLimit = (userId, _dir, isPremium, isOwner) => {
    if (isPremium || isOwner) return false
    let pos = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            pos = i
        }
    })
    if (pos !== null) {
        _dir[pos].limit -= 1
        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_dir))
    }
}

/**
 * Get user's limit.
 * @param {string} userId 
 * @param {object} _dir 
 * @param {number} limitCount 
 * @returns {number}
 */
const getLimit = (userId, _dir, limitCount) => {
    let pos = null
    let found = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            pos = i
            found = true
        }
    })
    if (found === false && pos === null) {
        const obj = { id: userId, limit: limitCount }
        _dir.push(obj)
        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_dir))
        return limitCount
    } else {
        return _dir[pos].limit
    }
}

module.exports = {
    isLimit,
    addLimit,
    getLimit
}