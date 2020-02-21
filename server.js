const app = require('express')();
const dynamicRoute = require('./dynamicRoutes')

const PORT = process.env.PORT || 5000;

app.use('/api', dynamicRoute())

app.listen(PORT, () => `Server running on port https://localhost:${PORT}`)