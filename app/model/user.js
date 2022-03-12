/*
 * @Date           : 2022-03-11 10:09:10
 * @FilePath       : /jinnian-cms-server/app/model/user.js
 * @Description    : 
 */
var mongoosePaginate = require('mongoose-paginate');
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
   
    const UserSchema = new Schema({
      name: { type: String  },
      password: { type: String  },
      create_at: { type: Date  },
      update_at: { type: Date  },
    });
    UserSchema.plugin(mongoosePaginate);
    return mongoose.model('User', UserSchema);
  }