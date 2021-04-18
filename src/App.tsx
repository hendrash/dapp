import React, { lazy, useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import HorizontalBar from "./components/HorizontalBar/HorizontalBar";
import SideNav from "./components/SideNav/SideNav";
import useEagerConnect from "./hooks/useEagerConnect";
// import history from "./routerHistory";
import SuspenseWithChunkError from "./views/SuspendWithChunkError";
import PageLoader from "./views/SuspendWithChunkError/PageLoader";
import ToastListener from './components/ToastListener'

const Home = lazy(() => import("./views/Home"));
const Blogs = lazy(() => import("./views/Blogs"));
const HiddingCode = lazy(() => import("./views/Blogs/components/HiddingCode"));
const NotFound = lazy(() => import("./views/NotFound"));
const PhisingAttack= lazy(()=>import("./views/Blogs/components/PhisingAttack"));
const App=()=> {
  const [show, setShow]=React.useState(window.innerWidth>1000)
  useEffect(()=>{
    console.warn=()=>null
  },[])
  useEagerConnect()
  return (
    <div className="commonText display">
      <section className={`${show?'sideNav':'hideLower'}`} >
      <HorizontalBar key="horizontalBar" onClick={()=>{ setShow(!show) }}></HorizontalBar>
</section>
      
      <section className={`${show?'sideNavLower':'hide'}`}  >
        <SideNav key="sideNav"/>
      </section>
      <article className={`${show?'':'articleFull'}`}>
        <p className="glow App-header">Solidity Tricks</p>
        <div className="margins">
          <HashRouter>
            <SuspenseWithChunkError fallback={<PageLoader />}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/reentry" exact component={HiddingCode} />
                <Route path="/blogs" component={Blogs} />
                <Route path="/phising" component={PhisingAttack} />
                <Route component={NotFound}/>
              </Switch>
            </SuspenseWithChunkError>
            <ToastListener/>
          </HashRouter>
        </div>
      </article>
    </div>
  );
}

export default React.memo(App);


// https://docs.pancakeswap.finance/hiring/become-a-chef/frontend-software-engineer-javascript-typescript-react
