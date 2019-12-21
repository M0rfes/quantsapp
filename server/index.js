const express = require('express');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');
app.use(express.json());
app.use(
    cors({
        origin: '*',
    }),
);

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
app.post('/SynopsisFuturesOI', (req, res) => {
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
app.post('/SynopsisFOVolume', (req, res) => {
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
app.post('/SynopsisOptionsOI', (req, res) => {
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
app.get('/MasterScript', (req, res) => {
    fetch('https://s3.ap-south-1.amazonaws.com/appmasterfiles/scripMaster.txt')
        .then(data => data.text())
        .then(d => res.json(d))
        .catch(e => res.json({ mag: e }));
});
app.get('/BuiltUpSector', (req, res) => {
    fetch('https://api.quantsapp.in/app_api/sector-builtup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: '109066',
                token: '729',
            }),
        })
        .then(res => res.json())
        .then(data => res.json(data))
        .catch(e => res.json(e));
});

app.post('/auth', (req, res) => {
    const { api, version, platform } = req.body;
    console.log(req.body);
    fetch('https://alb.quantsapp.net/m/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                api,
                version,
                platform,
            }),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(e => {
            console.log(e);
            res.json(e);
        });
});

app.listen('3000', () => console.log('server running on port 3000'));
