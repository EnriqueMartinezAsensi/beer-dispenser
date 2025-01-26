import { render, screen } from "../../../../testing/CustomRender/CustomRender";
import ErrorMessage from "..";

describe("ErrorPage Component", () => {
  it("renders ErrorPage", () => {
    const error = new Error("Error");
    render(<ErrorMessage message={error.message} />);
    expect(screen.getByText("Error")).toBeInTheDocument();
  });
});
