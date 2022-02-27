const data = require('../database/zadatak.json');

function getTrackList() {
    return data.tracks.data;
}

module.exports.getTrackList = getTrackList;