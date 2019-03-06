import React from "react";
import renderer from "react-test-renderer";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import Display from "./Display";

describe("<Display />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Display />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('displays "Closed" if the closed prop is true', () => {
    // const closed = true;
    const { getByText } = render(<Display closed={true} />);
    const closedDisplay = getByText(/Closed/i);
    expect(closedDisplay).toBeInTheDocument();
  });
  
  it('displays "Open" if the closed prop is false', () => {
    const { getByText } = render(<Display closed={false} />);
    const openDisplay = getByText(/Open/i);
    expect(openDisplay).toBeInTheDocument();
  });
});
