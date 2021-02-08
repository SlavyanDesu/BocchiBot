const fs = require('fs-extra')

/**
 * Get user ID from db.
 * @param {string} userId 
 * @param {object} _dir 
 * @returns {string}
 */
const getLevelingId = (userId, _dir) => {
    let pos = null
    let found = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            pos = i
            found = true
        }
    })
    if (found === false && pos === null) {
        const obj = { id: userId, xp: 0, level: 1 }
        _dir.push(obj)
        fs.writeFileSync('./database/user/level.json', JSON.stringify(_dir))
        return userId
    } else {
        return _dir[pos].id
    }
} 

/**
 * Get user level from db.
 * @param {string} userId 
 * @param {object} _dir 
 * @returns {number}
 */
const getLevelingLevel = (userId, _dir) => {
    let pos = null
    let found = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            pos = i
            found = true
        }
    })
    if (found === false && pos === null) {
        const obj = { id: userId, xp: 0, level: 1 }
        _dir.push(obj)
        fs.writeFileSync('./database/user/level.json', JSON.stringify(_dir))
        return 1
    } else {
        return _dir[pos].level
    }
}

/**
 * Get user XP from db.
 * @param {string} userId 
 * @param {object} _dir 
 * @returns {number}
 */
const getLevelingXp = (userId, _dir) => {
    let pos = null
    let found = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            pos = i
            found = true
        }
    })
    if (found === false && pos === null) {
        const obj = { id: userId, xp: 0, level: 1 }
        _dir.push(obj)
        fs.writeFileSync('./database/user/level.json', JSON.stringify(_dir))
        return 0
    } else {
        return _dir[pos].xp
    }
}

/**
 * Add user level to db.
 * @param {string} userId 
 * @param {number} amount 
 * @param {object} _dir 
 */
const addLevelingLevel = (userId, amount, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        _dir[position].level += amount
        fs.writeFileSync('./database/user/level.json', JSON.stringify(_dir))
    }
}

/**
 * Add user XP to db.
 * @param {string} userId 
 * @param {number} amount 
 * @param {object} _dir 
 */
const addLevelingXp = (userId, amount, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        _dir[position].xp += amount
        fs.writeFileSync('./database/user/level.json', JSON.stringify(_dir))
    }
}

/**
 * Get user rank.
 * @param {string} userId 
 * @param {object} _dir 
 * @returns {number}
 */
const getUserRank = (userId, _dir) => {
    let position = null
    let found = false
    _dir.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
            found = true
        }
    })
    if (found === false && position === null) {
        const obj = { id: userId, xp: 0, level: 1 }
        _dir.push(obj)
        fs.writeFileSync('./database/user/level.json', JSON.stringify(_dir))
        return 99
    } else {
        return position + 1
    }
}

// Cooldown XP gains to prevent spam
const xpGain = new Set()

/**
 * Check is user exist in set.
 * @param {string} userId 
 * @returns {boolean}
 */
const isGained = (userId) => {
    return !!xpGain.has(userId)
}

/**
 * Add user in set and delete it when it's 1 minute.
 * @param {string} userId 
 */
const addCooldown = (userId) => {
    xpGain.add(userId)
    setTimeout(() => {
        return xpGain.delete(userId)
    }, 60000) // Each minute
}

module.exports = {
    getLevelingId,
    getLevelingLevel,
    getLevelingXp,
    addLevelingLevel,
    addLevelingXp,
    getUserRank,
    isGained,
    addCooldown
}