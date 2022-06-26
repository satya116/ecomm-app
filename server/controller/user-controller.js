const User = require('../model/userSchema');

 const userLogIn = async (req, res) => {
    try {
        let user = await User.findOne({ username: req.body.username, password: req.body.password });
        if(user) {
            return res.status(200).json(`${req.body.username} login successfull`);
        } else {
            return res.status(401).json('Invalid Login');
        }
    } catch (error) {
        res.json('Error: ', error.message);
    }
}

 const userSignUp = async (req, res) => {
    console.log({username: req.body.username}); /////////////////
    try {
        const exist = await User.findOne({ username: req.body.username });
        if(exist) {
            console.log("nooooo: new user ke liye yeh nhi chlna chahiye");
            return res.status(401).json({ message: 'User already exist'});
        }

        console.log("yes: new user ke liye yeh chlna chahiye");

        const user = req.body;
        await User.create(user)
        res.status(200).json({ mesage: user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = { userLogIn, userSignUp }



