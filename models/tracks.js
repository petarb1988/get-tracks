const database = require("../tools/db-import");
const trackListt = database.getTrackList();

function getAll() {
  try {
    return trackListt;
  } catch (error) {
    return error;
  }
}

function getById(trackId) {
  try {
    return trackListt.find((item) => item.id == trackId);
  } catch (error) {
    return error;
  }
}

function getSorted(sortParameter) {
  try {
    if (sortParameter == "duration") {
      return trackListt.sort((a, b) => (a.duration > b.duration ? 1 : -1));
    } else if (sortParameter == "name") {
      return trackListt.sort((a, b) =>
        a.artist.name > b.artist.name ? 1 : -1
      );
    } else {
      return "Wrong input.";
    }
  } catch (error) {
    return error;
  }
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.getSorted = getSorted;
