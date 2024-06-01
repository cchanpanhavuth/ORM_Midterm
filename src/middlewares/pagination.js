// src/middlewares/pagination.js
const paginatedResults = (model) => {
  return (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const filter = req.query.filter;
    const value = req.query.value;

    let filteredModel = model;

    if (filter && value) {
      filteredModel = model.filter(item => {
        return item[filter] && item[filter].includes(value);
      });
    }

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < filteredModel.length) {
      results.next = {
        page: page + 1,
        limit: limit
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit
      };
    }

    results.results = filteredModel.slice(startIndex, endIndex);
    res.paginatedResults = results;
    next();
  }
}

module.exports = paginatedResults;
