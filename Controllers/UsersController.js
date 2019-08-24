const UserModel = require('../Models/UserModel');
exports.signUp = async (req, res) => {
    try {

        var data = await UserModel.create(req.body);
        if (data) {
            res.status(200).send({
                response:data
            })
        } else {
    res.status(200).send({
        response: "Error Can not send"
    })           
        }
        
    } catch (error) {
        console.log("error occured");
        console.log(error);
    }
}