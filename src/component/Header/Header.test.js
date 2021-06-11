import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header tests", () => {
  it("should render", () => {
    expect(render(<Header />)).toBeTruthy();
  });
});
