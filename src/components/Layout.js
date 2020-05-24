import React from 'react';
import Helmet from 'react-helmet';
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + WordPress" />
    <Navbar />
    <div>{children}</div>
  </div>
)
export default Layout;