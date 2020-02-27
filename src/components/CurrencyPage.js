import React from "react";
import PropTypes from "prop-types";
import Layout from "./Layout";
import { insertString } from "../utils/StringHelper";
import data from "../../data/20180507.json";

class CurrencyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCurrency: null,
      lowestQuote: null,
      highestQuote: null,
      profit: 0
    };
  }

  componentDidMount() {
    const currencyId = this.props.match.params.id;

    for (let index in data) {
      if (Object.prototype.hasOwnProperty.call(data[index], "currency")) {
        if (data[index]["currency"] === currencyId.toUpperCase()) {
          this.setState({
            currentCurrency: data[index]["quotes"]
          });

          this.getProfit(data[index]["quotes"]);
        }
      }
    }
  }

  getProfit(quotes) {
    const highestPrice = this.getHighestQuote(quotes);
    const lowestPrice = this.getLowestQuote(quotes);
    const profit = Number(highestPrice) - Number(lowestPrice);
    this.setState({
      profit: profit.toFixed(2)
    });
  }

  getHighestQuote(quotes) {
    let highestPrice = 0;
    let highestQuote = {};
    for (let index in quotes) {
      if (quotes[index].price > highestPrice) {
        highestPrice = quotes[index].price;
        highestQuote = quotes[index];
      }
    }
    this.setState({
      highestQuote
    });
    return highestPrice;
  }

  getLowestQuote(quotes) {
    let lowestPrice = 0;
    let lowestQuote = {};
    for (let index in quotes) {
      if (index === "0") {
        lowestPrice = quotes[index].price;
      }
      if (quotes[index].price < lowestPrice) {
        lowestPrice = quotes[index].price;
        lowestQuote = quotes[index];
      }
    }
    this.setState({
      lowestQuote
    });
    return lowestPrice;
  }

  render() {
    const currencyType = this.props.match.params.id;
    const currencyName = this.props.match.params.name;
    const { currentCurrency, lowestQuote, highestQuote, profit } = this.state;
    return (
      <Layout pageTitle={currencyType}>
        <div className="paper">
          <h3 id="title">{currencyName} Today</h3>
          {currentCurrency !== null &&
            currentCurrency.map(item => {
              return (
                <div className="mini-card" key={item.time}>
                  <span className="left">
                    {insertString(item.time, 2, ":")}
                  </span>
                  <span className="right">$ {item.price}</span>
                </div>
              );
            })}
          <h3>Profit</h3>
          <div className="mini-card">
            {lowestQuote !== null && (
              <>
                <div className="row-label">
                  <p>Buy</p>
                </div>
                <div className="row">
                  <span className="left">
                    {insertString(lowestQuote.time, 2, ":")}
                  </span>
                  <span className="right">$ {lowestQuote.price}</span>
                </div>
              </>
            )}
            {highestQuote !== null && (
              <>
                <div className="row-label">
                  <p>Sell</p>
                </div>
                <div className="row">
                  <span className="left">
                    {insertString(highestQuote.time, 2, ":")}
                  </span>
                  <span className="right">$ {highestQuote.price}</span>
                </div>
              </>
            )}
            {profit > 0 && (
              <>
                <div className="row-label row-total">
                  <p>Profit</p>
                </div>
                <div className="total">
                  <p>$ {profit}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </Layout>
    );
  }
}

CurrencyPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string
    })
  }).isRequired
};

export default CurrencyPage;
