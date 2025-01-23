import { describe, it, vi, expect, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Dispensers from "..";

import * as apiDispenser from "../../../api/apiDispenser";
import { GET_ALL_DISPENSERS_MOCK } from "../../../api/__mocks__/apiDispenserMock";

const mockNavigate = vi.fn();

describe("Dispensers Component", () => {
  beforeEach(() => {
    vi.mock("react-router", () => ({ ...vi.importActual("react-router"), useNavigate: () => mockNavigate }));
  });

  afterEach(() => vi.clearAllMocks());

  it("renders EMPTY when no dispensers are returned", async () => {
    vi.spyOn(apiDispenser, "getAllDispensers").mockResolvedValue([]);

    render(
      <MemoryRouter>
        <Dispensers />
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.getByText("EMPTY")).toBeInTheDocument());
  });

  it("renders a list of dispensers", async () => {
    vi.spyOn(apiDispenser, "getAllDispensers").mockResolvedValue(GET_ALL_DISPENSERS_MOCK);

    render(
      <MemoryRouter>
        <Dispensers />
      </MemoryRouter>
    );

    await waitFor(() => {
      GET_ALL_DISPENSERS_MOCK.forEach((dispenser) => {
        expect(screen.getByText(dispenser.id)).toBeInTheDocument();
      });
    });
  });

  it("calls navigate when a dispenser is clicked", async () => {
    vi.spyOn(apiDispenser, "getAllDispensers").mockResolvedValue(GET_ALL_DISPENSERS_MOCK);

    render(
      <MemoryRouter>
        <Dispensers />
      </MemoryRouter>
    );

    await waitFor(() => {
      GET_ALL_DISPENSERS_MOCK.forEach((dispenser) => {
        const dispenserElement = screen.getByText(dispenser.id);
        dispenserElement.click();
        expect(mockNavigate).toHaveBeenCalledWith(`/${dispenser.id}`);
      });
    });
  });
});
