import React from "react";
import { appendHelloWorld } from "./content";

function Nav() {
  React.useEffect(() => {
    appendHelloWorld();
  }, []);

  return (
    <header>
      <p id="p1"></p>
    </header>
  );
}

export default Nav;
