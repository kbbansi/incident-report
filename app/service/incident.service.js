const { runQuery } = require('../config/db.config');
const axios = require('axios').default;
const { getIncidentReports, createIncidentReport } = require('../repository/incident.repository')
const env = require('../config/env');

const getIncidentReport = async () => {
    const result = await runQuery(getIncidentReports);
    return {
        status: 200,
        data: result
    };
};

const createIncident = async (payload) => {
    const { client_id, city, country, incident_desc } = payload;

    const countryCoordinates = await axiosGetCoordinates(payload.city)
    const weatherReport = await axiosWeatherReport(countryCoordinates.lat, countryCoordinates.lon);

    payload.date = new Date()
    payload.weather_report = weatherReport


    return runQuery(createIncidentReport, [payload.client_id, payload.city, payload.country, payload.incident_desc, payload.date, payload.weather_report])
}

async function axiosGetCoordinates(city) {
    try {
        const data = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city},GH&appid=${env.openweatherAPI}`);
        return { lat, lon } = data.data[0]
    } catch (error) {
        console.log(error);
    }
}

async function axiosWeatherReport(lat, lon) {
    try {
        const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${env.openweatherAPI}`);
        return data.data;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getIncidentReport,
    createIncident
}