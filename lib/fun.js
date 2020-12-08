const { fetchText } = require('../tools/fetcher')

const howgay = (nama) => new Promise((resolve, reject) => {
    console.log(`Check how gay is ${nama}...`)
    fetchText('https://raw.githubusercontent.com/MrPawNO/howgay/main/howgay.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

const motivasi = () => new Promise((resolve, reject) => {
    console.log('Getting motivates text...')
    fetchText('https://raw.githubusercontent.com/MrPawNO/motivasi/main/motivasi.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

module.exports = {
    howgay,
    motivasi
}