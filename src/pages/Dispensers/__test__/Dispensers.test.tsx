import { describe, it, vi, expect, beforeEach } from "vitest";
import { render, screen, waitFor } from "../../../testing/CustomRender/CustomRender";
import Dispensers from "..";
import * as apiDispenser from "../../../api/apiDispenser";
import { GET_ALL_DISPENSERS_MOCK } from "../../../api/__mocks__/apiDispenserMock";

const mockNavigate = vi.fn();
const mockGetAllDispensers = vi.hoisted(() => vi.fn());

describe("Dispensers Component", () => {
  beforeEach(() => {
    vi.mock("react-router", () => ({ ...vi.importActual("react-router"), useNavigate: () => mockNavigate }));
    vi.mock("../../../api/apiDispenser", () => ({
      ...vi.importActual("../../../api/apiDispenser"),
      getAllDispensers: mockGetAllDispensers,
    }));
  });

  afterEach(() => vi.clearAllMocks());

  it("renders EMPTY when no dispensers are returned", async () => {
    vi.spyOn(apiDispenser, "getAllDispensers").mockResolvedValue([]);

    render(<Dispensers />);

    await waitFor(async () => expect(await screen.findByText("There are no dispensers yet!")).toBeInTheDocument());
  });

  /* it("renders a list of dispensers", async () => {
    vi.spyOn(apiDispenser, "getAllDispensers").mockResolvedValue(GET_ALL_DISPENSERS_MOCK);

    render(<Dispensers />);

    await waitFor(() => {
      GET_ALL_DISPENSERS_MOCK.forEach(async (dispenser) => {
        expect(await screen.findByText(dispenser.id)).toBeInTheDocument();
      });
    });
  });

  it("calls navigate when a dispenser is clicked", async () => {
    vi.spyOn(apiDispenser, "getAllDispensers").mockResolvedValue(GET_ALL_DISPENSERS_MOCK);

    render(<Dispensers />);

    await waitFor(() => {
      GET_ALL_DISPENSERS_MOCK.forEach(async (dispenser) => {
        const dispenserElement = await screen.findByText(dispenser.id);
        dispenserElement.click();
        expect(mockNavigate).toHaveBeenCalledWith(`/${dispenser.id}`);
      });
    });
  }); */
});
