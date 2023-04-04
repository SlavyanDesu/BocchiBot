const fetch = require('node-fetch')

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
  const Data = await fetch('https://piyo.my.id/hack', {
        method: 'POST',
        headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
        body: JSON.stringify({pin: pin})
  })
  const Response = await Data.json();
  if (Response.status === 400) return reject(Response.message)
  resolve(Response)
})

module.exports = {
  quizizz
}
