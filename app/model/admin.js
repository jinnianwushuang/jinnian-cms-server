/*
 * @Date           : 2022-03-11 10:09:10
 * @FilePath       : /jinnian-cms-server/app/model/admin.js
 * @Description    : 
 */
module.exports= app =>{
    const {  STRING, INTEGER, DATE} = app.Sequelize;
    
    const Admin = app.model.define('admin',{
        name: STRING(30),
        password:STRING(32),
        last_sign_in_at:DATE,
        created_at:DATE,
        updated_at:DATE,
    });

    // 不能使用箭头函数 
    Admin.prototype.logSignin= async function(){
        return await this.update({
            last_sign_in_at: new Date()
        })
    }

    return Admin

}