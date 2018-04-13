const axios = require('axios')
const URL = 'http://ip-api.com/json'

const getMyIp = (cb)=>{
  axios.get(URL)
    .then(res => cb(null,res.data))
    .catch(err => console.log(err))
}
module.exports = getMyIp
