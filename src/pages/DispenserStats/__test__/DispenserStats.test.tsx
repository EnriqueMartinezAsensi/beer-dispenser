import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "../../../testing/CustomRender/CustomRender";
import * as apiDispenser from "../../../api/apiDispenser";
import DispenserStats from "..";
import { GET_DISPENSER_USAGE_MOCK } from "../../../api/__mocks__/apiDispenserMock";

const mockGetDispenserUsage = vi.hoisted(() => vi.fn());

describe("DispenserStats Component", () => {
  beforeEach(() => {
    vi.mock("react-router", () => ({
      ...vi.importActual("react-router"),
      useParams: () => ({ id: "123" }),
    }));
    vi.mock("../../../api/apiDispenser", () => ({
      ...vi.importActual("../../../api/apiDispenser"),
      getDispenserUsage: mockGetDispenserUsage,
    }));
  });

  it("fetches and displays dispenser usage data for the given ID", async () => {
    vi.spyOn(apiDispenser, "getDispenserUsage").mockResolvedValue(GET_DISPENSER_USAGE_MOCK);

    render(<DispenserStats />);

    await waitFor(async () => {
      expect(await screen.findByText("STATISTICS SCREEN: 123")).toBeInTheDocument();
      expect(await screen.findByText(`Services: ${GET_DISPENSER_USAGE_MOCK.usages.length}`)).toBeInTheDocument();
      expect(await screen.findByText(`Total earnings: ${GET_DISPENSER_USAGE_MOCK.amount}`)).toBeInTheDocument();
      GET_DISPENSER_USAGE_MOCK.usages.forEach(async (usage, index) => {
        expect(await screen.findByText(index)).toBeInTheDocument();
        expect(
          await screen.findByText(
            Math.abs(new Date(usage.closed_at).getMilliseconds() - new Date(usage.opened_at).getMilliseconds())
          )
        ).toBeInTheDocument();
      });
    });

    const row = await screen.findByText("0");
    expect(row).toBeInTheDocument();
  });
});
