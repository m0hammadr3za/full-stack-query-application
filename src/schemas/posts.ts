import Joi from "joi";

const postSchema = Joi.object({
    image_url: Joi.string().min(3).max(256).required(),
    title: Joi.string().min(3).max(64).required(),
    description: Joi.string().min(3).max(64).required(),
    publish_date: Joi.date().required(),
    views: Joi.number().min(0).required(),
});

const postQuerySchema = Joi.object({
    search: Joi.string().min(1).max(64).allow(""),
    sort: Joi.string().valid("new", "popular"),
    page: Joi.number().min(0),
    limit: Joi.number().valid(4),
});

// Schema for posts count's route, validation
const postSearchSchema = Joi.string().min(1).max(64).allow("");

export default postSchema;
export { postQuerySchema, postSearchSchema };
