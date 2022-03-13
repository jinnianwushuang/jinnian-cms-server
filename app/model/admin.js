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
 
    },
    {
      timestamps: true,
    });

    AdminSchema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        object.createdAt = Date.parse(object.createdAt);
        object.updatedAt = Date.parse(object.updatedAt);
        return object;
      });
    return mongoose.model('Admin', AdminSchema);
  }