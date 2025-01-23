import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "../../../testing/CustomRender/CustomRender";
import AdminPanel from "..";
import * as apiDispenser from "../../../api/apiDispenser";
import { CREATE_DISPENSER_MOCK, GET_ALL_DISPENSERS_MOCK } from "../../../api/__mocks__/apiDispenserMock";

const mockNavigate = vi.fn();
const mockCreateDispenser = vi.fn();
const mockGetAllDispensers = vi.fn();

describe("AdminPanel Component", () => {
  beforeEach(() => {
    vi.mock("react-router", () => ({ ...vi.importActual("react-router"), useNavigate: () => mockNavigate }));
  });

  afterEach(() => vi.clearAllMocks());

  it("renders 'No tabs were found on the database' when no dispensers are available", async () => {
    vi.spyOn(apiDispenser, "getAllDispensers").mockResolvedValue([]);

    render(<AdminPanel />);

    await waitFor(() => {
      expect(screen.getByText("No tabs were found on the database.")).toBeInTheDocument();
    });
  });

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

    await waitFor(() => {
      const tableLine = screen.getByText(GET_ALL_DISPENSERS_MOCK[0].id);
      fireEvent.click(tableLine);
    });

    expect(mockNavigate).toHaveBeenCalledWith(`/admin/${GET_ALL_DISPENSERS_MOCK[0].id}`);
  });

  it("calls handleAddDispenser and refreshes the dispenser list", async () => {
    vi.spyOn(apiDispenser, "getAllDispensers").mockResolvedValue(GET_ALL_DISPENSERS_MOCK);
    vi.spyOn(apiDispenser, "createDispenser").mockResolvedValue(CREATE_DISPENSER_MOCK);

    render(<AdminPanel />);

    await waitFor(() => {
      expect(screen.getByText(GET_ALL_DISPENSERS_MOCK[0].id)).toBeInTheDocument();
    });

    const input = screen.getByLabelText(/Flow/);
    const button = screen.getByText("Add Dispenser");

    fireEvent.change(input, { target: { value: 0.25 } }); //Fire event will not work with MUI
    fireEvent.click(button);

    await waitFor(() => {
      expect(mockCreateDispenser).toHaveBeenCalledWith(0.25);
      expect(mockGetAllDispensers).toHaveBeenCalledTimes(2);
      expect(screen.getByText("2")).toBeInTheDocument();
    });
  });
});
