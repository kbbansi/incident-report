const express = require('express');
const router = express.Router();
const IncidentController = require('../controller/incident.controller');


router
.get("/", IncidentController.getIncidentReports)
.post(IncidentController.createIncident);


module.exports = router;