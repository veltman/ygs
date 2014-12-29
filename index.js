#! /usr/bin/env node

var express = require("express"),
    parser = require("body-parser"),
    app = express(),
    directory = require("serve-index");

app.use(parser.json());
app.use(parser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname));
app.use(directory(__dirname));

app.listen(process.argv[2] || 80);