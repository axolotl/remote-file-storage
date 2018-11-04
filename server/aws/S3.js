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
    // const uploadFile = (buffer, name, type) => {
    //   const params = {
    //     ACL: 'public-read',
    //     Body: buffer,
    //     Bucket: process.env.DANIK_S3_BUCKET,
    //     ContentType: type.mime,
    //     Key: `${name}.${type.ext}`
    //   }
    //   return s3.upload(params).promise()
    // }

    const form = new multiparty.Form()
    form.parse(req, async (error, fields, files) => {
      if (error) throw new Error(error)

      const filePath = files.file[0].path
      const buffer = fs.readFileSync(filePath)

      console.log(path)
      console.log(buffer)

      // const data = await uploadFile(buffer, fileName, type)

      console.log(fields.name[0])      

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
          console.log('Uploaded in:', data.Location)
          req.locationAWS = data.Key
          next()
        }
      })
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
