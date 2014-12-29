#! /usr/bin/env node

var express = require("express"),
    app = express(),
    directory = require("serve-index");

app.use(express.static(__dirname));
app.use(directory(__dirname));

app.listen(process.argv[2] || 80);