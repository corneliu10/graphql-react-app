// Auto-generated do not edit

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from "react";
import renderer from "react-test-renderer";
import CustomTextField from "../CustomTextField";

describe("CustomTextField test", () => {
  it("CustomTextField should match snapshot", () => {
    const component = renderer.create(
      <CustomTextField field={{ name: "test" }} form={{ touched: {} }} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
