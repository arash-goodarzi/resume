const express = require('express')
const generalInfo = require('./generalInfo/generalInfo.router')

const v1Router = express.Router()

v1Router.use('/generalinfo', generalInfo)

module.exports = v1Router