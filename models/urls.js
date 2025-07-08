const mongoose = require('mongoose')
const shortid = require('shortid')
const UrlSchema = new mongoose.Schema({
   fullurl: {
      type: String,
      required: true,
   },
   short: {
      type: String,
      required: true,
      unique:true,
      default: shortid()
   },
   visithistory: [{ timestamp: { type: Number } }],
},
   { timestamp: true }
)

module.exports = mongoose.model('Urls', UrlSchema)
