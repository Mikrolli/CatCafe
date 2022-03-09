import React from "react";
import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";
import MainPage from "../../pages/main-page/main-page";
import { Main } from "./styles";

//Обертка для контента страницы
function PageWrapper({ childern, ...prop }) {
  return (
    <>
    <Header/>
      <Main>
        <MainPage {...prop} />
      </Main>
    <Footer/>
    </>
  );
}

export default PageWrapper;