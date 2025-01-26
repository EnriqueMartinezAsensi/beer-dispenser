import { render, screen } from "../../../../../testing/CustomRender/CustomRender";
import BeerIcon from "..";

describe("BackIcon Component", () => {
  it("should render the BackIcon component", () => {
    render(<BeerIcon />);

    const svgElement = screen.getByLabelText("Beer icon");
    expect(svgElement).toBeInTheDocument();
  });
});
