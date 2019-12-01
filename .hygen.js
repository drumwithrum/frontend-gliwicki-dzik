const fs = require('fs')

const doesFileExist = (path) => {
  return fs.existsSync(path) || null;
}

module.exports = {
  helpers: {
    doesFileExist,
  }
}
