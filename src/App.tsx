import Amplify from "aws-amplify";
import React, { lazy, useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/inject-style";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import HorizontalBar from "./components/HorizontalBar/HorizontalBar";
import SideNav from "./components/SideNav/SideNav";
import useEagerConnect from "./hooks/useEagerConnect";
import "./style/shared.css";
import updateRedirectURL from "./utils/updateRedirectURL";
import SuspenseWithChunkError from "./views/SuspendWithChunkError";
import PageLoader from "./views/SuspendWithChunkError/PageLoader";
Amplify.configure(window.location.hostname);
const Home = lazy(() => import("./views/Home"));
const Blogs = lazy(() => import("./views/Blogs"));
const HiddingCode = lazy(() => import("./views/Blogs/components/HiddingCode"));
const NotFound = lazy(() => import("./views/NotFound"));
const Profile = lazy(() => import("./views/Profile"));
const PhisingAttack = lazy(
  () => import("./views/Blogs/components/PhisingAttack")
);
const App = () => {
  // GetCognitoUser().then((t) => {
  //   console.log(t);
  
  //   // console.log(auth)
  // });
  const [show, setShow] = React.useState(window.innerWidth > 1000);
  useEffect(() => {
    console.warn = () => null;
  }, []);
  useEagerConnect();
  return (
    <div className="commonText display">
      <section className={`${show ? "sideNav" : "hideLower"}`}>
        <p className="_glowHover expandable" onClick={() => setShow(!show)}>
          &#9776;
        </p>
      </section>

      <HorizontalBar className="topbar" key="horizontalBar"></HorizontalBar>

      <section className={`${show ? "sideNavLower" : "hide"}`}>
        <SideNav key="sideNav" />
      </section>
      <article className={`${show ? "" : "articleFull"}`}>
        <p className="glow App-header">Reliability Coin</p>
        <div className="margins">
          <HashRouter>
            <SuspenseWithChunkError fallback={<PageLoader />}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/reentry" exact component={HiddingCode} />
                <Route path="/blogs" component={Blogs} />
                <Route path="/phising" component={PhisingAttack} />
                <Route path="/profile" component={Profile} />

                <Route component={NotFound} />
              </Switch>
            </SuspenseWithChunkError>
            <ToastContainer />
          </HashRouter>
        </div>
      </article>
    </div>
  );
};

export default React.memo(App);
// https://docs.pancakeswap.finance/hiring/become-a-chef/frontend-software-engineer-javascript-typescript-react
