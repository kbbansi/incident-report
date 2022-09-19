const setCurrentSchema = `Set search_path = incident_report_db`;

const getIncidentReports = `Select * from incident_report`;

const createIncidentReport = `
Insert into 
    incident_report(
        client_id,
        city,
        country,
        incident_desc,
        date,
        weather_report
        ) 
Values ($1, $2, $3, $4, $5, $6) Returning client_id, city, country, incident_desc, date, weather_report`;

module.exports = {
    setCurrentSchema,
    getIncidentReports,
    createIncidentReport
};