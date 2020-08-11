#!/usr/bin/env node

const { exec } = require("child_process");
const chalk = require("chalk");
const boxen = require("boxen");
const yargs = require("yargs");

const greeting = chalk
  .hex("#0fcbff")
  .bold("Welcome to CUBETIQ App Deployment!");

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
  backgroundColor: "#555555",
};

console.log(boxen(greeting, boxenOptions));

const options = yargs
  .usage("Usage: cubetiq-app dokku")
  .option("dokku", {
    describe: "Dokku command",
    type: "string",
    demandOption: false,
  })
  .option("dokku help", {
    describe: "Dokku help command",
    type: "string",
    demandOption: false,
  }).argv;

const cmd = options.dokku;
const help = options["dokku help"];

if (cmd) {
  exec(`ssh -t dokku@osa.cubetiqs.com ${cmd}`, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
} else {
  if (help) {
    exec(`ssh -t dokku@osa.cubetiqs.com`, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(stdout);
    });
  } else {
    const errMsg = chalk.red("no commd found!");
    console.error(errMsg);
  }
  return;
}
