import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "../../../testing/CustomRender/CustomRender";
import DispenserScreen from "..";
import * as apiDispenser from "../../../api/apiDispenser";

const mockManageDispenser = vi.fn();

describe("DispenserScreen Component", () => {
  beforeEach(() => {
    vi.mock("react-router", () => ({
      ...vi.importActual("react-router"),
      useParams: () => ({ id: "123" }),
    }));

    vi.spyOn(apiDispenser, "manageDispenser").mockImplementation(mockManageDispenser);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the correct title with the dispenser ID", () => {
    render(<DispenserScreen />);

    expect(screen.getByText("DISPENSER SCREEN: 123")).toBeInTheDocument();
  });

  it("calls manageDispenser with status 'open' on mouse down", async () => {
    render(<DispenserScreen />);

    const button = screen.getByText("Dispense");
    fireEvent.mouseDown(button);

    await waitFor(() => {
      expect(mockManageDispenser).toHaveBeenCalledWith({ status: "open", updated_at: expect.any(String) }, "123");
    });

    expect(mockManageDispenser).toHaveBeenCalledTimes(1);
  });

  it("calls manageDispenser with status 'close' on mouse up", async () => {
    render(<DispenserScreen />);

    const button = screen.getByText("Dispense");
    fireEvent.mouseUp(button);

    await waitFor(() => {
      expect(mockManageDispenser).toHaveBeenCalledWith({ status: "close", updated_at: expect.any(String) }, "123");
    });

    expect(mockManageDispenser).toHaveBeenCalledTimes(1);
  });

  it("displays 'Processing...' while a request is in progress", async () => {
    mockManageDispenser.mockImplementationOnce(() => new Promise((resolve) => setTimeout(resolve, 100)));

    render(<DispenserScreen />);

    const button = screen.getByText("Dispense");
    fireEvent.mouseDown(button);

    expect(screen.getByText("Processing...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Dispense")).toBeInTheDocument();
    });
  });

  it("handles errors gracefully", async () => {
    mockManageDispenser.mockRejectedValueOnce(new Error("Network error"));

    render(<DispenserScreen />);

    const button = screen.getByText("Dispense");
    fireEvent.mouseDown(button);

    await waitFor(() => {
      expect(mockManageDispenser).toHaveBeenCalled();
      expect(screen.getByText("Dispense")).toBeInTheDocument();
    });
  });
});
