const mongoose = require('mongoose');
const schema = mongoose.Schema;

const dateType = new Date().toLocaleString();
console.log(dateType);

const Feed = new schema({
    title:{
        type:String,
        required: true,
        maxLength : [15, 'the title must be less than 15 letter '],
    },

    article:{
        type: String,
        required: true,
        maxLength : [40, 'the title must be less than 15 letter '],
    },
    created_at: {
        type: Date,
        default: dateType,
    },
})

module.exports = mongoose.model('Article', Feed);
 