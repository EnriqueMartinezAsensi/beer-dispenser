import { render, screen } from "../../../../../testing/CustomRender/CustomRender";
import BackIcon from "..";

describe("BackIcon Component", () => {
  it("should render the BackIcon component", () => {
    render(<BackIcon size='50' />);

    const svgElement = screen.getByLabelText("Back icon");
    expect(svgElement).toBeInTheDocument();
  });
});
