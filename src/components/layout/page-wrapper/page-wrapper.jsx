import React from "react";
import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";
import { Main } from "./styles";

//Обертка для контента страниц
function PageWrapper({
  pageUrl, // навигация для шапки
  children // навигация
}) {
  return (
    <>
    <Header pageUrl={pageUrl} />
    <Main>{children}</Main>
    <Footer />
    </>
  );
}

export default PageWrapper;