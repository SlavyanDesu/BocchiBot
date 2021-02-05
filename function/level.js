const fs = require('fs-extra')
const { getBg } = require('./card')
const _bg = JSON.parse(fs.readFileSync('./database/user/card/background.json'))

/**
 * Get user ID from db.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {String}
 */
const getLevelingId = (userId, _dir) => {
    let pos = null
    let found = false
    getBg(userId, _bg)
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
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getLevelingLevel = (userId, _dir) => {
    let pos = null
    let found = false
    getBg(userId, _bg)
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
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getLevelingXp = (userId, _dir) => {
    let pos = null
    let found = false
    getBg(userId, _bg)
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
 * @param {String} userId 
 * @param {Number} amount 
 * @param {Object} _dir 
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
 * @param {String} userId 
 * @param {Number} amount 
 * @param {Object} _dir 
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

// Cooldown XP gains to prevent spam
const xpGain = new Set()

const isGained = (from) => {
    return !!xpGain.has(from)
}

const addCooldown = (from) => {
    xpGain.add(from)
    setTimeout(() => {
        return xpGain.delete(from)
    }, 60000) // Each minute
}

module.exports = {
    getLevelingId,
    getLevelingLevel,
    getLevelingXp,
    addLevelingLevel,
    addLevelingXp,
    isGained,
    addCooldown
}