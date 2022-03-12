/*
 * @Date           : 2022-03-11 10:09:10
 * @FilePath       : /jinnian-cms-server/app/model/admin.js
 * @Description    : 
 */

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
   
    const  AdminSchema = new Schema({
      name: { type: String  },
      password: { type: String  },
      create_at: { type: Date  },
      update_at: { type: Date  },
    });
   
    return mongoose.model('Admin', AdminSchema);
  }