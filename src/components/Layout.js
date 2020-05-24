import React from 'react';
import Navbar from './Navbar'

const Layout = ({ children }) => (
  <div>
    <div>Layout here</div>
    <Navbar />
    <div>{children}</div>
  </div>
)
export default Layout;