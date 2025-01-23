import { describe, it, expect, vi } from "vitest";
import { screen, fireEvent, render } from "../../../testing/CustomRender/CustomRender"; // customRender en test-utils
import TableLine from "..";

const mockOnClick = vi.fn();

describe("TableLine Component", () => {
  it("renders the table line with the provided elements", () => {
    const elements = ["Item 1", "Item 2", "Item 3"];

    render(<TableLine elements={elements} onClick={mockOnClick} />);

    elements.forEach((element) => {
      expect(screen.getByText(element)).toBeInTheDocument();
    });
  });

  it("calls onClick when the table line is clicked", () => {
    const elements = ["Click Me"];

    render(<TableLine elements={elements} onClick={mockOnClick} />);

    const tableLine = screen.getByText("Click Me");
    fireEvent.click(tableLine);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
