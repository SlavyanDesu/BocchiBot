const fs = require('fs-extra')

/**
 * Get background.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {String}
 */
const getBg = (userId, _dir) => {
    let pos = null
    let found = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            pos = i
            found = true
        }
    })
    if (found === false && pos === null) {
        const obj = { id: userId, link: 'https://i.ibb.co/tYf3jmz/amos-yan-no-entry-1.jpg' }
        _dir.push(obj)
        fs.writeFileSync('./database/user/card/background.json', JSON.stringify(_dir))
        return 'https://i.ibb.co/tYf3jmz/amos-yan-no-entry-1.jpg'
    } else {
        return _dir[pos].link
    }
}

/**
 * Replace background.
 * @param {String} userId 
 * @param {String} link 
 * @param {Object} _dir 
 */
const replaceBg = (userId, link, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        _dir[position].link = link
        fs.writeFileSync('./database/user/card/background.json', JSON.stringify(_dir))
    }
}

module.exports = {
    getBg,
    replaceBg
}