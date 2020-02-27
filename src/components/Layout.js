import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logoBitcoin from "../../assets/Bitcoin Logo.png";
import logoEthereum from "../../assets/Ethereum Logo.png";
import logoLitecoin from "../../assets/Litecoin Logo.png";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <div className="header">
        <div className="container">
          {pageTitle !== "overview" && (
            <Link to="/" className="back">
              Back
            </Link>
          )}
          {{
            btc: (
              <img
                src={logoBitcoin}
                alt="bitcoin-logo"
                width="20%"
                height="20%"
              />
            ),
            eth: (
              <img
                src={logoEthereum}
                alt="ethereum-logo"
                width="20%"
                height="20%"
              />
            ),
            ltc: (
              <img
                src={logoLitecoin}
                alt="litecoin-logo"
                width="20%"
                height="20%"
              />
            )
          }[pageTitle] || <h2 className="page-title">{pageTitle}</h2>}
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
