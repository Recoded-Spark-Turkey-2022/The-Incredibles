import React from "react";
import renderer from "react-test-renderer";
import About from "../About";

describe("Jest Snapshot testing suite", () => {
    it("Matches DOM Snapshot", () => {
      const domTree = renderer.create(<About />).toJSON();
      expect(domTree).toMatchSnapshot();
    });
  });