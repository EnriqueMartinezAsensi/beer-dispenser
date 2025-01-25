import { render, screen } from "../../../../../testing/CustomRender/CustomRender";
import BurgerIcon from "..";

describe("BackIcon Component", () => {
  it("should render the BackIcon component", () => {
    render(<BurgerIcon size='60' active={true} />);

    const svgElement = screen.getByLabelText("Burger icon");
    expect(svgElement).toBeInTheDocument();
  });
});
