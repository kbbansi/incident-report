require('./app/config/db.config');

const express = require('express')
const incidentRouter = require('./app/route/incident.route')
const {
    notFound,
    badRequest,
    internalServerError,
} = require("./app/middleware/error-handler.middleware");

const app = express();

app.use(express.json());
const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});

app.use('/incident-report', incidentRouter);
app.use(badRequest);
app.use(internalServerError);
app.use(notFound);