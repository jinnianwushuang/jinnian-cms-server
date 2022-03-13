/*
 * @Date           : 2022-03-11 10:09:10
 * @FilePath       : /jinnian-cms-server/app/model/user.js
 * @Description    : 
 */
var mongoosePaginate = require("mongoose-paginate");
module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema(
    {
      name: { type: String },
      password: { type: String ,select: false},
      age: { type: Number },
      last_sign_in_at: {
        type: Date,
      },
    },
    {
      timestamps: true,
    }
  );

  UserSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    object.createdAt = Date.parse(object.createdAt);
    object.updatedAt = Date.parse(object.updatedAt);
    return object;
  });

  UserSchema.plugin(mongoosePaginate);

  return mongoose.model("User", UserSchema);
};
