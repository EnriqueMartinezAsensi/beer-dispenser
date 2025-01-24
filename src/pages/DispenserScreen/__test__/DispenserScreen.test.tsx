import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "../../../testing/CustomRender/CustomRender";
import userEvent from "@testing-library/user-event";
import DispenserScreen from "..";
import * as apiDispenser from "../../../api/apiDispenser";

describe("DispenserScreen Component", () => {
  const mockManageDispenser = vi.fn();

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
    await userEvent.pointer({ target: button, keys: "[MouseLeft]" });

    await waitFor(() => {
      expect(mockManageDispenser).toHaveBeenCalledWith({ status: "open", updated_at: expect.any(String) }, "123");
    });
  });

  it("calls manageDispenser with status 'close' on mouse up", async () => {
    render(<DispenserScreen />);

    const button = screen.getByText("Dispense");
    await userEvent.pointer({ target: button, keys: "[MouseLeft]" });

    await waitFor(() => {
      expect(mockManageDispenser).toHaveBeenCalledWith({ status: "close", updated_at: expect.any(String) }, "123");
    });
  });

  it("handles errors gracefully", async () => {
    mockManageDispenser.mockRejectedValueOnce(new Error("Network error"));

    render(<DispenserScreen />);

    const button = screen.getByText("Dispense");
    await userEvent.click(button, {});

    await waitFor(() => {
      expect(mockManageDispenser).toHaveBeenCalled();
      expect(screen.getByText("Dispense")).toBeInTheDocument();
    });
  });
});
