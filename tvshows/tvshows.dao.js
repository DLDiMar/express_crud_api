const mongoose = require('mongoose');
const tvShowSchema = require('./tvshows.model');

tvShowSchema.statics = {
    create : (data, cb) => {
        const tvShow = new this(data);
        tvShow.save(cb);
    },

    get : (query, cb) => {
        this.get(query, cb);
    },

    getByName: (query, cb) => {
        this.findOne(query, cb);
    },

    update: (query, updateData, cb) => {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: (query, cb) => {
        this.findOneAndDelete(query, cb);
    }
}

const tvShowModel = mongoose.model('TVShow', tvShowSchema);
module.exports = tvShowModel;