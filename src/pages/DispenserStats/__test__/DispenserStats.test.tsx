import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "../../../testing/CustomRender/CustomRender";
import * as apiDispenser from "../../../api/apiDispenser";
import DispenserStats from "..";
import { GET_DISPENSER_USSAGE_MOCK } from "../../../api/__mocks__/apiDispenserMock";

describe("DispenserStats Component", () => {
  it("fetches and displays dispenser usage data for the given ID", async () => {
    vi.spyOn(apiDispenser, "getDispenserUsage").mockResolvedValue(GET_DISPENSER_USSAGE_MOCK);

    render(<DispenserStats />, { route: "admin/1" });

    await waitFor(() => {
      expect(screen.getByText("STATISTICS SCREEN: 1")).toBeInTheDocument();
      expect(screen.getByText(GET_DISPENSER_USSAGE_MOCK.usages.length)).toBeInTheDocument();
      expect(screen.getByText(GET_DISPENSER_USSAGE_MOCK.amount)).toBeInTheDocument();
      GET_DISPENSER_USSAGE_MOCK.usages.forEach((usage, index) => {
        expect(screen.getByText(index)).toBeInTheDocument();
        expect(
          screen.getByText(
            Math.abs(new Date(usage.closed_at).getMilliseconds() - new Date(usage.opened_at).getMilliseconds())
          )
        ).toBeInTheDocument();
        expect(screen.getByText(usage.total_spent)).toBeInTheDocument();
      });
    });

    const row = screen.getByText("0");
    expect(row).toBeInTheDocument();
  });

  it("handles missing or invalid ID gracefully", async () => {
    vi.spyOn(apiDispenser, "getDispenserUsage").mockResolvedValue({ amount: 0, usages: [] });

    render(<DispenserStats />, { route: "admin/invalid" });

    await waitFor(() => {
      expect(screen.getByText("STATISTICS SCREEN: invalid")).toBeInTheDocument();
    });
  });
});
