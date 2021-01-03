const fs = require('fs-extra')

/**
 * Get user ID from leveling.
 * @param {String} userId 
 * @param {String} _dir 
 */
const getLevelingId = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].id
    }
} 

/**
 * Get user level from leveling.
 * @param {String} userId 
 * @param {String} _dir 
 */
const getLevelingLevel = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].level
    }
}

/**
 * Get user XP from leveling.
 * @param {String} userId 
 * @param {String} _dir 
 */
const getLevelingXp = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].xp
    }
}

/**
 * Add user to leveling.
 * @param {String} userId 
 * @param {String} _dir 
 */
const addLevelingId = (userId, _dir) => {
    const obj = { id: userId, xp: 0, level: 1 }
    _dir.push(obj)
    fs.writeFileSync('./database/user/level.json', JSON.stringify(_dir))
}

/**
 * Add user level to leveling.
 * @param {String} userId 
 * @param {Number} amount 
 * @param {String} _dir 
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
 * Add user XP to leveling.
 * @param {String} userId 
 * @param {Number} amount 
 * @param {String} _dir 
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

module.exports = {
    getLevelingId,
    getLevelingLevel,
    getLevelingXp,
    addLevelingId,
    addLevelingLevel,
    addLevelingXp
}