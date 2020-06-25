
const fs = require("fs");

var ncp = require("ncp").ncp;
const path = require('path');


const client = process.argv[2];
const environment = process.argv[3]

const envFileContent = require(`../Flavors/${client}/environments/${environment}`);

fs.writeFileSync("src/API/env.json", JSON.stringify(envFileContent, undefined, 2));

ncp(`Flavors/${client}/assets`, `src/assets`, function (err) {
    if (err) {

        return console.error(err);
    }
    console.log('done!');
});

