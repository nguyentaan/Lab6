const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const CategoriesSchema = new Schema({
    name: String,
    post: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
});

const CategoriesModel = model('Categories', CategoriesSchema);

module.exports = CategoriesModel;
