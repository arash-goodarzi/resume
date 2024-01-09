const express = require('express')
const { getAllGeneralInfo } = require('./generalInfo.controller')

const generalInfoRouter = express.Router();

generalInfoRouter.get("/",getAllGeneralInfo)

module.exports = generalInfoRouter