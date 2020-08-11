#!/usr/bin/env node

const { exec } = require("child_process");
const chalk = require("chalk");
const boxen = require("boxen");
const yargs = require("yargs");

const greeting = chalk.white.bold("Welcome to CUBETIQ App Deployment!");

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
  backgroundColor: "#555555",
};
const msgBox = boxen(greeting, boxenOptions);

console.log(msgBox);

const options = yargs.usage("Usage: dokku option").option("cmd", {
  alias: "command",
  describe: "Dokku command",
  type: "string",
  demandOption: false,
}).argv;

const cmd = options.cmd;

if (cmd) {
  exec(`ssh -t dokku@osa.cubetiqs.com ${cmd}`, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
} else {
  exec(`ssh -t dokku@osa.cubetiqs.com`, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
  return;
}
