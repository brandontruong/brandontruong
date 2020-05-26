import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Pagination = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext;

  return (
    <nav className="pagination" role="navigation">
      <div className="navbar navbar-menu">
        {previousPagePath && (
          <div className="navbar-item">
            <Link to={previousPagePath} rel="prev">
              Previous
            </Link>
          </div>
        )}
        {nextPagePath && (
          <div className="navbar-item">
            <Link to={nextPagePath} rel="next">
              Next
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

Pagination.propTypes = {
  pageContext: PropTypes.shape({
    previousPagePath: PropTypes.string,
    nextPagePath: PropTypes.string,
  }).isRequired,
};

export default Pagination;
