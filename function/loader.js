const fs = require('fs-extra')

const getAllDirFiles = (dirPath, arrayOfFiles) => {
    const files = fs.readdirSync(dirPath)
    arrayOfFiles = arrayOfFiles || []
    files.forEach((f) => {
        if (fs.statSync(dirPath + '/' + f).isDirectory()) {
            arrayOfFiles = getAllDirFiles(dirPath + '/' + f, arrayOfFiles)
        } else {
            arrayOfFiles.push(f)
        }
    })
    return arrayOfFiles
} 

module.exports = {
    getAllDirFiles
}