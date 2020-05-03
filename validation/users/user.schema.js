const joi = require("@hapi/joi");

const schema = {
  user: joi.object({
    firstName: joi.string().max(100).required(),
    lastName: joi.string().max(100).required(),
    gender: joi.string().valid("L", "P").required(),
    email: joi.string().email().required(),
    password: joi
      .string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    number: joi
      .number()
      .integer()
      .min(1000000000000)
      .message("Invalid mobile number")
      .max(9999999999999)
      .message("Invalid mobile number")
      .required()
  })
};

module.exports = schema;
