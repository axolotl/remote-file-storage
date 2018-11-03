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
      Body: fs.createReadStream(req.file.path),
      Key: path.basename(req.body.name)
    }

    s3.upload(params, (err, data) => {
      if (err) {
        console.log('Error', err)
      }

      if (data) {
        console.log('Uploaded in:', data.Location)
        req.locationAWS = data.Key
        next()
      }
    })
  },

  download(req, res, next) {
    console.log(req)

    const params = {
      Bucket: bucketName,
      Key: req.locationAWS
    }

    s3.getObject(params, (err, data) => {
      if (err) {
        console.log('Error', err)
      }

      if (data) {
        console.log(data)
        res.send(data.Body)
      }
    })
  }
}
