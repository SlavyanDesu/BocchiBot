/**
 * @typedef QuizizzHack
 * @property {string} answers
 */

/**
 * Quizizz Hack Tools.
 * @param {string} pin
 * @returns {Promise<QuizizzData>} answers
 */

const quizizz = (pin) => new Promise((resolve, reject) => {
  if (!pin) return reject('Require Pin Query.')
  let obj = {
    status: 200,
    url: `https://piyo.my.id/quizizz?pin=${pin}`
  }
  resolve(obj)
})

module.exports = {
  quizizz
}