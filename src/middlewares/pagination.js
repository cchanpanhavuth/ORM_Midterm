const paginatedResults = (model) => {
  return (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const filters = req.query.filters ? req.query.filters.split(',') : [];
    const values = req.query.values ? req.query.values.split(',') : [];

    let filteredModel = model;

    if (filters.length !== values.length) {
      return res.status(400).json({ message: "The number of filters and values must be the same" });
    }

    if (filters.length > 0 && values.length > 0 && filters.length === values.length) {
      filteredModel = model.filter(item => {
        return filters.every((filter, index) => {
          const value = values[index];
          return item[filter] && item[filter].includes(value);
        });
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
  };
};

module.exports = paginatedResults;
