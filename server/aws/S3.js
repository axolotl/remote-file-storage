const AWS = require('aws-sdk')
const fs = require('fs')
const path = require('path')
const multiparty = require('multiparty')

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
    const form = new multiparty.Form()
    form.parse(req, (error, fields, files) => {
      if (error) throw new Error(error)
      console.log(files)

      const filePath = files.file[0].path
      const buffer = fs.readFileSync(filePath)

      const params = {
        Bucket: bucketName,
        Body: buffer,
        Key: fields.name[0]
      }

      s3.upload(params, (err, data) => {
        if (err) {
          console.log('Error', err)
        }

        if (data) {
          console.log(data)
          console.log('Uploaded in:', data.Location)
          req.locationAWS = data.Key
          req.size = files.file[0].size

          req.body = {
            name: fields.name[0],
            belongsTo: fields.belongsTo[0]
          }

          next()
        }
      })
    })
  },

  download(req, res, next) {
    console.log(req.body)

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
  },

  delete(req, res, next) {
    // handle file deletion on S3 here
    console.log('deleting file')
    next()
  }
}
