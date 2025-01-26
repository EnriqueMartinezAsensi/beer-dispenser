import { render, screen } from "../../../testing/CustomRender/CustomRender";
import ErrorPage from "..";

describe("ErrorPage Component", () => {
  it("renders ErrorPage", () => {
    render(<ErrorPage />);
    expect(screen.getByText("Error")).toBeInTheDocument();
  });
});
