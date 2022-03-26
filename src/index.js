import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from 'react-redux';
import * as serviceWorker from "./serviceWorker";
import store from './app/store'; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Blog,
  Posts,
  Post,
} from "./components";

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,
  </Provider>,
  

  document.getElementById("root")
);

serviceWorker.unregister();
