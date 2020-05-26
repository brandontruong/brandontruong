import React from 'react';
import Helmet from 'react-helmet';
import Navbar from './Navbar';
import './all.sass';

const Layout = ({ children }) => (
  <div>
    <Helmet title="Brandon Truong | Home" />
    <Navbar />
    <div>{children}</div>
  </div>
)
export default Layout;
