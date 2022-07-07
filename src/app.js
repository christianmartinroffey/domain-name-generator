/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let tld = [".com", ".net"];

//let randomDomainName = [];

window.onload = () => {
  document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("domain_name").innerHTML = generateRandomDomain();
  });
};

const generateRandomDomain = () => {
  let randomDomain = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < tld.length; l++) {
          randomDomain =
            randomDomain + pronoun[i] + adj[j] + noun[k] + tld[l] + "</br>";
        }
      }
    }
  }
  return randomDomain;
};
