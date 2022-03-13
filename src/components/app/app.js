import React from "react";
import PageWrapper from "../../components/layout/page-wrapper/page-wrapper";
import gallery from "../../mocks/gallery";
import buyOptions from "../../mocks/buyOptions";
import starList from "../../mocks/starList";
import { GlobalStyle } from "./styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppRoute } from "../../const";
import BuyPage from "../pages/buy-page/buy-page";
import MainPage from "../pages/main-page/main-page";
import ScrollTop from "../ui/scroll-top/scroll-top";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Switch>
          <Route exact path={AppRoute.MAIN}>
            <PageWrapper pageUrl={AppRoute.MAIN}>
              <MainPage stars={starList} />
            </PageWrapper>
          </Route>
          <Route exact path={AppRoute.BUY}>
            <PageWrapper pageUrl={AppRoute.BUY}>
              <BuyPage slides={gallery} buyOptions={buyOptions} />
            </PageWrapper>
          </Route>
        </Switch>
      </Router>
    </>
  );
}
