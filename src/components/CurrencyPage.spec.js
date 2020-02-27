import React from "react";
import { shallow } from "enzyme";
import CurrencyPage from ".//CurrencyPage";

describe("<CurrencyPage />", () => {
  it("should be bitcoin page'", async () => {
    const wrapper = shallow(
      <CurrencyPage
        required={true}
        match={{ params: { name: "bitcoin", id: "btc" }, isExact: true }}
      />
    );
    await wrapper.instance().busy;
    const actual = wrapper.find("#title").text();
    const expected = "bitcoin Today";

    expect(actual).toEqual(expected);
  });

  it("should be ethereum page'", async () => {
    const wrapper = shallow(
      <CurrencyPage
        required={true}
        match={{ params: { name: "ethereum", id: "eth" }, isExact: true }}
      />
    );
    await wrapper.instance().busy;
    const actual = wrapper.find("#title").text();
    const expected = "ethereum Today";

    expect(actual).toEqual(expected);
  });

  it("should be litecoin page'", async () => {
    const wrapper = shallow(
      <CurrencyPage
        required={true}
        match={{ params: { name: "litecoin", id: "ltc" }, isExact: true }}
      />
    );
    await wrapper.instance().busy;
    const actual = wrapper.find("#title").text();
    const expected = "litecoin Today";

    expect(actual).toEqual(expected);
  });
});
