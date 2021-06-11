import React from "react";
import { render } from "@testing-library/react";
import Cards from "./Cards";

describe("Cards tests", () => {
  it("should render", () => {
    expect(render(<Cards />)).toBeTruthy();
  });
});
