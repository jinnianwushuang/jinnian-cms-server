/*
 * @Date           : 2022-03-13 23:49:06
 * @LastEditTime   : 2022-03-13 23:49:06
 * @Description    :  
 */


const mongoose = require('mongoose');

const   mongodb_url =   'mongodb://localhost:27017/cms_dev_1'
module.exports = async ()=>{
        
  await mongoose.connect(mongodb_url,{
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
}
