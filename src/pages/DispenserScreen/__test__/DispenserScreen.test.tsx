import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "../../../testing/CustomRender/CustomRender";
import userEvent from "@testing-library/user-event";
import DispenserScreen from "..";

const mockManageDispenser = vi.hoisted(() => vi.fn().mockResolvedValue({}));

describe("DispenserScreen Component", () => {
  beforeEach(() => {
    vi.mock("react-router", async () => ({
      ...(await vi.importActual("react-router")),
      useParams: () => ({ id: "123" }),
    }));
    vi.mock("../../../api/apiDispenser", async () => ({
      ...(await vi.importActual("../../../api/apiDispenser")),
      manageDispenser: mockManageDispenser,
    }));
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("detects a mobile device", () => {
    vi.stubGlobal(
      "matchMedia",
      vi.fn((query) => ({
        matches: query === "(pointer: coarse)",
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }))
    );

    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    expect(isMobile).toBe(true);
  });

  it("detects a laptop", () => {
    vi.stubGlobal(
      "matchMedia",
      vi.fn((query) => ({
        matches: query === "(pointer: fine)",
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }))
    );

    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    expect(isMobile).toBe(false);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the correct title with the dispenser ID", async () => {
    render(<DispenserScreen />);

    expect(await screen.findByText("Dispenser Screen: 123")).toBeInTheDocument();
  });

  it("calls manageDispenser with status 'open' on mouse down and 'close' on mouse up", async () => {
    mockManageDispenser.mockRejectedValueOnce({});

    render(<DispenserScreen />);

    const button = await screen.findByText("Dispense");
    await userEvent.click(button);

    await waitFor(() => {
      expect(mockManageDispenser).toHaveBeenCalledWith({ status: "open", updated_at: expect.any(String) }, "123");
      expect(mockManageDispenser).toHaveBeenCalledWith({ status: "close", updated_at: expect.any(String) }, "123");
    });
  });

  it("handles errors gracefully", async () => {
    mockManageDispenser.mockRejectedValueOnce(new Error("Network error"));

    render(<DispenserScreen />);

    const button = screen.getByText("Dispense");
    await userEvent.click(button, {});

    await waitFor(async () => {
      expect(mockManageDispenser).toHaveBeenCalled();
      expect(await screen.findByText("Network error")).toBeInTheDocument();
    });
  });
});
