const express = require('express');
const people = require('./peopleRoutes.js');
const categoties = require('./categotiesRoutes.js');
const curses = require('./curseRoutes.js');

module.exports = app => {
    app.use(express.json(),
        people,
        categoties,
        curses
    );
};