#!/usr/bin/env node
const {
  cyanBright,
  yellowBright,
  blueBright,
  magenta,
  green,
  yellow,
  red,
  white,
  dim,
  underline,
  bgYellowBright,
  redBright,
  bgCyan,
} = require("colorette");

const newline = "\n";
const linebreak = " ---------------------------";
const head = `${`〽️ 🥨 🌎 ${"John Corser"} 🚀 🏈 🤙`}`;
const work = `${"🏢:"}  ${dim(white(`Amazon, Software Development Engineer`))}`;
const twitter = `${"🐦:"}  ${cyanBright("https://twitter.com/johnpcorser")}`;
const instagram = `${"📸:"}  ${magenta("https://instagram.com/johnpc")}`;
const github = `${"🐙:"}  ${green("https://github.com/johnpc")}`;
const snapchat = `${"👻:"}  ${yellowBright("https://jpc.io/img/snapcode.png")}`;
const linkedin = `${"💼:"}  ${red("https://linkedin.com/in/johncorser")}`;
const web = `${"🤖:"}  ${blueBright("https://jpc.io")}`;
const blockchain = `₿: ${redBright("https://johnpc.eth.link")}`
const card = `${"📇:"}  ${white("npx johnpc")}`;
const output =
  linebreak +
  newline +
  head +
  newline +
  linebreak +
  newline +
  work +
  newline +
  twitter +
  newline +
  instagram +
  newline +
  snapchat +
  newline +
  github +
  newline +
  linkedin +
  newline +
  web +
  newline +
  blockchain +
  newline +
  newline +
  card;

console.log(output);
