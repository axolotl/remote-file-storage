const AWS = require('aws-sdk')
const fs = require('fs')
const path = require('path')

// get environment vars
const accessId = process.env.ACCESS_ID
const secret = process.env.SECRET
const bucketName = process.env.BUCKET_NAME

// configure
AWS.config.update({
  accessKeyId: accessId,
  secretAccessKey: secret
})

const s3 = new AWS.S3()

module.exports = {
  upload(req, res, next) {
    const params = {
      Bucket: bucketName,
      Body: req.file.path,
      Key: 'folder/' + Date.now() + '_' + path.basename(req.body.name)
    }

    s3.upload(params, (err, data) => {
      if (err) {
        console.log('Error', err)
      }

      if (data) {
        console.log('Uploaded in:', data.Location)
      }
    })

    next()
  }
}
