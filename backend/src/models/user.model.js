import mongoose {schema} from "mongoose";

const userSchema = new schema(
    {name: {
            type: String, required: true,},
            username: {
                type: String, required: true, unique: true,
            }, 
            password: {
                type: String, required: true,
            },
            token: {
                type: String,
            }
        
       
 
 }
)    
 const User = mongoose.model("User", userSchema);      

        export {User};