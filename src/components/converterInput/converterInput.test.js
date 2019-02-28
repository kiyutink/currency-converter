import React from "react";
import { ConverterInput } from "./converterInput";
import { Enzyme } from "../../enzyme";

describe("<ConverterInput />", () => {
  it("Renders an input with passed down value", () => {
    const wrapper = Enzyme.shallow(<ConverterInput value="1111" />);

    expect(wrapper.find("input").props().value).toEqual("1111");
  });

  it("Filters the value", () => {
    const onChange = jest.fn();
    const wrapper = Enzyme.shallow(
      <ConverterInput value="1111" onChange={onChange} />
    );

    wrapper.find("input").simulate("change", { target: { value: "123abc" } });
    expect(onChange).toHaveBeenCalledWith("123");
  });
});
