import React, { lazy } from "react";
import { Route, Router, Switch, HashRouter } from "react-router-dom";
import "./App.css";
import HorizontalBar from "./components/HorizontalBar/HorizontalBar";
import SideNav from "./components/SideNav/SideNav";
// import history from "./routerHistory";
import SuspenseWithChunkError from "./views/SuspendWithChunkError";
import { PageLoader } from "./views/SuspendWithChunkError/PageLoader";
const Home = lazy(() => import("./views/Home"));
const Blogs = lazy(() => import("./views/Blogs"));
const HiddingCode = lazy(() => import("./views/Blogs/components/HiddingCode"));
const NotFound = lazy(() => import("./views/NotFound"));

function App() {
  return (
    <div className="commonText display">
      <HorizontalBar ></HorizontalBar>
      <section className="sideNav">
        <SideNav />
      </section>
      <article>
        <p className="glow App-header">Solidity Tricks</p>
        <div className="margins">
          <HashRouter>
            <SuspenseWithChunkError fallback={<PageLoader />}>
              <Switch>
                <Route path="/" exact component={Blogs} />
                <Route path="/blogs" component={HiddingCode} />
                <Route component={NotFound}></Route>
              </Switch>
            </SuspenseWithChunkError>
          </HashRouter>
        </div>
      </article>
    </div>
  );
}

export default React.memo(App);
// https://docs.pancakeswap.finance/hiring/become-a-chef/frontend-software-engineer-javascript-typescript-react
