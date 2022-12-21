const {User} = require("./../schema/userSchema");
const jwt = require("jsonwebtoken")

const login = async (req,resp) => {

    // Email And Password From Requested Body
    const {email,password} = req.body

    const user = await User.findOne({email:email})
    console.log(user)

    // if User exist So Execute This 

    if(user){
            
            if(user.password == password){
                const token = jwt.sign({email:user.email,id:user._id},process.env.SECRET_KEY)
                resp.status(201).json({message:"Login Successfully",token:token})
            }
            else{
                resp.status(401).json("Invalid Password")
            }
    }

    // else Execute This 

    else{
        resp.status(401).json("User Not Found")
    }

}

module.exports = {login}