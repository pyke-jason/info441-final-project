import mongoose from 'mongoose';

let models = {};

main().catch(err => console.log(err))
async function main() {
    console.log('connecting to mongodb');
    await mongoose.connect(process.env.MONGODB_URI);

    console.log('connected to mongodb');

    const userSchema = new mongoose.Schema({
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        street: String,
        city: String,
        state: String,
        zip: String,
        languages: Array,
        admin_library: String
    });
    models.User = mongoose.model('User', userSchema);

    const bookSchema = new mongoose.Schema({
        isbn: { type: String, required: true },
        title: { type: String, required: true },
        author: String,
        language: String,
        region: String,
        publish_date: Date,
        publisher: String
    });
    models.Book = mongoose.model('Book', bookSchema);

    const librarySchema = new mongoose.Schema({
        name: { type: String, required: true },
        street: String,
        city: String,
        state: String,
        zip: String,
        tribal_affiliation: String,
        government_affiliation: String
    });
    models.Library = mongoose.model('Library', librarySchema);

    console.log('mongoose models created');
}

export default models;