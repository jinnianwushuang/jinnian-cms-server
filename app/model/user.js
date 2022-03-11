/*
 * @Date           : 2022-03-11 10:09:10
 * @FilePath       : /jinnian-cms-server/app/model/user.js
 * @Description    : 
 */
module.exports= app =>{
    const {  STRING, INTEGER, DATE} = app.Sequelize;
    
    const User = app.model.define('user',{
        login: STRING,
        name: STRING(30),
        password:STRING(32),
        age:INTEGER,
        last_sign_in_at:DATE,
        created_at:DATE,
        updated_at:DATE,
    });

    User.findByLogin = async function(login){
        return await this.findOne({
            where:{
                login:login
            }
        })
    }

    // 不能使用箭头函数 
    User.prototype.logSignin= async function(){
        return await this.update({
            last_sign_in_at: new Date()
        })
    }

    return User

}