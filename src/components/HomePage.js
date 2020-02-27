import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import iconBitcoin from "../../assets/Bitcoin Icon.svg";
import iconEthereum from "../../assets/Ethereum Icon.svg";
import iconLitecoin from "../../assets/Litecoin Icon.svg";

const HomePage = () => {
  return (
    <Layout pageTitle="Overview">
      <div className="cards">
        <Link to="/currency/bitcoin" className="card">
          <div className="card-thumbnail">
            <img
              src={iconBitcoin}
              alt="bitcoin-icon"
              width="150px"
              height="150px"
            />
          </div>
        </Link>
        <Link to="/currency/ethereum" className="card">
          <div className="card-thumbnail">
            <img
              src={iconEthereum}
              alt="ethereum-icon"
              width="150px"
              height="150px"
            />
          </div>
        </Link>
        <Link to="/currency/litecoin" className="card">
          <div className="card-thumbnail">
            <img
              src={iconLitecoin}
              alt="litecoin-icon"
              width="150px"
              height="150px"
            />
          </div>
        </Link>
      </div>
    </Layout>
  );
};

export default HomePage;
