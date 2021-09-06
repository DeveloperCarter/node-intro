const txtfile = "./one.txt";
const fs = require("fs");
const process = require("process");
const axios = require("axios");
function cat(path) {
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
}
cat(txtfile);

// -------------------------------------------------------------------------------------------
function cat(path) {
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
}
cat(txtfile);

const google = "http://google.com/";

async function webCat(url) {
  try {
    let response = await axios.get(url);
    console.log(response);
  } catch (err) {
    console.log(`Error fetching ${url}: ${err} `);
  }
}
webCat(google);
