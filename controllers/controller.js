const tracks = require('../models/tracks');

function getAll() {
    try {
        return tracks.getAll();
    } catch (error) {
        return error;
    }
}

function getById(id) {
    try {
        return tracks.getById(id);
    } catch (error) {
        return error;
    }
}

function getSorted(sortParameter) {
    try {
        return tracks.getSorted(sortParameter);
    } catch (error) {
        return error;
    }
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.getSorted = getSorted;