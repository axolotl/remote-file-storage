const creatFolder = require('./createFolder')
const uploadFile = require('./uploadFile')
const rename = require('./rename')
const destroy = require('./destroy')
const list = require('./list')
const downloadFile = require('./downloadFile')
const getLocationAWS = require('./getLocationAWS')

module.exports = {
  creatFolder,
  uploadFile,
  rename,
  destroy,
  list,
  downloadFile,
  getLocationAWS
}
