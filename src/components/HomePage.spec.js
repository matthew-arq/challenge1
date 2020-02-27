import React from "react";
import { shallow } from "enzyme";
import HomePage from "./HomePage";

describe("<HomePage />", () => {
  it("should link to a bitcoin page", () => {
    const wrapper = shallow(<HomePage />);
    const actual = wrapper.findWhere(
      n => n.prop("to") === "/currency/bitcoin/btc"
    ).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it("should link to a ethereum page", () => {
    const wrapper = shallow(<HomePage />);
    const actual = wrapper.findWhere(
      n => n.prop("to") === "/currency/ethereum/eth"
    ).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it("should link to a litecoin page", () => {
    const wrapper = shallow(<HomePage />);
    const actual = wrapper.findWhere(
      n => n.prop("to") === "/currency/litecoin/ltc"
    ).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });
});
