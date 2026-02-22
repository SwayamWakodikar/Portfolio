import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

const viewsSchema = new mongoose.Schema({
    count: {
        type: Number,
        default: 0
    }
});

const Views = mongoose.model('Views', viewsSchema);

export { Contact, Views };