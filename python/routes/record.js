const express = require('express');
const app = express();

let {PythonShell} = require('python-shell');
var readline = require('readline-sync');

app.get('/', function (req,res){
  res.send('API F1');
});

app.get('/api/f1/gear/:year/:week/:ses/:driver' ,function (_req, res) {

    let year = _req.params.year;
    let week = _req.params.week;
    let ses = _req.params.ses;
    let driver = _req.params.driver;

    let opt = {
        args:[year,week,ses,driver]
    }

    PythonShell.run("app3.py",opt,function(err,results){
        if(err){
            console.log(err)
        } else {
            res.send(results)
            console.log(results)
            console.log("Python script finished")
        }
    })
    
  });

  app.get('/api/f1/constructor/:year', function (_req, res) {

    let year = _req.params.year;

    let opt = {
        args:[year]
    }

    PythonShell.run("app2.py",opt,function(err,results){
        if(err){
            console.log(err)
        } else {
            res.send(results)
            console.log(results)
            console.log("Python script finished")
        }
    })
    
  });


module.exports = app;