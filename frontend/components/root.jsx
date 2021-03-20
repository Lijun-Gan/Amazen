import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./app";
// import BackToTop from './back_to_top';


const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
        {/* <BackToTop /> */}
        <App />
     </HashRouter>
  </Provider>
);

export default Root;