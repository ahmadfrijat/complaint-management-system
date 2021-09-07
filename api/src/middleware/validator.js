'use strict';

module.exports = (req, res, next) => {
  if (!req.params.id) {
    next('Invalid Complaint ID');
  } else {
    next();
  }
};