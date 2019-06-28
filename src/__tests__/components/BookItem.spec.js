import React from "react";
import { mount } from "enzyme";

import BookItem from "../../components/BookItem";

const mockBook = {
  title: "Teste"
};

describe("component must be tested BookItem", () => {
  it("should render the Image", () => {
    const wrapper = mount(<BookItem book={mockBook} />);
    expect(wrapper.find("img").exists()).toBe(true);
  });

  it("should render the Title", () => {
    const wrapper = mount(<BookItem book={mockBook} />);
    expect(wrapper.find("strong").exists()).toBe(true);
  });

  it("should render the Description", () => {
    const wrapper = mount(<BookItem book={mockBook} />);
    expect(wrapper.find("p").exists()).toBe(true);
  });
});
