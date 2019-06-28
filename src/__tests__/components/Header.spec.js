import React from "react";
import { mount } from "enzyme";

import Header from "../../components/Header";

describe("component must be tested Header", () => {
  it("should render the Logo", () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find("img").exists()).toBe(true);
  });
});
