var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var tvShowSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: false,
    },
    url: {
        type: String,
        uniqe: true,
        required: false,
    },
    name: {
        type: String,
        uniqe: false,
        required: true,
    },
    genres: {
        type: Array,
        unique: false,
        required: true,
    },
    premiered: {
        type: String,
        uniqe: false,
        required: true,
    },
    ended: {
        type: String,
        uniqe: false,
        required: true,
    },
    image: {
        medium: {
            type: String,
            unique: true,
            required: false,
        },
        original: {
            type: String,
            unique: true,
            required: false,
        }
    },
    summary: {
        type: String,
        unique: false,
        required: false,
    }
}, {
    timestamps: true
});

module.exports = tvShowSchema;