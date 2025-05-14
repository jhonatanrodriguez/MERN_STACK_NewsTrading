const mongoose = require('mongoose');
const noticiaSchema = mongoose.Schema({
    title: {
        type: String,
        require: false
    },
    url: {
        type: String,
        require: false
    },
    time_published: {
        type: String,
        require: false
    },
    authors: {
        type: String,
        require: false
    },
    summary: {
        type: String,
        require: false
    },
    banner_image: {
        type: String,
        require: false
    },
    source: {
        type: String,
        require: false
    },
    category_within_source: {
        type: String,
        require: false
    },
    source_domain: {
        type: String,
        require: false
    },
    overall_sentiment_score: {
        type: Number,
        require: false
    },
    overall_sentiment_label: {
        type: String,
        require: false
    }
});
const Noticia = mongoose.model('noticia', noticiaSchema);
module.exports = Noticia;