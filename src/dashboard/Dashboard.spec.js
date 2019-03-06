import React from "react";
import renderer from "react-test-renderer";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

describe("matches snapshot", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Dashboard />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should render display and controls", () => {
    const { getByTestId } = render(<Dashboard />);

    const displayComponent = getByTestId(/display panel/i);
    const controlsComponent = getByTestId(/controls panel/i);

    expect(displayComponent).toBeInTheDocument();
    expect(controlsComponent).toBeInTheDocument();
  });
});
