import React from "react";
import Button from "../../ui/button/button";

function Nav() {
  return (
    <nav>
      <Button minWidth={260} link="/bay">
        Купить билет
      </Button>
    </nav>
  );
}

export default Nav;
