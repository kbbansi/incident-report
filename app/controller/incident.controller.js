const IncidentService = require('../service/incident.service')

const getIncidentReports = async (req, res, next) => {
    try {
        const incidentReport = await IncidentService.getIncidentReport();
        return res.status(200).json(incidentReport)
    } catch (error) {
        next(error)
    }
}

const createIncident = async (req, res, next) => {
    try {
        const incidentReport = await IncidentService.createIncident(req.body);
        return res.status(201).json(incidentReport)   
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getIncidentReports,
    createIncident
}