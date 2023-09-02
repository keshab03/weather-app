const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/weather', async (req, res) => {
    try {
        const { query } = req;
        const apiKey = '6783c6f371512588b3e482f47e68fd4d';
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

        const response = await axios.get(apiUrl, {
            params: {
                q: query.location,
                units: 'metric',
                appid: apiKey,
            },
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
