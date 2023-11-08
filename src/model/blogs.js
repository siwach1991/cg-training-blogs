import {mongoose} from 'mongoose';
const {Schema} = mongoose;

const blogsSchema = new Schema({
	userId: {type: String, required: true},
	title: {type: String, required: true},
	body: {type: String, required: true},
}, {versionKey: false});
const blogs = mongoose.model('blogs', blogsSchema, 'blogs');

export {blogs};
