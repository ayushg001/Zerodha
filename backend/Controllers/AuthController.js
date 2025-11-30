const {UserModel} = require("../model/UserModel");
const bcrypt = require("bcrypt") 
const jwt = require('jsonwebtoken')

const signup = async (req,res) => {
    try {
             const { name , email , password } = req.body;
            //  console.log(name,email,password)
             const user = await UserModel.findOne({ email });
             if ( user) {
                return res.status(409)
                            .json({ message : "User is already exist , you can Login" , success : false })
             }
             const userModel = new UserModel({ name , email , password});
             console.log(userModel)
             userModel.password = await bcrypt.hash(password , 10);
             await userModel.save();
             console.log("user saved")

             res.status(201)
                .json({ message : "Signup successfully" , success : true })
    } catch (err) {
        console.log(err)
            res.status(500)
                .json( { message : "Internal Server Error" , success : false})
    }
};

const login = async (req,res) => {
    try {
             const { email , password } = req.body;
               console.log(email,password)
             const user = await UserModel.findOne({ email });
             console.log(user)
             const errorMsg = "Auth failed email or password is wrong"
             if ( !user) {
                return res.status(403)
                            .json({ message : "user not found", success : false })
             }

            const isPassEqual = await bcrypt.compare(password , user.password)
              if ( !isPassEqual) {
                return res.status(403)
                            .json({ message : errorMsg, success : false })
             };
            console.log("pass matches") ////
             const jwtToken = jwt.sign(
                {email : user.email, id : user._id},
                process.env.JWT_SECRET,
                { expiresIn : '24h'}
             )
             console.log(jwtToken)    /////
             res.status(200)
                .json({ message : "Login successfully" , success : true , jwtToken , email , name : user.name } )
    } catch (err) {
        console.log(err)
            res.status(500)
                .json( { message : "Internal Server Error" , success : false})
    }
};

module.exports = {
    signup , login
}

