import Joi from 'joi';

const addUserValidation = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    profile: Joi.string().required(),
    uid: Joi.string().required(),
    sessionToken: Joi.string().required(),
})

export {
    addUserValidation,
}