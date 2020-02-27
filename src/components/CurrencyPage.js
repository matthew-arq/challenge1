import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Layout from "./Layout";

class CurrencyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currencyType: "" };
  }

  componentDidMount() {
    let { id } = useParams();
  }

  render() {
    <Layout></Layout>;
  }
}

export default CurrencyPage;
