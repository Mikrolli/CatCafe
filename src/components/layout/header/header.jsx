import React from "react";
import Logo from "../../ui/logo/logo";
import Nav from "../../layout/nav/nav";
import { StyledSection } from "./styles";

// Шапка страницы
function Header({
  pageUrl // url страницы
}) {
  return (
    <StyledSection as="header">
      <Logo />
      <Nav pageUrl={pageUrl} />
    </StyledSection>
  );
}

export default Header;
