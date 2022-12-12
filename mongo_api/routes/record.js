const express = require('express');

const recordRoutes = express.Router();

const dbo = require('../db/conn');

recordRoutes.route('/api/fifa/all').get(async function (_req, res) {
  const dbConnect = dbo.getDb();

  dbConnect
    .collection('fifa')
    .find({})
    .limit(20000)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching listings!');
      } else {
        res.json(result);
      }
    });
});

recordRoutes.route('/api/nba/all').get(async function (_req, res) {
  const dbConnect = dbo.getDb();

  dbConnect
    .collection('nba')
    .find({})
    .limit(20000)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching listings!');
      } else {
        res.json(result);
      }
    });
});

recordRoutes.route('/api/fifa/club/:club').get(async function (_req, res) {
    const dbConnect = dbo.getDb();
    const listingQuery = { 'club_name': ""+_req.params.club+"" };
    console.log(_req.params.club);
    console.log(listingQuery);
    dbConnect
      .collection('fifa')
      .find(listingQuery)
      .limit(20000)
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send('Error fetching listings!');
        } else {
          res.json(result);
        }
      });
  });


module.exports = recordRoutes;
