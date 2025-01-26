import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "../../../testing/CustomRender/CustomRender";
import AdminPanel from "..";
import * as apiDispenser from "../../../api/apiDispenser";
import { CREATE_DISPENSER_MOCK, GET_ALL_DISPENSERS_MOCK } from "../../../api/__mocks__/apiDispenserMock";
import userEvent from "@testing-library/user-event";

const mockNavigate = vi.fn();
const mockCreateDispenser = vi.hoisted(() => vi.fn());
const mockGetAllDispensers = vi.hoisted(() => vi.fn());

describe("AdminPanel Component", () => {
  beforeEach(() => {
    vi.mock("react-router", async () => ({
      ...(await vi.importActual("react-router")),
      useNavigate: () => mockNavigate,
    }));
    vi.mock("../../../api/apiDispenser", async () => ({
      ...(await vi.importActual("../../../api/apiDispenser")),
      createDispenser: mockCreateDispenser,
      getAllDispensers: mockGetAllDispensers,
    }));
  });

  afterEach(() => vi.clearAllMocks());

  it("renders a list of dispensers when data is available", async () => {
    vi.spyOn(apiDispenser, "getAllDispensers").mockResolvedValue(GET_ALL_DISPENSERS_MOCK);

    render(<AdminPanel />);

    await waitFor(() => {
      GET_ALL_DISPENSERS_MOCK.forEach((dispenser) => {
        expect(screen.getByText(dispenser.id)).toBeInTheDocument();
      });
    });
  });

  it("calls navigate when a TableLine is clicked", async () => {
    vi.spyOn(apiDispenser, "getAllDispensers").mockResolvedValue(GET_ALL_DISPENSERS_MOCK);

    render(<AdminPanel />);

    await waitFor(async () => {
      const tableLine = await screen.findByText(GET_ALL_DISPENSERS_MOCK[0].id);
      fireEvent.click(tableLine);
    });

    expect(mockNavigate).toHaveBeenCalledWith(`/admin/${GET_ALL_DISPENSERS_MOCK[0].id}`);
  });

  it("calls handleAddDispenser and refreshes the dispenser list", async () => {
    vi.spyOn(apiDispenser, "getAllDispensers").mockResolvedValue(GET_ALL_DISPENSERS_MOCK);
    vi.spyOn(apiDispenser, "createDispenser").mockResolvedValue(CREATE_DISPENSER_MOCK);

    render(<AdminPanel />);

    await waitFor(async () => {
      expect(await screen.findByText(GET_ALL_DISPENSERS_MOCK[0].id)).toBeInTheDocument();
    });

    const input = screen.getByLabelText(/Flow/);
    const button = screen.getByText("Add Dispenser");

    await userEvent.type(input, "0.25");
    await userEvent.click(button);

    await waitFor(async () => {
      expect(mockCreateDispenser).toHaveBeenCalled();
      expect(mockGetAllDispensers).toHaveBeenCalledTimes(2);
      expect(await screen.findByText(CREATE_DISPENSER_MOCK.id)).toBeInTheDocument();
    });
  });
});
