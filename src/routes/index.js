const { Router } = require('express');
const path = require('path');
const ReportController = require('../app/controllers/ReportController')

const routes = Router();

routes.get('/', (req, res) => {
  res.sendFile(path.resolve('public', 'index.html'));
});

routes.get('/report/:profileId', ReportController.report);

module.exports = routes;