require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const compress = require('compression');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 7999;
const env = process.env.NODE_ENV || 'development';

const app = express();

app.use(compress());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());

if (!module.parent) app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.static(path.join(__dirname, '../dist')));

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
    }
);

if (!module.parent) {
    app.listen(port, '0.0.0.0', (err) => {
        if (err) {
            console.error('application-err', err);
        }
        console.info(`Started in ${env === 'development' ? env : 'production'} mode on port ${port}.`);
    });
}