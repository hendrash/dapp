import React, { lazy, useState } from "react";
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
  // let show:Boolean=window.innerWidth>1000;
  const [show, setShow]=React.useState(window.innerWidth>1000)

  return (
    <div className="commonText display">
      <section className={`${show?'sideNav':'hideLower'}`} >
      <HorizontalBar key="{item}" onClick={()=>{
       setShow(!show)
      }}></HorizontalBar>
</section>
      {
      <section className={`${show?'sideNavLower':'hide'}`}  >
        <SideNav key="{item}"/>
      </section>}
      <article className={`${show?'':'articleFull'}`}>
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
