#!/usr/bin/env node

const { exec } = require("child_process");

exec("ssh -t dokku@osa.cubetiqs.com ps:report", (err, stdout, stderr) => {
  if (err) {
    console.error("command error");
    return;
  }
  console.log("Std out", stdout);
});
