import { render, screen } from "../../../../../testing/CustomRender/CustomRender";
import BackIcon from "..";

describe("BackIcon Component", () => {
  it("should render the BackIcon component", () => {
    render(<BackIcon />);

    const svgElement = screen.getByLabelText("Back icon");
    expect(svgElement).toBeInTheDocument();
  });
});
