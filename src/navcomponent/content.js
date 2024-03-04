import React from "react";
import ReactDOM from "react-dom";

function appendHelloWorld() {
  const element = "hel";
  document.getElementById("p1").innerHTML = element;
}

export { appendHelloWorld };
