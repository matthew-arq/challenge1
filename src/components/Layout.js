import React from "react";
import PropTypes from "prop-types";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <div className="header">
        <div className="container">
          <h2 className="page-title">{pageTitle}</h2>
        </div>
      </div>
      <div className="body">
        <div className="container">{children}</div>
      </div>
    </>
  );
};

Layout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Layout;
