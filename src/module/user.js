import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("User",{
   
   id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
})
export default User
// User.sync({force:true}).then(()=>console.log("product was clear"))
