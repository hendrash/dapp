import React, { lazy } from "react";
import { Route, Router, Switch, HashRouter } from "react-router-dom";
import "./App.css";
import SideNav from "./components/SideNav/SideNav";
import history from "./routerHistory";
// import NotFound from "./views/NotFound";
// import Blogs from "./views/Blogs/components";
import SuspenseWithChunkError from "./views/SuspendWithChunkError";
import { PageLoader } from "./views/SuspendWithChunkError/PageLoader";

const Home = lazy(() => import("./views/Home"));
const Blogs = lazy(() => import("./views/Blogs"));
const NotFound = lazy(() => import("./views/NotFound"));

function App() {
  return (
    //   <Box className="boxStyle">
    //     <span >Swap Charts </span>
    //   <MdShowChart/>
    //      </Box>

    <div className="commonText">
      <section className="sideNav">
        <SideNav />
      </section>


    <article >
      <p className="glow App-header">Solidity Tricks</p>
      <HashRouter>
      {/* <Router history={history}> */}
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <Switch>
            <Route path="/" exact component={Blogs}/>
            { console.log("Prop")}
            <Route path="/blogs" component={Home}/>
            <Route component={NotFound}></Route>
          </Switch>
        </SuspenseWithChunkError>
</HashRouter>
      {/* </Router> */}
</article>
    </div>
  );
}

export default React.memo(App);
// https://docs.pancakeswap.finance/hiring/become-a-chef/frontend-software-engineer-javascript-typescript-react
