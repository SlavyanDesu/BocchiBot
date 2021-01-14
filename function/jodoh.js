const fs = require('fs-extra')

/**
 * Add participant.
 * @param {String} userId 
 * @param {String} name 
 * @param {Number} age 
 * @param {String} gender 
 * @param {Object} _dir 
 */
const addJodoh = (userId, name, age, gender, _dir) => {
    const obj = { id: userId, name: name, age: age, gender: gender }
    _dir.push(obj)
    fs.writeFileSync('./database/user/jodoh/jodoh.json', JSON.stringify(_dir))
}

/**
 * Delete participant.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Boolean}
 */
const delJodoh = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        _dir.splice(position, 1)
        return true
    }
}

/**
 * Get array list of participant.
 * @param {String} gender 
 * @param {Object} _dir 
 * @returns {String[]}
 */
const getJodoh = (gender, _dir) => {
    const array = []
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].gender === gender.toLowerCase()) {
            const obj = { id: _dir[i].id, name: _dir[i].name, age: _dir[i].age, gender: gender }
            array.push(obj)
        }
    })
    if (array !== null) {
        return array
    } 
}

/**
 * Check participant status.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Boolean}
 */
const checkJodoh = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })
    return status
}

module.exports = {
    addJodoh,
    getJodoh,
    checkJodoh,
    delJodoh
}