import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "../../../../testing/CustomRender/CustomRender";
import DispenserAdder from "..";

const mockFlow = "0.5";
const mockOnFlowChange = vi.fn();
const mockOnClick = vi.fn();

describe("DispenserAdder Component", () => {
  it("renders correctly with initial flow value", () => {
    render(<DispenserAdder flow={mockFlow} onFlowChange={mockOnFlowChange} onClick={mockOnClick} />);

    expect(screen.getByText("Dispenser Adder")).toBeInTheDocument();

    const input = screen.getByLabelText(/Flow/);
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(parseFloat(mockFlow));

    expect(screen.getByText("Add Dispenser")).toBeInTheDocument();
  });

  it("calls onFlowChange when input value changes", () => {
    render(<DispenserAdder flow={mockFlow} onFlowChange={mockOnFlowChange} onClick={mockOnClick} />);

    const input = screen.getByLabelText(/Flow/);

    fireEvent.change(input, { target: { value: "0.8" } });

    expect(mockOnFlowChange).toHaveBeenCalledWith("0.8");
  });

  it("calls onClick when the button is clicked", () => {
    render(<DispenserAdder flow={mockFlow} onFlowChange={mockOnFlowChange} onClick={mockOnClick} />);

    const button = screen.getByText("Add Dispenser");

    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
