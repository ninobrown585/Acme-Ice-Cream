const express = require("express");
const pg = require("pg");
const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/test_db"
);

module.exports = { express, client };