import { describe, it, vi, expect, beforeEach } from "vitest";
import { fireEvent, render, screen, waitFor } from "../../../testing/CustomRender/CustomRender";
import Dispensers from "..";
import * as apiDispenser from "../../../api/apiDispenser";
import { GET_ALL_DISPENSERS_MOCK } from "../../../api/__mocks__/apiDispenserMock";
import userEvent from "@testing-library/user-event";

const mockNavigate = vi.fn();
const mockGetAllDispensers = vi.hoisted(() => vi.fn());

describe("Dispensers Component", () => {
  beforeEach(() => {
    vi.mock("react-router", async () => ({
      ...(await vi.importActual("react-router")),
      useNavigate: () => mockNavigate,
    }));
    vi.mock("../../../api/apiDispenser", async () => ({
      ...(await vi.importActual("../../../api/apiDispenser")),
      getAllDispensers: mockGetAllDispensers,
    }));
  });

  afterEach(() => vi.clearAllMocks());

  it("renders EMPTY when no dispensers are returned", async () => {
    vi.spyOn(apiDispenser, "getAllDispensers").mockResolvedValue([]);

    render(<Dispensers />);

    await waitFor(async () => expect(await screen.findByText("There are no dispensers yet!")).toBeInTheDocument());
  });

  it("renders a list of dispensers when data is available", async () => {
    vi.spyOn(apiDispenser, "getAllDispensers").mockResolvedValue(GET_ALL_DISPENSERS_MOCK);

    render(<Dispensers />);

    await waitFor(() => {
      GET_ALL_DISPENSERS_MOCK.forEach((dispenser) => {
        expect(screen.getByText(dispenser.id)).toBeInTheDocument();
      });
    });
  });

  it("calls navigate when a dispenser is clicked", async () => {
    vi.spyOn(apiDispenser, "getAllDispensers").mockResolvedValue(GET_ALL_DISPENSERS_MOCK);

    render(<Dispensers />);

    await waitFor(async () => {
      const tableLine = await screen.findByText(GET_ALL_DISPENSERS_MOCK[0].id);
      fireEvent.click(tableLine);
    });

    expect(mockNavigate).toHaveBeenCalledWith(`/${GET_ALL_DISPENSERS_MOCK[0].id}`);
  });
});
