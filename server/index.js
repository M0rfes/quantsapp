const app = require('express')();
const fetch = require('node-fetch');
const cors = require('cors');
app.use(cors());
app.get('/OptionTriggers', (req, res) => {
    fetch('https://api.quantsapp.in/app_api/cp-built', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                expiry: '26-Dec-19',
                user_id: '109066',
                token: '729',
            }),
        })
        .then(data => data.json())
        .then(data => res.json(data))
        .catch(e => res.json(e));
});
app.get('/SynopsisFuturesOI', (req, res) => {
    fetch('https://api.quantsapp.in/app_api/fut-builtup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                expiry: '-',
                get_all: '1',
                user_id: '109066',
                token: '729',
            }),
        })
        .then(data => data.json())
        .then(data => res.json(data))
        .catch(e => res.json(e));
});

app.get('/SynopsisFOVolume', (req, res) => {
    fetch('https://api.quantsapp.in/app_api/synopsis-volm-oi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                screen: 'volume',
                user_id: '109066',
                token: '729',
            }),
        })
        .then(data => data.json())
        .then(data => res.json(data))
        .catch(e => res.json(e));
});
app.get('/SynopsisOptionsOI', (req, res) => {
    fetch('https://api.quantsapp.in/app_api/synopsis-volm-oi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                screen: 'oi',
                user_id: '109066',
                token: '729',
            }),
        })
        .then(data => data.json())
        .then(data => res.json(data))
        .catch(e => res.json(e));
});
app.listen('3000', () => console.log('server running on port 3000'));