import React from "react";
import { render } from "@testing-library/react";
import Search from "./Search";

describe("Search tests", () => {
  it("should render", () => {
    expect(render(<Search />)).toBeTruthy();
  });
});
