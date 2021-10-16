import Joi from "joi";

const schema = Joi.object({
    image_url: Joi.string().min(3).max(256).required(),
    title: Joi.string().min(3).max(64).required(),
    description: Joi.string().min(3).max(64).required(),
    publish_date: Joi.date().required(),
    views: Joi.number().min(0).required(),
});

export default schema;