import React from "react";
import { appendHelloWorld } from "./content";
import Button from "react-bootstrap/Button";

function Nav() {
  React.useEffect(() => {
    appendHelloWorld();
  }, []);

  return (
    <>
      <header>
        <div>
          <Button variant="primary" id="p1"></Button>
        </div>
      </header>
      <div>hello</div>
    </>
  );
}

export default Nav;
