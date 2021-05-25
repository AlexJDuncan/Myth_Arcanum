const express = require('express');
const morgan = require('morgan');
const path = require('path');


const Port = 3000;
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(PUBLIC_DIR));

app.listen(Port, () => {
    console.log(`server listening on localhost: ${PORT}`);
});
