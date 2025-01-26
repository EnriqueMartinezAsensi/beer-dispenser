import { describe, it, expect } from "vitest";
import { render, screen } from "../../../testing/CustomRender/CustomRender";
import MenuBar from "..";

describe("MenuBar Component", () => {
  it("renders the menu bar", async () => {
    render(<MenuBar />);

    const svgElement = screen.getByLabelText("Beer icon");
    expect(svgElement).toBeInTheDocument();
  });
});
