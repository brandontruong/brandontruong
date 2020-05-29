import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
// import github from '../img/github-icon.svg';
import logo from '../img/logo.png';
import brandontruong from '../img/brandontruong.jpeg';

const Nav = styled.nav`
  display: flex;
  background-color: #000;
`;

const NavItem = styled(Link)`
  padding: 1em;
  margin: 0 0.2em;
  color: #fff;
  text-decoration: none;
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 4px;
  }
  &[aria-current="page"] {
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 4px;
  }
`;

const LogoNavItem = styled(NavItem)`
  display: block;
  &:hover {
    background-color: transparent;
  }
`;

const Heading = styled.div`
  h1 {
    font-size: 1.5em;
    line-height: 1.5em;
  }
`;

const RightColumn = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 3em;
`;

const LeftColumn = styled.div``;

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPage(sort: { fields: wordpress_id }, limit: 5) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `}
    render={(data) => (
      <Nav>
        <LeftColumn>
          <LogoNavItem to="/">
            <Heading>
              <h1>Brandon Truong</h1>
              <sub>Work Porfolio</sub>
              {/* <img src={brandontruong} alt="Brandon Truong" /> */}
            </Heading>
          </LogoNavItem>
        </LeftColumn>

        <RightColumn>
          {data.allWordpressPage.edges.map((edge) => (
            <NavItem
              to={edge.node.slug}
              key={edge.node.slug}
            >
              {edge.node.title}
            </NavItem>
          ))}
        </RightColumn>

      </Nav>
    )}
  />
);

export default Navbar;
