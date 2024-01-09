const {loadGeneralInfo} = require('../../models/generalInfo.model')

function getAllGeneralInfo (req,res){
    // console.log(req.query)
    const requestQuery = req.query
    if (requestQuery.name === 'arashgoodarzi') {
        return res.status(200).json(loadGeneralInfo())
        
    }else{
        return res.status(401).json({"error":"User is not found."})
    }
}

module.exports = {getAllGeneralInfo}