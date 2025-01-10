const express = require("express");
const pg = require("pg");
const client = new pg.Client(
  "postgres://postgres:nino@localhost:5432/ice_cream_db"
);

module.exports = { express, client };