import React from "react";
import ReactDOM from "react-dom";

function appendHelloWorld() {
  const element = "Hello";
  document.getElementById("p1").innerHTML = element;
}

export { appendHelloWorld };
