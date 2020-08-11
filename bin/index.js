#!/usr/bin/env node

const { exec } = require("child_process");
const chalk = require("chalk");
const boxen = require("boxen");

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

exec("ssh -t dokku@osa.cubetiqs.com ps:report", (err, stdout, stderr) => {
  if (err) {
    console.error("command error");
    return;
  }
  console.log("Std out", stdout);
});
