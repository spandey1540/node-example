const UserModel = require("../Models/UserModel");
const Joi = require("@hapi/joi");

exports.signUp = async (req, res) => {
  try {

    const requserdata = Joi.object().keys({
        username: Joi.string().alphanum().min(3).max(30).required(),
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        gender: Joi.string().required(),
        latitude: Joi.string().required(),
        longitude: Joi.string().required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
        email: Joi.string().email({ minDomainSegments: 2 })
      })

      const validate = Joi.validate(req.body, requserdata);
      if (validate.error != null) {
          res.status(200).send({
              code: 301,
              message: "Validation Failed",
              data: validate.error
          })
      }
    // var data = await UserModel.create(req.body);
    if (data) {
      res.status(200).send({
        response: data
      });
    } else {
      res.status(200).send({
        response: "Error Can not send"
      });
    }
  } catch (error) {
    console.log("error occured");
    console.log(error);
  }
};
